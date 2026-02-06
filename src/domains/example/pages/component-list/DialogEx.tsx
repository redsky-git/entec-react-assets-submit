import type { IComponent } from '@/app/types/common';
import type { JSX } from 'react';
import { useEffect, useRef } from 'react';

import { Card, CardContent } from '@/app/components/shadcn/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/shadcn/ui/tabs';
import { Separator } from '@/app/components/shadcn/ui/separator';
import { SquareArrowRight } from 'lucide-react';
import loadable from '@loadable/component';

import UICodeBlock from '@/shared/components/common/ui/UICodeBlock';

import { Button } from '@/app/components/ui';
//const NotificationDialog = loadable(
//	() => import('@/domains/example/pages/component-list/dialog-ex/NotificationDialog'),
//);
const EditProfileDialog = loadable(() => import('@/domains/example/pages/component-list/dialog-ex/EditProfileDialog'));

interface IDialogExProps {
	test?: string;
}

const DialogEx: IComponent<IDialogExProps> = (): JSX.Element => {
	const dialogRef = useRef<any>(null);
	//const [noti, setNoti] = useState<any[]>([]);
	// useEffect hooks
	useEffect(() => {
		// ...
	}, []);

	// Dialog 띄우기 버튼 클릭 handler
	const handlerOpenDialog = () => {
		//setNoti([]);
		dialogRef.current = $ui.dialog({
			component: EditProfileDialog,
			title: '프로필 편집',
			description: '여기에서 프로필을 변경하세요.',
			props: {},
		});
		let notifId = 1;
		const interval = setInterval(() => {
			const currentNotifications = dialogRef.current.props.notifications;
			console.log('notification interval 값 변경:::', currentNotifications);

			const newNotif = {
				id: notifId++,
				message: `새로운 알림 #${notifId - 1}`,
				time: new Date().toLocaleTimeString('ko-KR'),
			};

			// notifications 값이 undefined일 경우 빈 배열로 대체하여 오류 방지
			dialogRef.current.props.notifications = [
				...(Array.isArray(currentNotifications) ? currentNotifications : []),
				newNotif,
			];

			if (notifId > 5) {
				clearInterval(interval);
			}
		}, 2000);
	};

	return (
		<>
			<div className="flex min-w-0 flex-1 flex-col">
				<div className="h-(--top-spacing) shrink-0" />
				<div className="mx-auto flex w-full  min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300">
					<div className="flex flex-col gap-2">
						<div className="flex items-start justify-between">
							<h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">Dialog</h1>
							<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
								&nbsp;
							</div>
						</div>
						<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
							<strong>Dialog</strong> 컴포넌트는 사용자에게 별도의 새 창 형태의 UI로 특정 정보를 알리거나, 결정을
							요구하거나, 추가 정보를 입력받기 위해 사용됩니다.
						</p>
						<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
							<strong>entec-react-assets</strong>프로젝트에서 <strong>Dialog</strong>를 사용하는 방법은{' '}
							<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
								$ui.dialog()
							</code>{' '}
							함수를 호출하여 간단하게 구현할 수 있습니다.
						</p>
					</div>
					<div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
						{/*<Alert>
							<AlertCircleIcon />
							<AlertTitle>업데이트 정보 :</AlertTitle>
							<AlertDescription>
								<p>Please verify your billing information and try again.</p>
								<ul className="list-inside list-disc text-sm">
									<li>Check your card details</li>
									<li>Ensure sufficient funds</li>
									<li>Verify billing address</li>
								</ul>
							</AlertDescription>
						</Alert>*/}
						<Separator className="my-6" />
						{/* example 블럭요서 START */}
						<div className="flex flex-col gap-2 pt-6">
							<div className="flex items-start justify-between">
								<h2
									data-shorcut="true"
									className="scroll-m-20 text-3xl font-semibold tracking-tight sm:text-3xl xl:text-3xl"
								>
									Basic{' '}
									<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[1.8rem] break-words outline-none">
										$ui.dialog()
									</code>{' '}
									사용 예제
								</h2>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>
									<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
										$ui.dialog()
									</code>
								</strong>{' '}
								함수를 사용하여 <strong>Dialog</strong>를 구현한 기본 예제입니다.
							</p>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>
									<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
										$ui.dialog()
									</code>
								</strong>{' '}
								함수는 내부적으로 <strong>shadcn/ui</strong> 라이브러리의 Dialog 컴포넌트를 사용합니다.
							</p>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>
									<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
										$ui.dialog()
									</code>
								</strong>{' '}
								함수는 간단하게 <strong>JavaScript</strong> 코드로 Dialog를 띄울 수 있게 만든 <strong>$ui</strong>{' '}
								객체의 메서드입니다.
							</p>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								좀 더 자세한 사용법은 entec-react-assets 사용가이드 공식문서를 참고하시고, 다양한 예제는 다음 버튼을
								선택하여 확인할 수 있습니다.
								<Button
									variant="outline"
									onClick={() => $router.push('/example/ui-dialog-ex')}
								>
									<SquareArrowRight />
									<strong>$ui.dialog() 예제 화면으로 이동</strong>
								</Button>
							</p>
						</div>
						<div className="w-full flex-1 py-4">
							<Tabs defaultValue="preview">
								<TabsList>
									<TabsTrigger value="preview">Preview</TabsTrigger>
									<TabsTrigger value="code">Code</TabsTrigger>
								</TabsList>
								<TabsContent value="preview">
									<Card>
										<CardContent className="pt-5 pb-5 flex items-center justify-center">
											<Button onClick={handlerOpenDialog}>Dialog 띄우기</Button>
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value="code">
									<Card>
										<CardContent className="grid gap-6">
											<UICodeBlock
												language="tsx"
												filename="SamplePage.tsx"
											>
												{`import { Button } from '@/app/components/ui';
// Dialog의 컨텐츠로 보여지는 컴포넌트를 가져옵니다.
import EditProfileDialog from '@/domains/example/pages/component-list/dialog-ex/EditProfileDialog';

function SamplePage() {

	// Dialog 띄우기 버튼 클릭 handler
	const handlerOpenDialog = () => {
		$ui.dialog({
			component: EditProfileDialog,
			title: '프로필 편집',
			description: '여기에서 프로필을 변경하세요.',
		});
	};

	return (
		<div>
			<Button onClick={handlerOpenDialog}>Dialog 띄우기</Button>
		</div>
	);
}`}
											</UICodeBlock>
											<UICodeBlock
												language="tsx"
												filename="EditProfileDialog.tsx"
											>
												{`import type { IComponent } from '@/app/types/common';
import type { JSX } from 'react';
import { Button, Input } from '@/app/components/ui';

interface IEditProfileDialogProps {
	onClose: () => void;
}

const EditProfileDialog: IComponent<IEditProfileDialogProps> = ({ onClose }): JSX.Element => {
	return (
		<div className="space-y-4">
			<div className="space-y-2 max-h-80 overflow-y-auto">
				<div className="grid gap-4">
					<div className="grid gap-3">
						<label htmlFor="name-1">Name</label>
						<Input
							id="name-1"
							name="name"
							defaultValue="홍길동"
						/>
					</div>
					<div className="grid gap-3">
						<label htmlFor="username-1">Username</label>
						<Input
							id="username-1"
							name="username"
							defaultValue="@hong"
						/>
					</div>
				</div>
			</div>

			<div className="flex justify-end">
				<Button onClick={onClose}>닫기</Button>
			</div>
		</div>
	);
};

EditProfileDialog.displayName = 'EditProfileDialog';
export default EditProfileDialog;
`}
											</UICodeBlock>
										</CardContent>
									</Card>
								</TabsContent>
							</Tabs>
						</div>
						{/* example 블럭요서 END */}
						{/* example 블럭요서 START */}
						<div className="flex flex-col gap-2 pt-6">
							<div className="flex items-start justify-between">
								<h3
									data-shorcut="true"
									className="scroll-m-20 text-2xl font-semibold tracking-tight sm:text-2xl xl:text-2xl"
								>
									<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[1.8rem] break-words outline-none">
										$ui.dialog()
									</code>{' '}
									예제 화면 이동
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<Button
									variant="outline"
									onClick={() => $router.push('/example/ui-dialog-ex')}
								>
									<SquareArrowRight />
									<strong>$ui.dialog() 예제 화면으로 이동</strong>
								</Button>
							</p>
						</div>
						{/* example 블럭요소 START */}
						{/*<div className="w-full flex-1 py-4">
							<Tabs defaultValue="preview">
								<TabsList>
									<TabsTrigger value="preview">Preview</TabsTrigger>
									<TabsTrigger value="code">Code</TabsTrigger>
								</TabsList>
								<TabsContent value="preview">
									<Card>
										<CardContent className="pt-25 pb-25 flex items-center justify-center">
											<Button>Alert 띄우기</Button>
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value="code">
									<Card>
										<CardContent className="grid gap-6">
											<UICodeBlock
												language="tsx"
												filename="SamplePage.tsx"
											>
												{`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui';

function SamplePage() {
	return (
		<div>
		</div>
	);
}`}
											</UICodeBlock>
										</CardContent>
									</Card>
								</TabsContent>
							</Tabs>
						</div>*/}
						{/* example 블럭요소 END */}
					</div>
				</div>
			</div>
		</>
	);
};

DialogEx.displayName = 'DialogEx';
export default DialogEx;
