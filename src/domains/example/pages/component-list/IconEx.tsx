import type { IComponent } from '@/app/types/common';
import type { JSX } from 'react';
import { useEffect } from 'react';

import { Card, CardContent } from '@/app/components/shadcn/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/shadcn/ui/tabs';
import { Separator } from '@/app/components/shadcn/ui/separator';

import UICodeBlock from '@/shared/components/common/ui/UICodeBlock';
import { Button, Icon } from '@/app/components/ui';

interface IIconExProps {
	test?: string;
}

const IconEx: IComponent<IIconExProps> = (): JSX.Element => {
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
							<h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">Icon</h1>
							<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
								&nbsp;
							</div>
						</div>
						<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
							<strong>Icon</strong> 컴포넌트는 정해진 이름의 SVG 형태의 아이콘들을 제공하며 화면에 시각적인 요소를
							표시합니다.
						</p>
						<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
							<strong>entec-react-assets</strong>프로젝트에서 <strong>Icon</strong>컴포넌트는{' '}
							<Button
								variant="link"
								className="p-0 text-base underline"
								onClick={() => (location.href = 'https://lucide.dev/')}
							>
								Lucide 아이콘
							</Button>
							을 사용합니다. 따라서 아이콘 <strong>name</strong> 속성으로{' '}
							<Button
								variant="link"
								className="p-0 text-base underline"
								onClick={() => (location.href = 'https://lucide.dev/')}
							>
								Lucide 아이콘
							</Button>{' '}
							에서 제공하는 아이콘 이름을 사용할 수 있습니다.
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
									Basic Icon
								</h2>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>Icon</strong> 컴포넌트는 내부적으로{' '}
								<strong>
									<Button
										variant="link"
										className="p-0 text-base underline"
										onClick={() => (location.href = 'https://lucide.dev/')}
									>
										Lucide 아이콘
									</Button>
								</strong>{' '}
								라이브러리를 사용합니다. 따라서 아이콘 <strong>name</strong> 속성으로{' '}
								<Button
									variant="link"
									className="p-0 text-base underline"
									onClick={() => (location.href = 'https://lucide.dev/')}
								>
									Lucide 아이콘
								</Button>{' '}
								에서 제공하는 아이콘 이름을 사용합니다.
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
											<Icon name="House" />
											<Icon name="CirclePower" />
											<Icon name="Save" />
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
												{`import { Icon } from '@/app/components/ui';

function SamplePage() {
	return (
		<div>
			<Icon name="House" />
			<Icon name="CirclePower" />
			<Icon name="Save" />
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
								기본적으로 모든 아이콘의 크기는 <strong>24px</strong>입니다.
							</p>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								사이즈는 <strong>size</strong>속성과 <strong>CSS</strong>를 사용하여 조정할 수 있습니다.
							</p>
						</div>
						{/* example 블럭요소 START */}
						<div className="w-full flex-1 py-4">
							<Tabs defaultValue="preview">
								<TabsList>
									<TabsTrigger value="preview">Preview</TabsTrigger>
									<TabsTrigger value="code">Code</TabsTrigger>
								</TabsList>
								<TabsContent value="preview">
									<Card>
										<CardContent className="pt-25 pb-25 flex items-center justify-center">
											<Icon
												name="House"
												size={15}
											/>
											<Icon name="House" />
											<Icon
												name="House"
												size={30}
											/>
											<Icon
												name="House"
												size={35}
											/>
											<Icon
												name="House"
												size={40}
											/>
											<Icon
												name="House"
												size={45}
											/>
											<Icon
												name="Save"
												style={{ width: '15px', height: '15px' }}
											/>
											<Icon name="Save" />
											<Icon
												name="Save"
												style={{ width: '30px', height: '30px' }}
											/>
											<Icon
												name="Save"
												style={{ width: '35px', height: '35px' }}
											/>
											<Icon
												name="Save"
												style={{ width: '40px', height: '40px' }}
											/>
											<Icon
												name="Save"
												style={{ width: '45px', height: '45px' }}
											/>
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
												{`import { Icon } from '@/app/components/ui';

function SamplePage() {
	return (
		<>
			<Icon
				name="House"
				size={15}
			/>
			<Icon name="House" />
			<Icon
				name="House"
				size={30}
			/>
			<Icon
				name="House"
				size={35}
			/>
			<Icon
				name="House"
				size={40}
			/>
			<Icon
				name="House"
				size={45}
			/>
			<Icon
				name="Save"
				style={{ width: '15px', height: '15px' }}
			/>
			<Icon name="Save" />
			<Icon
				name="Save"
				style={{ width: '30px', height: '30px' }}
			/>
			<Icon
				name="Save"
				style={{ width: '35px', height: '35px' }}
			/>
			<Icon
				name="Save"
				style={{ width: '40px', height: '40px' }}
			/>
			<Icon
				name="Save"
				style={{ width: '45px', height: '45px' }}
			/>
		</>
	);
}`}
											</UICodeBlock>
										</CardContent>
									</Card>
								</TabsContent>
							</Tabs>
						</div>
						{/* example 블럭요소 END */}
					</div>
				</div>
			</div>
		</>
	);
};

IconEx.displayName = 'IconEx';
export default IconEx;
