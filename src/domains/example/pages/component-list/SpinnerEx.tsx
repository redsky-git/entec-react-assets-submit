import type { IComponent } from '@/app/types/common';
import type { JSX } from 'react';
import { useEffect } from 'react';

import { Button, Spinner } from '@/app/components/ui';
import { Card, CardContent } from '@/app/components/shadcn/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/shadcn/ui/tabs';
import { Separator } from '@/app/components/shadcn/ui/separator';

import UICodeBlock from '@/shared/components/common/ui/UICodeBlock';

interface ISpinnerExProps {
	test?: string;
}

const SpinnerEx: IComponent<ISpinnerExProps> = (): JSX.Element => {
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
							<h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">Spinner</h1>
							<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
								&nbsp;
							</div>
						</div>
						<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
							<strong>Spinner</strong> 컴포넌트는 로딩 상태를 시각적으로 표시하는 데 사용됩니다. 일반적으로 데이터
							처리나 페이지 로딩 중임을 사용자에게 알리기 위해 활용됩니다.
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
									Basic Spinner
								</h2>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>Button</strong> 컴포넌트는 6가지 형태의 variant 설정값이 있습니다. :{' '}
								<span>"default", "outline", "ghost", "destructive", "secondary", "link"</span>
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
											<Spinner />
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

function SamplePage() {
	return (
		<div>
			<Button
				variant="default"
				className="mr-2"
			>
				버튼
			</Button>
			<Button
				variant="outline"
				className="mr-2"
			>
				버튼
			</Button>
			<Button
				variant="ghost"
				className="mr-2"
			>
				버튼
			</Button>
			<Button
				variant="destructive"
				className="mr-2"
			>
				버튼
			</Button>
			<Button
				variant="secondary"
				className="mr-2"
			>
				버튼
			</Button>
			<Button
				variant="link"
				className="mr-2"
			>
				버튼
			</Button>
		</div>
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
									텍스트 버튼
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>텍스트 버튼</strong>은 일반적으로 내용중에 강조하거나, 버튼을 텍스트 형태로 표현하고자 할 때
								사용됩니다.
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
											<Button
												variant="ghost"
												className="mr-2"
											>
												버튼
											</Button>
											<Button
												variant="link"
												className="mr-2"
											>
												버튼
											</Button>
											<Button
												variant="link"
												className="mr-2"
												disabled
											>
												버튼
											</Button>
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
						
						function SamplePage() {
							return (
								<div>
									<Button
										variant="ghost"
										className="mr-2"
									>
										버튼
									</Button>
									<Button
										variant="link"
										className="mr-2"
									>
										버튼
									</Button>
									<Button
										variant="link"
										className="mr-2"
										disabled
									>
										버튼
									</Button>
								</div>
							);
						}`}
											</UICodeBlock>
										</CardContent>
									</Card>
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

SpinnerEx.displayName = 'SpinnerEx';
export default SpinnerEx;
