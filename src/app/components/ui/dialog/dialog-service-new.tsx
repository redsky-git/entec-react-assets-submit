import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	//DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/app/components/shadcn/ui/dialog';
import type { IDialogOptions, IDialogInstance } from '@/app/types/components';

// Props를 Proxy로 감싸서 변경 감지
//function createReactivePropsWrapper<T extends object>(target: T, onChange: () => void): T {
//	// 이미 Proxy인 경우 그대로 반환
//	if (target && typeof target === 'object' && '__isProxy__' in target) {
//		return target;
//	}

//	const handler: ProxyHandler<any> = {
//		get(obj, prop) {
//			// Proxy 식별자
//			if (prop === '__isProxy__') {
//				return true;
//			}

//			const value = obj[prop];

//			// 객체나 배열이면 재귀적으로 Proxy 적용
//			if (value && typeof value === 'object' && !('__isProxy__' in value)) {
//				return createReactivePropsWrapper(value, onChange);
//			}

//			return value;
//		},

//		set(obj, prop, value) {
//			const oldValue = obj[prop];
//			obj[prop] = value;

//			// 값이 실제로 변경된 경우에만 알림
//			if (oldValue !== value) {
//				// 비동기로 변경 알림 (배치 처리)
//				Promise.resolve().then(onChange);
//			}

//			return true;
//		},
//	};

//	return new Proxy(target, handler);
//}

// 깊은 복사 함수
function deepClone<T>(obj: T): T {
	if (obj === null || typeof obj !== 'object') {
		return obj;
	}

	if (Array.isArray(obj)) {
		return obj.map((item) => deepClone(item)) as any;
	}

	const cloned: any = {};
	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			cloned[key] = deepClone(obj[key]);
		}
	}

	return cloned;
}

// 깊은 비교 함수
function deepEqual(obj1: any, obj2: any): boolean {
	if (obj1 === obj2) return true;

	if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
		return false;
	}

	if (Array.isArray(obj1) && Array.isArray(obj2)) {
		if (obj1.length !== obj2.length) return false;
		return obj1.every((item, index) => deepEqual(item, obj2[index]));
	}

	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);

	if (keys1.length !== keys2.length) return false;

	return keys1.every((key) => deepEqual(obj1[key], obj2[key]));
}

class DialogService {
	private activeDialogs: Map<string, IDialogInstance> = new Map();

	private createDialogContainer(): HTMLDivElement {
		const container = document.createElement('div');
		document.body.appendChild(container);
		return container;
	}

	private removeDialogContainer(container: HTMLDivElement): void {
		if (container.parentNode) {
			container.parentNode.removeChild(container);
		}
	}

	//dialog<T = any>(options: IDialogOptions<T>): IDialogInstance & { getProps: () => T } {
	dialog<T = any>(options: IDialogOptions<T>): any {
		const id = `dialog-${Date.now()}-${Math.random()}`;
		const container = this.createDialogContainer();
		const root = createRoot(container);

		// 원본 props를 deep clone하여 저장
		let currentPropsSnapshot = deepClone(options.props || ({} as T));
		// 상태 업데이트 콜백을 저장할 변수
		let setPropsCallback: ((newProps: any) => void) | null = null;
		let isDialogMounted = false;

		const close = () => {
			isDialogMounted = false;
			this.activeDialogs.delete(id);
			root.unmount();
			this.removeDialogContainer(container);
		};

		const update = (newProps: any) => {
			currentPropsSnapshot = { ...currentPropsSnapshot, ...newProps };

			// 콜백이 등록되어 있으면 직접 state 업데이트 (재마운트 방지)
			if (setPropsCallback && isDialogMounted) {
				setPropsCallback(deepClone(currentPropsSnapshot));
			}
		};

		const renderDialog = () => {
			const Component = options.component;

			const DialogWrapper = () => {
				const [open, setOpen] = React.useState(true);
				const [props, setProps] = React.useState(() => deepClone(currentPropsSnapshot));
				const prevPropsSnapshotRef = useRef(currentPropsSnapshot);
				const animationFrameRef = useRef<number>(0);
				const originalPropsRef = useRef(options.props);

				// 원본 props 객체의 변경 감지 (폴링)
				useEffect(() => {
					isDialogMounted = true;

					const checkPropsUpdate = () => {
						if (originalPropsRef.current) {
							// 원본 props의 현재 값을 복사
							const currentOriginalProps = deepClone(originalPropsRef.current);

							// 이전 스냅샷과 비교
							if (!deepEqual(currentOriginalProps, prevPropsSnapshotRef.current)) {
								prevPropsSnapshotRef.current = currentOriginalProps;
								currentPropsSnapshot = currentOriginalProps;
								setProps(currentOriginalProps);
							}
						}

						animationFrameRef.current = requestAnimationFrame(checkPropsUpdate);
					};

					animationFrameRef.current = requestAnimationFrame(checkPropsUpdate);

					return () => {
						isDialogMounted = false;
						if (animationFrameRef.current) {
							cancelAnimationFrame(animationFrameRef.current);
						}
					};
				}, []);

				// 컴포넌트 마운트 시 콜백 등록
				useEffect(() => {
					setPropsCallback = (newProps) => {
						prevPropsSnapshotRef.current = newProps;
						setProps(newProps);
					};

					// 언마운트 시 콜백 해제
					return () => {
						setPropsCallback = null;
					};
				}, []);

				const handleClose = () => {
					setOpen(false);
					// Dialog 닫힘 애니메이션 후 정리
					setTimeout(() => {
						close();
					}, 200);
				};

				const handleConfirm = (data?: any) => {
					if (options?.onConfirm) {
						options.onConfirm(data);
					}
					handleClose();
				};

				return (
					<Dialog
						open={open}
						onOpenChange={(isOpen) => !isOpen && handleClose()}
					>
						<DialogContent className={options.className}>
							{(options.title || options.description) && (
								<DialogHeader>
									{options.title && <DialogTitle>{options.title}</DialogTitle>}
									{options.description && <DialogDescription>{options.description}</DialogDescription>}
								</DialogHeader>
							)}

							<Component
								{...(props as T)}
								onClose={handleClose}
								onConfirm={handleConfirm}
							/>
						</DialogContent>
					</Dialog>
				);
			};

			root.render(<DialogWrapper />);
		};

		renderDialog();

		const instance = {
			root,
			container,
			close,
			update,
			getProps: () => deepClone(currentPropsSnapshot),
		};

		this.activeDialogs.set(id, instance);
		return instance;
	}

	closeAll(): void {
		this.activeDialogs.forEach((instance) => {
			instance.close();
		});
		this.activeDialogs.clear();
	}
}

// 싱글톤 인스턴스 생성
const dialogService = new DialogService();

// window 객체에 $ui 추가
//declare global {
//  interface Window {
//    $ui: {
//      dialog: typeof dialogService.dialog.bind(typeof dialogService);
//      closeAllDialogs: typeof dialogService.closeAll.bind(typeof dialogService);
//    };
//  }
//}

//// window.$ui 초기화
//if (typeof window !== 'undefined') {
//  window.$ui = {
//    dialog: dialogService.dialog.bind(dialogService),
//    closeAllDialogs: dialogService.closeAll.bind(dialogService),
//  };
//}
// $ui.dialog() 으로 사용할 함수
export const dialog = (option: IDialogOptions) => {
	const _inst = new DialogService();

	return _inst.dialog(option);
};

export default dialogService;
