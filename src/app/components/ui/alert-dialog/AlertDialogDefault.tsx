import type { IComponent } from '@/app/types/common';
import { useEffect, useState } from 'react';

import {
	AlertDialog,
	AlertDialogAction,
	//AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/app/components/shadcn/ui/alert-dialog';

// AlertDialogDefault 컴포넌트 Props 타입 선언
export interface IAlertDialogDefaultProps {
	title?: string;
	message: string;
	type?: 'info' | 'warning' | 'error';
	confirmButtonText?: string;
	cancelButtonText?: string;
}

// AlertDialogDefault 컴포넌트 ($ui.alert() 으로 사용할 UI 컴포넌트)
const AlertDialogDefault: IComponent<IAlertDialogDefaultProps> = ({
	title,
	message,
	type = 'info',
	confirmButtonText,
	//cancelButtonText,
}): React.ReactNode | any => {
	const [confirmText, setConfirmText] = useState<string>('확인');
	//const [cancelText, setCancelText] = useState<string>('취소');

	// TODO: 임시
	console.log(type);

	// alert-dialog 닫기 버튼 클릭 handler
	//const handleClose = () => {
	//	console.log('AlertDialog 닫기!!!');
	//};

	const handleAction = () => {
		console.log('AlertDialog Action 누름!!!');
	};

	useEffect(() => {
		if (confirmButtonText) {
			setConfirmText(confirmButtonText);
		}
		//if (cancelButtonText) {
		//	setCancelText(cancelButtonText);
		//}
	}, []);

	return (
		<AlertDialog defaultOpen>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{message}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					{/*<AlertDialogCancel onClick={handleClose}>{cancelText}</AlertDialogCancel>*/}
					<AlertDialogAction onClick={handleAction}>{confirmText}</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

AlertDialogDefault.displayName = 'AlertDialogDefault';
export default AlertDialogDefault;
