import type { IComponent } from '@/app/types/common';
import type { JSX } from 'react';
import { useEffect } from 'react';

import { Alert, AlertDescription, AlertTitle } from '@/app/components/shadcn/ui/alert';
import { Button } from '@/app/components/ui';
import { Card, CardContent } from '@/app/components/shadcn/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/shadcn/ui/tabs';
import { AlertCircleIcon } from 'lucide-react';
import { Separator } from '@/app/components/shadcn/ui/separator';
import { Textarea } from '@/app/components/shadcn/ui/textarea';
import { Label } from '@/app/components/shadcn/ui/label';

import UICodeBlock from '@/shared/components/common/ui/UICodeBlock';
import { useAPI } from '@/app/hooks';

interface IHookUseReduxAPIExProps {
	test?: string;
}

const HookUseReduxAPIEx: IComponent<IHookUseReduxAPIExProps> = (): JSX.Element => {
	const { data, fetch, setData } = useAPI('exampleStore/test');

	// api 호출 버튼 클릭 handler
	const handlerCallAPI = () => {
		fetch({ option: { method: 'get' } });
	};

	// api 결과 데이터 초기화 handler
	const handlerInitData = () => {
		setData(null);
	};

	// textarea onChange handler
	const handlerTextarea = () => {
		//
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
							<h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">useReduxAPI</h1>
							<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
								&nbsp;
							</div>
						</div>
						<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
							원하는 api url에 REST API를 호출하고 결과 데이터를 Redux에 저장하는 훅 함수입니다.
						</p>
					</div>
					<div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
						<Alert>
							<AlertCircleIcon />
							<AlertTitle>Redux Toolkit을 사용한 전역 상태 데이터 관리</AlertTitle>
							<AlertDescription>
								<p>
									<strong>REST API response</strong> 데이터를 <strong>Redux-Toolkit</strong> 상태 관리 라이브러리를
									사용하여 관리합니다.
								</p>
								<ul className="list-inside list-disc text-sm">
									<li>
										<a href="https://redux-toolkit.js.org">Redux-Toolkit 공식문서 : https://redux-toolkit.js.org</a>
									</li>
									<li>
										<strong>REST API</strong> 호출 및 결과 데이터 사용을 위한 <strong>useReduxAPI</strong> 훅을 사용하면
										원하는 api url에서 비동기 데이터를 가져오고 전역 State에 저장합니다.
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
									API 호출 예제
								</h2>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>Button</strong>을 누르면{' '}
								<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
									api서버 도메인/api/v1/search
								</code>{' '}
								url로 요청을 보냅니다.
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
										<CardContent className="flex items-center justify-center">
											<div className="grid w-full gap-2">
												<Label htmlFor="message-2">결과 데이터</Label>
												<Textarea
													value={`Response Data (api서버 도메인/api/v1/search) : ${JSON.stringify(data)}`}
													className="h-70"
													placeholder="Response Data (api서버 도메인/api/v1/search)"
													onChange={handlerTextarea}
												/>
												<Button onClick={handlerCallAPI}>Send API</Button>
												<Button onClick={handlerInitData}>결과 데이터 초기화</Button>
											</div>
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
												{`import { Button, Textarea } from '@/app/components/ui';

function SamplePage() {
	// useReduxAPI 훅을 통하여 fetch함수와 data를 가져옵니다. setData함수는 state에 직접 값을 넣을 때 사용합니다.
	const { data, fetch, setData } = useReduxAPI('exampleStore/test');
	
	// api 호출 버튼 클릭 handler
	const handlerCallAPI = () => {
		// 버튼을 누르면 fetch함수를 통하여 API를 호출합니다.
		fetch({ option: { method: 'get' } });
	};

	// api 결과 데이터 초기화 handler
	const handlerInitData = () => {
		setData(null);
	};

	return (
		<>
			<Textarea
				value={\`Response Data (api서버 도메인/api/v1/search) : \${JSON.stringify(data)}\`}
				className="h-70"
			/>
			<Button onClick={handlerCallAPI}>Send API</Button>
			<Button onClick={handlerInitData}>결과 데이터 초기화</Button>
		</>
	);
}`}
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
									action 생성하기
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>useReduxAPI</strong>훅을 사용하기 위해서는 파라미터로 넣어줄 <strong>action</strong>이
								필요합니다.
							</p>
						</div>
						<div className="w-full flex-1 py-4">
							<Card>
								<CardContent className="grid gap-6">
									<Label htmlFor="message-2">
										업무 도메인의 <strong>store폴더</strong>에 action 생성 예제 코드
									</Label>
									<UICodeBlock
										language="ts"
										filename="/src/domains/example/store/index.ts"
									>
										{`import type { IActionObject, IRootState } from '@/app/types/store';
import url from '@/domains/example/api/url';

export interface IExampleStore<T = IRootState> {
	test: T;
	// api action과 똑같이 interface를 등록해야한다.
}

// Example Action 객체 ==============================================
// 생성할 Store state의 이름을 정하고, 값으로 actionType과 url을 입력한다.
// API호출이 아닌 경우에는 url을 입력 하지 않아도 된다.
// actionType은 전역 store에 연결한 이름을 '/'로 합쳐서 생성한다.
const exampleAction: IExampleStore<IActionObject> = {
	test: { actionType: 'exampleStore/test', url: url.TEST },
	// 원하는 api action을 계속 추가할 수 있다.
} as const;

export default exampleAction;
`}
									</UICodeBlock>
								</CardContent>
							</Card>
						</div>
						{/* example 블럭요서 END */}
						{/* example 블럭요서 START */}
						<div className="flex flex-col gap-2 pt-6">
							<div className="flex items-start justify-between">
								<h3
									data-shorcut="true"
									className="scroll-m-20 text-2xl font-semibold tracking-tight sm:text-2xl xl:text-2xl"
								>
									api url 등록
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								위와 같이 <strong>action</strong>을 등록할 때 <strong>api url</strong>이 필요하다면,{' '}
								<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
									/src/domains/업무도메인/api/url.ts
								</code>{' '}
								파일에 api url을 등록합니다.
							</p>
						</div>
						<div className="w-full flex-1 py-4">
							<Card>
								<CardContent className="grid gap-6">
									<Label htmlFor="message-2">
										업무 도메인의 <strong>api 폴더</strong>에 url 등록 예제 코드
									</Label>
									<UICodeBlock
										language="ts"
										filename="/src/domains/example/api/url.ts"
									>
										{`export type TUrl = (typeof url)[keyof typeof url];

const url = {
	TEST: '/api/v1/search',
	// 필요한 api url을 이곳에 계속 등록할 수 있습니다.
} as const;

export default url;
`}
									</UICodeBlock>
								</CardContent>
							</Card>
						</div>
						{/* example 블럭요서 END */}
					</div>
				</div>
			</div>
		</>
	);
};

HookUseReduxAPIEx.displayName = 'HookUseReduxAPIEx';
export default HookUseReduxAPIEx;
