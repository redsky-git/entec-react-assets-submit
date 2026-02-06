import type { IComponent } from '@/app/types/common';
import type { JSX } from 'react';
import { useEffect } from 'react';

//import { Alert, AlertDescription, AlertTitle } from '@/app/components/shadcn/ui/alert';
import { Button, Icon } from '@/app/components/ui';
import { Card, CardContent } from '@/app/components/shadcn/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/shadcn/ui/tabs';
import { Save, Trash2, Download, CircleFadingArrowUpIcon } from 'lucide-react';
import { Separator } from '@/app/components/shadcn/ui/separator';

import UICodeBlock from '@/shared/components/common/ui/UICodeBlock';

interface IButtonExProps {
	test?: string;
}

const ButtonEx: IComponent<IButtonExProps> = (): JSX.Element => {
	// 버튼 클릭 이벤트 처리 함수
	const handlerClickButton = () => {
		alert('clicked!');
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
							<h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">Button</h1>
							<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
								&nbsp;
							</div>
						</div>
						<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
							버튼이나 버튼 형태의 컴포넌트를 표시합니다.
						</p>
					</div>
					<div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
						{/*<Alert>
							<Icon name="AlertCircleIcon" />
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
									Basic button
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
						{/* example 블럭요서 START */}
						<div className="flex flex-col gap-2 pt-6">
							<div className="flex items-start justify-between">
								<h3
									data-shorcut="true"
									className="scroll-m-20 text-2xl font-semibold tracking-tight sm:text-2xl xl:text-2xl"
								>
									Outline 버튼
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>Outline 버튼</strong>은 배경색이 채워진 일반적인 버튼보다 강조도가 낮은 타입의 버튼일 때 사용할
								수 있습니다.
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
												variant="outline"
												className="mr-2"
											>
												버튼
											</Button>
											<Button
												variant="outline"
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
				variant="outline"
				className="mr-2"
			>
				버튼
			</Button>
			<Button
				variant="outline"
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
						{/* example 블럭요서 START */}
						<div className="flex flex-col gap-2 pt-6">
							<div className="flex items-start justify-between">
								<h3
									data-shorcut="true"
									className="scroll-m-20 text-2xl font-semibold tracking-tight sm:text-2xl xl:text-2xl"
								>
									이벤트 처리
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>모든 버튼 컴포넌트</strong>는{' '}
								<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
									onClick
								</code>{' '}
								이벤트 함수를 통해서 이벤트를 처리할 수 있습니다.
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
											<Button onClick={handlerClickButton}>버튼 클릭!</Button>
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

	// 버튼 클릭 이벤트 처리 함수
	const handlerClickButton = () => {
		alert('clicked!');
	};

	return (
		<div>
			<Button onClick={handlerClickButton}>
				버튼 클릭!
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
									색상 처리
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								Button 컴포넌트의 <strong>variant</strong> 속성으로 기본적인 (default, destructive, outline, secondary,
								ghost, link) 속성값 외에도 7가지 색상관련 <strong>variant</strong>속성을 제공합니다.
							</p>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								색상관련 7가지 <strong>variant</strong> 속성값 :{' '}
								<strong>
									<code>"success", "warning", "info", "purple", "pink", "indigo", "teal"</code>
								</strong>
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
												variant="success"
												className="mr-2"
											>
												버튼
											</Button>
											<Button
												variant="warning"
												className="mr-2"
											>
												버튼
											</Button>
											<Button
												variant="info"
												className="mr-2"
											>
												버튼
											</Button>
											<Button
												variant="purple"
												className="mr-2"
											>
												버튼
											</Button>
											<Button
												variant="pink"
												className="mr-2"
											>
												버튼
											</Button>
											<Button
												variant="indigo"
												className="mr-2"
											>
												버튼
											</Button>
											<Button
												variant="teal"
												className="mr-2"
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
			<Button variant="success">버튼</Button>
			<Button variant="warning">버튼</Button>
			<Button variant="info">버튼</Button>
			<Button variant="purple">버튼</Button>
			<Button variant="pink">버튼</Button>
			<Button variant="indigo">버튼</Button>
			<Button variant="teal">버튼</Button>
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
									사이즈
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								사이즈관련 9가지 <strong>size</strong> 속성값 :{' '}
								<strong>
									<code>"xs", "sm", "default", "lg", "xl", "2xl", "icon-sm", "icon", "icon-lg"</code>
								</strong>
							</p>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>
									<code>"icon-*"</code>
								</strong>{' '}
								속성값은 아이콘 전용 버튼일 때 사용합니다.
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
												size="xs"
												className="mr-2"
											>
												버튼
											</Button>
											<Button
												size="sm"
												className="mr-2"
											>
												버튼
											</Button>
											<Button
												size="default"
												className="mr-2"
											>
												버튼
											</Button>
											<Button
												size="lg"
												className="mr-2"
											>
												버튼
											</Button>
											<Button
												size="xl"
												className="mr-2"
											>
												버튼
											</Button>
											<Button
												size="2xl"
												className="mr-2"
											>
												버튼
											</Button>

											<Button
												size="icon-sm"
												className="mr-2"
											>
												<Icon name="Search" />
											</Button>
											<Button
												size="icon"
												className="mr-2"
											>
												<Icon name="Search" />
											</Button>
											<Button
												size="icon-lg"
												className="mr-2"
											>
												<Icon name="Search" />
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
import { Search } from 'lucide-react';

function SamplePage() {
	return (
		<div>
			<Button size="xs">버튼</Button>
			<Button size="sm">버튼</Button>
			<Button size="default">버튼</Button>
			<Button size="lg">버튼</Button>
			<Button size="xl">버튼</Button>
			<Button size="2xl">버튼</Button>
			<Button size="icon-sm">
				<Search />
			</Button>
			<Button size="icon">
				<Search />
			</Button>
			<Button size="icon-lg">
				<Search />
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
									아이콘과 레이블이 있는 버튼
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>아이콘과 레이블이 있는 버튼</strong>은 버튼의 시작이나 끝에 아이콘을 추가하여 시각적 강조를 더할
								수 있습니다.
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
											<Button className="mr-2">
												<Save />
												버튼
											</Button>
											<Button
												variant="outline"
												className="mr-2"
											>
												<Trash2 />
												버튼
											</Button>
											<Button
												variant="destructive"
												className="mr-2"
											>
												버튼
												<Download />
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
import { Save, Trash2, Download } from 'lucide-react';

function SamplePage() {
	return (
		<div>
			<Button>
				<Save />
				버튼
			</Button>
			<Button variant="outline">
				<Trash2 />
				버튼
			</Button>
			<Button variant="destructive>
				버튼
				<Download />
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
									아이콘 버튼
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>Button</strong> 컴포넌트는 아이콘 전용 버튼으로도 사용할 수 있습니다.
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
											<Button className="mr-2">
												<CircleFadingArrowUpIcon />
											</Button>
											<Button
												variant="outline"
												className="mr-2"
											>
												<CircleFadingArrowUpIcon />
											</Button>
											<Button
												variant="destructive"
												className="mr-2"
											>
												<CircleFadingArrowUpIcon />
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
import { CircleFadingArrowUpIcon } from 'lucide-react';

function SamplePage() {
	return (
		<div>
			<Button>
				<CircleFadingArrowUpIcon />
			</Button>
			<Button variant="outline">
				<CircleFadingArrowUpIcon />
			</Button>
			<Button variant="destructive">
				<CircleFadingArrowUpIcon />
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
									둥근 모서리 처리
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>Button</strong> 컴포넌트에 <strong>rounded-full</strong> 클래스를 추가하여 둥근 모서리 형태의
								버튼을 만들 수 있습니다.
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
											<Button className="rounded-full">버튼</Button>
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
			<Button className="rounded-full">버튼</Button>
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

ButtonEx.displayName = 'ButtonEx';
export default ButtonEx;
