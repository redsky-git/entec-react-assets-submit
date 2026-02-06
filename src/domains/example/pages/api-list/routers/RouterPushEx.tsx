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

interface IRouterPushExProps {
	test?: string;
}

const RouterPushEx: IComponent<IRouterPushExProps> = (): JSX.Element => {
	// 예제화면으로 이동 handler
	const handlerRouterPush = () => {
		$router.push('/example/api/router-push-example-page01');
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
							<h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
								$router.push()
							</h1>
							<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
								&nbsp;
							</div>
						</div>
						<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
							<strong>React</strong>코드 작업 시 화면이동 처리를 위하여, <strong>Route주소(path)</strong> 를 이용하여
							각각의 콘텐츠로 이동 시켜주는{' '}
							<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
								$router
							</code>
							객체의
							<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
								push()
							</code>{' '}
							메서드입니다.
						</p>
					</div>
					<div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
						<Alert>
							<AlertCircleIcon />
							<AlertTitle>$router.push() 관련</AlertTitle>
							<AlertDescription>
								<ul className="list-inside list-disc text-sm">
									<li>
										<strong>$router.push()</strong>함수는 내부적으로{' '}
										<strong>
											<a href="https://reactrouter.com/">'react-router' 라이브러리</a>
										</strong>
										의 <strong>useNavigate</strong> 훅을 활용하여 구현 되었습니다.
									</li>
									<li>
										<strong>$router</strong> 객체는 <strong>entec-react-assets</strong>에서 제공하는 전역 객체이므로
										$router.push() 를 사용하기 위하여 따로 <strong>import</strong>를 하지 않아도 됩니다.
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
									Basic $router.push()
								</h2>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								화면이동 처리를 위한 예제입니다.
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
											<Button onClick={handlerRouterPush}>
												버튼을 누르면 예제화면 path '/example/router-push-example-page01'로 이동
											</Button>
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
	// 예제화면으로 이동 handler
	const handlerRouterPush = () => {
		$router.push('/example/router-push-example-page01');
	};

	return (
		<>
			<Button onClick={handlerRouterPush}>
				버튼을 누르면 예제화면 path '/example/router-push-example-page01'로 이동
			</Button>
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
									$router.push( 'path', &#123; 옵션객체 &#125; )
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>$router.push()</strong>를 호출할 때 <strong>라우터 Path</strong>와 함께 추가{' '}
								<strong>옵션</strong>을 설정할 수 있습니다. 옵션 목록은 <strong>entec-react-assets 가이드</strong>를
								참조하세요.
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
											{/*<Button onClick={handlerOpenAlertOptionDialog}>Alert 메시지와 옵션 설정하기</Button>*/}
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

RouterPushEx.displayName = 'RouterPushEx';
export default RouterPushEx;
