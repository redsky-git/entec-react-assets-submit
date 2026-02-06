import type { IComponent } from '@/app/types/common';
import type { JSX } from 'react';
import { useEffect } from 'react';

import { Alert, AlertDescription, AlertTitle } from '@/app/components/shadcn/ui/alert';
import { Button } from '@/app/components/ui';
import { Card, CardContent } from '@/app/components/shadcn/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/shadcn/ui/tabs';
import { AlertCircleIcon } from 'lucide-react';
import { Separator } from '@/app/components/shadcn/ui/separator';

import UICodeBlock from '@/shared/components/common/ui/UICodeBlock';

interface IUIAlertDialogExProps {
	test?: string;
}

const UIAlertDialogEx: IComponent<IUIAlertDialogExProps> = (): JSX.Element => {
	// Alert 띄우기 버튼 클릭 handler
	const handlerOpenAlertDialog = () => {
		$ui.alert('$ui.alert() 테스트', { title: 'Alert 제목' });
	};

	// Alert 메시지만 보이기 테스트 handler
	const handlerOpenAlertDialogMessage = () => {
		$ui.alert('Alert 메시지만 보이기 테스트');
	};

	// Alert 메시지 + 옵션 테스트 handler
	const handlerOpenAlertOptionDialog = () => {
		$ui.alert('Alert 메시지', { title: 'Alert 제목' });
	};

	// useEffect hooks
	useEffect(() => {
		// ...
	}, []);

	return (
		<>
			<div className="flex min-w-0 flex-1 flex-col">
				<div className="h-(--top-spacing) shrink-0" />
				<div className="mx-auto flex w-full  min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300">
					<div className="flex flex-col gap-2">
						<div className="flex items-start justify-between">
							<h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">$ui.alert()</h1>
							<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
								&nbsp;
							</div>
						</div>
						<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
							<strong>React</strong> 코드 작업 시 <strong>Alert Dialog(팝업 경고 창)</strong>를{' '}
							<strong className="text-blue-500">window.alert()</strong> 네이티브 <strong>JavaScript</strong> 함수 처럼
							한 줄 코드로 표현할 수 있는 <strong>$ui</strong> 객체 함수입니다.
						</p>
					</div>
					<div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
						<Alert>
							<AlertCircleIcon />
							<AlertTitle>$ui.alert() 관련</AlertTitle>
							<AlertDescription>
								<ul className="list-inside list-disc text-sm">
									<li>
										<strong>$ui.alert()</strong>함수는 내부적으로{' '}
										<strong>
											<a href="https://ui.shadcn.com/docs/components/alert-dialog">shadcn/ui의 Alert Dialog</a>
										</strong>{' '}
										컴포넌트와{' '}
										<strong>
											<a href="https://tailwindcss.com/">TailwindCSS</a>
										</strong>
										를 사용하여 구현 되었습니다.
									</li>
									<li>
										<strong>$ui</strong> 객체는 <strong>entec-react-assets</strong>에서 제공하는 전역 객체이므로
										$ui.alert() 를 사용하기 위하여 따로 <strong>import</strong>를 하지 않아도 됩니다.
									</li>
								</ul>
							</AlertDescription>
						</Alert>
						<Separator className="my-6" />
						{/* example 블럭요서 START */}
						<div className="flex flex-col gap-2 pt-6">
							<div className="flex items-start justify-between">
								<h2
									data-shorcut="true"
									className="scroll-m-20 text-3xl font-semibold tracking-tight sm:text-3xl xl:text-3xl"
								>
									Basic Alert Dialog
								</h2>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								버튼을 누르면{' '}
								<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
									$ui.alert()
								</code>{' '}
								함수를 사용하여 화면에 <strong>Alert Dialog</strong>를 띄웁니다.
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
										<CardContent className="pt-25 pb-25 flex items-center justify-center">
											<Button onClick={handlerOpenAlertDialog}>Alert 띄우기</Button>
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value="code">
									<UICodeBlock
										language="tsx"
										filename="SamplePage.tsx"
									>
										{`import { Button } from '@/app/components/ui';

function SamplePage() {
	// Alert 띄우기 버튼 클릭 handler
	const handlerOpenAlertDialog = () => {
		$ui.alert('$ui.alert() 테스트', { title: 'Alert 제목' });
	};

	return (
		<>
			<Button onClick={handlerOpenAlertDialog}>Alert 띄우기</Button>
		</>
	);
}`}
									</UICodeBlock>
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
									$ui.alert('메시지')
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>JavaScript</strong> 코드에서 <strong>$ui.alert()</strong> 함수를 호출할 때 메시지만 보여주는
								가장 기본적인 호출 방법입니다.
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
										<CardContent className="pt-25 pb-25 flex items-center justify-center">
											<Button onClick={handlerOpenAlertDialogMessage}>Alert 메시지만 보이기</Button>
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value="code">
									<UICodeBlock
										language="tsx"
										filename="SamplePage.tsx"
									>
										{`import { Button } from '@/app/components/ui';

function SamplePage() {
	// Alert 띄우기 버튼 클릭 handler
	const handlerOpenAlertDialog = () => {
		$ui.alert('Alert 메시지만 보이기 테스트');
	};

	return (
		<>
			<Button onClick={handlerOpenAlertDialog}>Alert 메시지만 보이기</Button>
		</>
	);
}`}
									</UICodeBlock>
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
									$ui.alert( '메시지', &#123; 옵션객체 &#125; )
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>$ui.alert()</strong>를 호출할 때 <strong>메시지</strong>와 함께 추가 <strong>옵션</strong>을
								설정할 수 있습니다. 옵션 목록은 <strong>entec-react-assets 가이드</strong>를 참조하세요.
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
										<CardContent className="pt-25 pb-25 flex items-center justify-center">
											<Button onClick={handlerOpenAlertOptionDialog}>Alert 메시지와 옵션 설정하기</Button>
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value="code">
									<UICodeBlock
										language="tsx"
										filename="SamplePage.tsx"
									>
										{`import { Button } from '@/app/components/ui';

function SamplePage() {
	// Alert 띄우기 버튼 클릭 handler
	const handlerOpenAlertOptionDialog = () => {
		$ui.alert('Alert 메시지', { title: 'Alert 제목' });
	};

	return (
		<>
			<Button onClick={handlerOpenAlertOptionDialog}>Alert 메시지와 옵션 설정하기</Button>
		</>
	);
}`}
									</UICodeBlock>
								</TabsContent>
							</Tabs>
						</div>
						{/* example 블럭요서 END */}
					</div>
				</div>
			</div>
		</>
	);
};

UIAlertDialogEx.displayName = 'UIAlertDialogEx';
export default UIAlertDialogEx;
