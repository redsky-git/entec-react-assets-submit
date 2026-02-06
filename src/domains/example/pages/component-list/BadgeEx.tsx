import type { IComponent } from '@/app/types/common';
import type { JSX } from 'react';
import { useEffect } from 'react';

import { Card, CardContent } from '@/app/components/shadcn/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/shadcn/ui/tabs';
import { Separator } from '@/app/components/shadcn/ui/separator';

import UICodeBlock from '@/shared/components/common/ui/UICodeBlock';

import { Badge, Icon } from '@/app/components/ui';

interface IBadgeExProps {
	test?: string;
}

const BadgeEx: IComponent<IBadgeExProps> = (): JSX.Element => {
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
							<h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">Badge</h1>
							<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
								&nbsp;
							</div>
						</div>
						<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
							<strong>Badge</strong> 컴포넌트는 다양한 스타일과 아이콘을 적용할 수 있는 상태 표시용 태그입니다.
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
									Basic Badge
								</h2>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							{/*<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>Alert</strong> 컴포넌트는 모두 3가지 컴포넌트를 제공합니다.{' '}
								<strong>Alert, AlertDescription, AlertTitle</strong>
							</p>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								이렇게 제공하는 3가지 컴포넌트를 조합하여 화면에 다양한 Alert UI를 구현할 수 있습니다.
							</p>*/}
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
											<div className="grid gap-4">
												<Badge>Badge</Badge>
												<Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">8</Badge>
												<Badge
													className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
													variant="destructive"
												>
													99
												</Badge>
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
												{`import { Badge } from '@/app/components/ui';

function SamplePage() {
	return (
		<div>
			<Badge>Badge</Badge>
			<Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">8</Badge>
			<Badge
				className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
				variant="destructive"
			>
				99
			</Badge>
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
									<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[1.8rem] break-words outline-none">
										variant
									</code>{' '}
									속성
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								4가지 <strong>variant ('default', 'secondary', 'destructive', 'outline')</strong> 속성을 설정할 수
								있습니다.
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
											<div className="grid gap-4">
												<Badge variant="default">Badge</Badge>
												<Badge variant="secondary">Badge</Badge>
												<Badge variant="destructive">Badge</Badge>
												<Badge variant="outline">Badge</Badge>
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
												{`import { Badge } from '@/app/components/ui';

function SamplePage() {
	return (
		<div className="grid gap-4">
			<Badge variant="default">Badge</Badge>
			<Badge variant="secondary">Badge</Badge>
			<Badge variant="destructive">Badge</Badge>
			<Badge variant="outline">Badge</Badge>
		</div>
	);
}`}
											</UICodeBlock>
										</CardContent>
									</Card>
								</TabsContent>
							</Tabs>
						</div>
						{/* example 블럭요소 END */}
						{/* example 블럭요서 START */}
						<div className="flex flex-col gap-2 pt-6">
							<div className="flex items-start justify-between">
								<h3
									data-shorcut="true"
									className="scroll-m-20 text-2xl font-semibold tracking-tight sm:text-2xl xl:text-2xl"
								>
									아이콘과 함께 사용
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>Badge</strong> 컴포넌트에 아이콘과 함께 적용하기.
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
										<CardContent className="pt-5 pb-5 flex items-center justify-center">
											<div className="grid gap-4">
												<Badge>
													<Icon name="House" />
													Badge
												</Badge>
												<Badge>
													Badge
													<Icon name="SendHorizonal" />
												</Badge>
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
												{`import { Badge, Icon } from '@/app/components/ui';

function SamplePage() {
	return (
		<div className="grid gap-4">
			<Badge>
				<Icon name="House" />
				Badge
			</Badge>
			<Badge>
				Badge
				<Icon name="SendHorizonal" />
			</Badge>
		</div>
	);
}`}
											</UICodeBlock>
										</CardContent>
									</Card>
								</TabsContent>
							</Tabs>
						</div>
						{/* example 블럭요소 END */}
						{/* example 블럭요서 START */}
						<div className="flex flex-col gap-2 pt-6">
							<div className="flex items-start justify-between">
								<h3
									data-shorcut="true"
									className="scroll-m-20 text-2xl font-semibold tracking-tight sm:text-2xl xl:text-2xl"
								>
									<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[1.8rem] break-words outline-none">
										asChild
									</code>{' '}
									속성
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>Badge</strong> 컴포넌트는 기본적으로{' '}
								<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
									&lt;div&gt;
								</code>{' '}
								또는{' '}
								<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
									&lt;span&gt;
								</code>{' '}
								태그로 최종 랜더링됩니다.
							</p>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								하지만
								<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
									asChild=&#123;true&#125;
								</code>
								속성을 사용하면 <strong>Badge</strong> 컴포넌트에 셋팅된 props, 스타일 등의 값이 모두{' '}
								<strong>자식 요소(element)에 병합</strong>됩니다. 그래서 Badge의 기본 요소(element)인{' '}
								<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
									&lt;div&gt;
								</code>
								나{' '}
								<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
									&lt;span&gt;
								</code>
								이 아닌 <strong>자식 요소(element)</strong>로 최종 랜더링됩니다.
							</p>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								&#8251; 아래 코드에서 <strong>asChild</strong>를 사용했을 때와 사용하지 않았을 때의 차이
							</p>
							<ul>
								<li>
									<strong>&middot; asChild 속성사용하지 않았을 때 :</strong> 부모요소{' '}
									<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
										&lt;span&gt;
									</code>{' '}
									<Icon
										name="MoveRight"
										style={{ display: 'inline-block' }}
									/>{' '}
									자식요소{' '}
									<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
										&lt;button&gt;
									</code>
								</li>
								<li>
									<strong>&middot; asChild 속성사용 :</strong> 부모요소 자체가{' '}
									<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
										&lt;button&gt;
									</code>
								</li>
							</ul>
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
										<CardContent className="pt-5 pb-5 flex items-center justify-center">
											<div className="grid gap-4">
												<p>Badge를 버튼으로 만들기</p>
												<Badge asChild>
													<button onClick={() => $ui.alert('Badge형태의 버튼!')}>버튼</button>
												</Badge>
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
												{`import { Badge } from '@/app/components/ui';

function SamplePage() {
	return (
		<div className="grid gap-4">
			<p>Badge를 버튼으로 만들기</p>
			<Badge asChild>
				<button onClick={() => $ui.alert('Badge형태의 버튼!')}>버튼</button>
			</Badge>
		</div>
	);
}`}
											</UICodeBlock>
										</CardContent>
									</Card>
								</TabsContent>
							</Tabs>
						</div>
						{/* example 블럭요소 END */}

						{/* 실전 예제 START */}
						<Separator className="my-8" />
						<div className="flex flex-col gap-2 pt-6">
							<div className="flex items-start justify-between">
								<h2
									data-shorcut="true"
									className="scroll-m-20 text-3xl font-semibold tracking-tight sm:text-3xl xl:text-3xl"
								>
									실전 예제
								</h2>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base pb-4">
								<strong>Badge</strong> 컴포넌트를 활용한 UI 예제들입니다. 거래 상태, 계좌 유형, 카드 상태 등 다양한
								정보를 시각적으로 표현할 수 있습니다.
							</p>
						</div>

						{/* 예제 1: 거래 상태 */}
						<div className="flex flex-col gap-2 pt-6">
							<div className="flex items-start justify-between">
								<h3
									data-shorcut="true"
									className="scroll-m-20 text-2xl font-semibold tracking-tight sm:text-2xl xl:text-2xl"
								>
									1. 거래 상태 표시
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								송금, 이체, 결제 등 금융 거래의 현재 상태를 한눈에 파악할 수 있도록 표시합니다.
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
										<CardContent className="pt-5 pb-5">
											<div className="grid gap-6">
												<div>
													<h4 className="text-sm font-semibold mb-3">거래 내역</h4>
													<div className="space-y-3">
														<div className="flex items-center justify-between p-3 border rounded-lg">
															<div className="flex-1">
																<p className="font-medium">홍길동님에게 송금</p>
																<p className="text-sm text-muted-foreground">100,000원</p>
															</div>
															<Badge className="bg-green-500 hover:bg-green-600">
																<Icon name="CheckCircle2" />
																완료
															</Badge>
														</div>
														<div className="flex items-center justify-between p-3 border rounded-lg">
															<div className="flex-1">
																<p className="font-medium">전기요금 자동이체</p>
																<p className="text-sm text-muted-foreground">45,300원</p>
															</div>
															<Badge className="bg-blue-500 hover:bg-blue-600">
																<Icon name="Clock" />
																대기중
															</Badge>
														</div>
														<div className="flex items-center justify-between p-3 border rounded-lg">
															<div className="flex-1">
																<p className="font-medium">온라인 쇼핑 결제</p>
																<p className="text-sm text-muted-foreground">250,000원</p>
															</div>
															<Badge
																variant="destructive"
																className="bg-red-500 hover:bg-red-600"
															>
																<Icon name="XCircle" />
																실패
															</Badge>
														</div>
														<div className="flex items-center justify-between p-3 border rounded-lg">
															<div className="flex-1">
																<p className="font-medium">해외 송금</p>
																<p className="text-sm text-muted-foreground">$500</p>
															</div>
															<Badge
																variant="secondary"
																className="bg-gray-400 hover:bg-gray-500 text-white"
															>
																<Icon name="Ban" />
																취소
															</Badge>
														</div>
														<div className="flex items-center justify-between p-3 border rounded-lg">
															<div className="flex-1">
																<p className="font-medium">카드 결제 승인</p>
																<p className="text-sm text-muted-foreground">85,000원</p>
															</div>
															<Badge className="bg-amber-500 hover:bg-amber-600">
																<Icon name="AlertCircle" />
																확인필요
															</Badge>
														</div>
													</div>
												</div>

												<div>
													<h4 className="text-sm font-semibold mb-3">상태별 색상 가이드</h4>
													<div className="flex flex-wrap gap-3">
														<Badge className="bg-green-500 hover:bg-green-600">완료</Badge>
														<Badge className="bg-blue-500 hover:bg-blue-600">대기중</Badge>
														<Badge className="bg-red-500 hover:bg-red-600">실패</Badge>
														<Badge className="bg-gray-400 hover:bg-gray-500 text-white">취소</Badge>
														<Badge className="bg-amber-500 hover:bg-amber-600">확인필요</Badge>
														<Badge className="bg-purple-500 hover:bg-purple-600">처리중</Badge>
													</div>
												</div>
											</div>
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value="code">
									<Card className="overflow-hidden">
										<CardContent className="grid gap-6">
											<UICodeBlock
												language="tsx"
												filename="TransactionStatus.tsx"
											>
												{`import { Badge, Icon } from '@/app/components/ui';

function TransactionStatus() {
	return (
		<div className="space-y-3">
			{/* 완료 */}
			<div className="flex items-center justify-between p-3 border rounded-lg">
				<div className="flex-1">
					<p className="font-medium">홍길동님에게 송금</p>
					<p className="text-sm text-muted-foreground">100,000원</p>
				</div>
				<Badge className="bg-green-500 hover:bg-green-600">
					<Icon name="CheckCircle2" />
					완료
				</Badge>
			</div>

			{/* 대기중 */}
			<div className="flex items-center justify-between p-3 border rounded-lg">
				<div className="flex-1">
					<p className="font-medium">전기요금 자동이체</p>
					<p className="text-sm text-muted-foreground">45,300원</p>
				</div>
				<Badge className="bg-blue-500 hover:bg-blue-600">
					<Icon name="Clock" />
					대기중
				</Badge>
			</div>

			{/* 실패 */}
			<div className="flex items-center justify-between p-3 border rounded-lg">
				<div className="flex-1">
					<p className="font-medium">온라인 쇼핑 결제</p>
					<p className="text-sm text-muted-foreground">250,000원</p>
				</div>
				<Badge variant="destructive" className="bg-red-500 hover:bg-red-600">
					<Icon name="XCircle" />
					실패
				</Badge>
			</div>

			{/* 취소 */}
			<div className="flex items-center justify-between p-3 border rounded-lg">
				<div className="flex-1">
					<p className="font-medium">해외 송금</p>
					<p className="text-sm text-muted-foreground">$500</p>
				</div>
				<Badge variant="secondary" className="bg-gray-400 text-white">
					<Icon name="Ban" />
					취소
				</Badge>
			</div>
		</div>
	);
}`}
											</UICodeBlock>
										</CardContent>
									</Card>
								</TabsContent>
							</Tabs>
						</div>

						{/* 예제 2: 계좌 유형 */}
						<div className="flex flex-col gap-2 pt-6">
							<div className="flex items-start justify-between">
								<h3
									data-shorcut="true"
									className="scroll-m-20 text-2xl font-semibold tracking-tight sm:text-2xl xl:text-2xl"
								>
									2. 계좌 유형 분류
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								입출금통장, 예금, 적금, 대출 등 다양한 계좌 유형을 시각적으로 구분합니다.
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
										<CardContent className="pt-5 pb-5">
											<div className="grid gap-6">
												<div>
													<h4 className="text-sm font-semibold mb-3">내 계좌 목록</h4>
													<div className="space-y-3">
														<div className="p-4 border rounded-lg">
															<div className="flex items-center justify-between mb-2">
																<Badge
																	variant="outline"
																	className="border-blue-500 text-blue-700 dark:text-blue-400"
																>
																	<Icon name="Wallet" />
																	입출금
																</Badge>
																<span className="text-xs text-muted-foreground">신한은행</span>
															</div>
															<p className="font-semibold">110-123-456789</p>
															<p className="text-2xl font-bold mt-2">1,245,000원</p>
														</div>

														<div className="p-4 border rounded-lg">
															<div className="flex items-center justify-between mb-2">
																<Badge
																	variant="outline"
																	className="border-green-500 text-green-700 dark:text-green-400"
																>
																	<Icon name="PiggyBank" />
																	예금
																</Badge>
																<span className="text-xs text-muted-foreground">국민은행</span>
															</div>
															<p className="font-semibold">S-정기예금 (연 3.5%)</p>
															<p className="text-2xl font-bold mt-2">10,000,000원</p>
															<p className="text-xs text-muted-foreground mt-1">만기일: 2025.12.31</p>
														</div>

														<div className="p-4 border rounded-lg">
															<div className="flex items-center justify-between mb-2">
																<Badge
																	variant="outline"
																	className="border-emerald-500 text-emerald-700 dark:text-emerald-400"
																>
																	<Icon name="TrendingUp" />
																	적금
																</Badge>
																<span className="text-xs text-muted-foreground">우리은행</span>
															</div>
															<p className="font-semibold">자유적금 (월 50만원)</p>
															<p className="text-2xl font-bold mt-2">8,500,000원</p>
															<p className="text-xs text-muted-foreground mt-1">다음 납입일: 2025.11.30</p>
														</div>

														<div className="p-4 border rounded-lg">
															<div className="flex items-center justify-between mb-2">
																<Badge
																	variant="outline"
																	className="border-red-500 text-red-700 dark:text-red-400"
																>
																	<Icon name="CreditCard" />
																	대출
																</Badge>
																<span className="text-xs text-muted-foreground">하나은행</span>
															</div>
															<p className="font-semibold">신용대출 (연 4.2%)</p>
															<p className="text-2xl font-bold mt-2 text-red-600 dark:text-red-400">-5,000,000원</p>
															<p className="text-xs text-muted-foreground mt-1">다음 상환일: 2025.12.05</p>
														</div>

														<div className="p-4 border rounded-lg">
															<div className="flex items-center justify-between mb-2">
																<Badge
																	variant="outline"
																	className="border-purple-500 text-purple-700 dark:text-purple-400"
																>
																	<Icon name="LineChart" />
																	투자
																</Badge>
																<span className="text-xs text-muted-foreground">미래에셋</span>
															</div>
															<p className="font-semibold">글로벌 AI 테크 펀드</p>
															<p className="text-2xl font-bold mt-2">3,500,000원</p>
															<p className="text-xs text-green-600 dark:text-green-400 mt-1">+190,000원 (+5.8%)</p>
														</div>
													</div>
												</div>

												<div>
													<h4 className="text-sm font-semibold mb-3">계좌 유형별 배지</h4>
													<div className="flex flex-wrap gap-3">
														<Badge
															variant="outline"
															className="border-blue-500 text-blue-700 dark:text-blue-400"
														>
															<Icon name="Wallet" />
															입출금
														</Badge>
														<Badge
															variant="outline"
															className="border-green-500 text-green-700 dark:text-green-400"
														>
															<Icon name="PiggyBank" />
															예금
														</Badge>
														<Badge
															variant="outline"
															className="border-emerald-500 text-emerald-700 dark:text-emerald-400"
														>
															<Icon name="TrendingUp" />
															적금
														</Badge>
														<Badge
															variant="outline"
															className="border-red-500 text-red-700 dark:text-red-400"
														>
															<Icon name="CreditCard" />
															대출
														</Badge>
														<Badge
															variant="outline"
															className="border-purple-500 text-purple-700 dark:text-purple-400"
														>
															<Icon name="LineChart" />
															투자
														</Badge>
													</div>
												</div>
											</div>
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value="code">
									<Card className="overflow-hidden">
										<CardContent className="grid gap-6">
											<UICodeBlock
												language="tsx"
												filename="AccountTypes.tsx"
											>
												{`import { Badge, Icon } from '@/app/components/ui';

function AccountTypes() {
	return (
		<div className="space-y-3">
			{/* 입출금 통장 */}
			<div className="p-4 border rounded-lg">
				<div className="flex items-center justify-between mb-2">
					<Badge 
						variant="outline" 
						className="border-blue-500 text-blue-700"
					>
						<Icon name="Wallet" />
						입출금
					</Badge>
					<span className="text-xs text-muted-foreground">신한은행</span>
				</div>
				<p className="font-semibold">110-123-456789</p>
				<p className="text-2xl font-bold mt-2">1,245,000원</p>
			</div>

			{/* 예금 */}
			<div className="p-4 border rounded-lg">
				<div className="flex items-center justify-between mb-2">
					<Badge 
						variant="outline" 
						className="border-green-500 text-green-700"
					>
						<Icon name="PiggyBank" />
						예금
					</Badge>
					<span className="text-xs text-muted-foreground">국민은행</span>
				</div>
				<p className="font-semibold">S-정기예금 (연 3.5%)</p>
				<p className="text-2xl font-bold mt-2">10,000,000원</p>
				<p className="text-xs text-muted-foreground mt-1">
					만기일: 2025.12.31
				</p>
			</div>

			{/* 적금 */}
			<div className="p-4 border rounded-lg">
				<div className="flex items-center justify-between mb-2">
					<Badge 
						variant="outline" 
						className="border-emerald-500 text-emerald-700"
					>
						<Icon name="TrendingUp" />
						적금
					</Badge>
					<span className="text-xs text-muted-foreground">우리은행</span>
				</div>
				<p className="font-semibold">자유적금 (월 50만원)</p>
				<p className="text-2xl font-bold mt-2">8,500,000원</p>
			</div>

			{/* 대출 */}
			<div className="p-4 border rounded-lg">
				<div className="flex items-center justify-between mb-2">
					<Badge 
						variant="outline" 
						className="border-red-500 text-red-700"
					>
						<Icon name="CreditCard" />
						대출
					</Badge>
					<span className="text-xs text-muted-foreground">하나은행</span>
				</div>
				<p className="font-semibold">신용대출 (연 4.2%)</p>
				<p className="text-2xl font-bold mt-2 text-red-600">
					-5,000,000원
				</p>
			</div>
		</div>
	);
}`}
											</UICodeBlock>
										</CardContent>
									</Card>
								</TabsContent>
							</Tabs>
						</div>

						{/* 예제 3: 카드 상태 및 알림 */}
						<div className="flex flex-col gap-2 pt-6">
							<div className="flex items-start justify-between">
								<h3
									data-shorcut="true"
									className="scroll-m-20 text-2xl font-semibold tracking-tight sm:text-2xl xl:text-2xl"
								>
									3. 카드 상태 및 알림 카운트
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								카드 사용 가능 여부와 함께 알림, 메시지 등의 개수를 뱃지로 표시합니다.
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
										<CardContent className="pt-5 pb-5">
											<div className="grid gap-6">
												<div>
													<h4 className="text-sm font-semibold mb-3">내 카드 목록</h4>
													<div className="grid md:grid-cols-2 gap-4">
														<div className="p-4 border rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
															<div className="flex items-center justify-between mb-3">
																<span className="text-xs font-semibold">신한카드</span>
																<Badge className="bg-green-500 hover:bg-green-600 text-xs">활성</Badge>
															</div>
															<p className="font-bold text-lg mb-1">Deep Dream Check</p>
															<p className="text-sm text-muted-foreground">**** **** **** 1234</p>
															<div className="flex items-center justify-between mt-4">
																<span className="text-xs text-muted-foreground">이번 달 사용</span>
																<span className="font-semibold">1,245,000원</span>
															</div>
														</div>

														<div className="p-4 border rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 opacity-60">
															<div className="flex items-center justify-between mb-3">
																<span className="text-xs font-semibold">국민카드</span>
																<Badge
																	variant="secondary"
																	className="bg-gray-500 hover:bg-gray-600 text-white text-xs"
																>
																	정지
																</Badge>
															</div>
															<p className="font-bold text-lg mb-1">KB국민 노리체크</p>
															<p className="text-sm text-muted-foreground">**** **** **** 5678</p>
															<div className="flex items-center justify-between mt-4">
																<span className="text-xs text-muted-foreground">정지 사유</span>
																<span className="text-sm">본인 요청</span>
															</div>
														</div>

														<div className="p-4 border rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 opacity-60">
															<div className="flex items-center justify-between mb-3">
																<span className="text-xs font-semibold">하나카드</span>
																<Badge
																	variant="destructive"
																	className="bg-red-600 hover:bg-red-700 text-xs"
																>
																	분실
																</Badge>
															</div>
															<p className="font-bold text-lg mb-1">하나 원큐페이</p>
															<p className="text-sm text-muted-foreground">**** **** **** 9012</p>
															<div className="flex items-center justify-between mt-4">
																<span className="text-xs text-muted-foreground">신고일</span>
																<span className="text-sm">2025.11.20</span>
															</div>
														</div>

														<div className="p-4 border rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 opacity-50">
															<div className="flex items-center justify-between mb-3">
																<span className="text-xs font-semibold">우리카드</span>
																<Badge
																	variant="outline"
																	className="border-slate-400 text-slate-600 dark:text-slate-400 text-xs"
																>
																	만료
																</Badge>
															</div>
															<p className="font-bold text-lg mb-1">우리 V체크카드</p>
															<p className="text-sm text-muted-foreground">**** **** **** 3456</p>
															<div className="flex items-center justify-between mt-4">
																<span className="text-xs text-muted-foreground">만료일</span>
																<span className="text-sm">2025.10.31</span>
															</div>
														</div>
													</div>
												</div>

												<div>
													<h4 className="text-sm font-semibold mb-3">알림 및 카운트</h4>
													<div className="space-y-3">
														<div className="flex items-center justify-between p-3 border rounded-lg">
															<div className="flex items-center gap-3">
																<Icon name="Bell" />
																<span className="font-medium">알림</span>
															</div>
															<Badge className="h-6 min-w-6 rounded-full px-2 font-mono tabular-nums bg-red-500 hover:bg-red-600">
																5
															</Badge>
														</div>

														<div className="flex items-center justify-between p-3 border rounded-lg">
															<div className="flex items-center gap-3">
																<Icon name="Mail" />
																<span className="font-medium">메시지</span>
															</div>
															<Badge className="h-6 min-w-6 rounded-full px-2 font-mono tabular-nums bg-blue-500 hover:bg-blue-600">
																12
															</Badge>
														</div>

														<div className="flex items-center justify-between p-3 border rounded-lg">
															<div className="flex items-center gap-3">
																<Icon name="ShoppingCart" />
																<span className="font-medium">장바구니</span>
															</div>
															<Badge className="h-6 min-w-6 rounded-full px-2 font-mono tabular-nums bg-green-500 hover:bg-green-600">
																3
															</Badge>
														</div>

														<div className="flex items-center justify-between p-3 border rounded-lg">
															<div className="flex items-center gap-3">
																<Icon name="Gift" />
																<span className="font-medium">혜택</span>
															</div>
															<Badge className="h-6 min-w-6 rounded-full px-2 font-mono tabular-nums bg-purple-500 hover:bg-purple-600">
																99+
															</Badge>
														</div>
													</div>
												</div>

												<div>
													<h4 className="text-sm font-semibold mb-3">카드 상태별 배지</h4>
													<div className="flex flex-wrap gap-3">
														<Badge className="bg-green-500 hover:bg-green-600">활성</Badge>
														<Badge
															variant="secondary"
															className="bg-gray-500 hover:bg-gray-600 text-white"
														>
															정지
														</Badge>
														<Badge
															variant="destructive"
															className="bg-red-600 hover:bg-red-700"
														>
															분실
														</Badge>
														<Badge
															variant="outline"
															className="border-slate-400 text-slate-600 dark:text-slate-400"
														>
															만료
														</Badge>
														<Badge className="bg-amber-500 hover:bg-amber-600">재발급중</Badge>
													</div>
												</div>
											</div>
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value="code">
									<Card className="overflow-hidden">
										<CardContent className="grid gap-6">
											<UICodeBlock
												language="tsx"
												filename="CardStatusAndNotifications.tsx"
											>
												{`import { Badge, Icon } from '@/app/components/ui';

function CardStatusAndNotifications() {
	return (
		<div className="grid gap-6">
			{/* 카드 목록 */}
			<div className="grid md:grid-cols-2 gap-4">
				{/* 활성 카드 */}
				<div className="p-4 border rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
					<div className="flex items-center justify-between mb-3">
						<span className="text-xs font-semibold">신한카드</span>
						<Badge className="bg-green-500 hover:bg-green-600 text-xs">
							활성
						</Badge>
					</div>
					<p className="font-bold text-lg mb-1">Deep Dream Check</p>
					<p className="text-sm text-muted-foreground">**** **** **** 1234</p>
					<div className="flex items-center justify-between mt-4">
						<span className="text-xs text-muted-foreground">이번 달 사용</span>
						<span className="font-semibold">1,245,000원</span>
					</div>
				</div>

				{/* 정지된 카드 */}
				<div className="p-4 border rounded-lg opacity-60">
					<div className="flex items-center justify-between mb-3">
						<span className="text-xs font-semibold">국민카드</span>
						<Badge variant="secondary" className="bg-gray-500 text-white text-xs">
							정지
						</Badge>
					</div>
					<p className="font-bold text-lg mb-1">KB국민 노리체크</p>
					<p className="text-sm text-muted-foreground">**** **** **** 5678</p>
				</div>
			</div>

			{/* 알림 카운트 */}
			<div className="space-y-3">
				<div className="flex items-center justify-between p-3 border rounded-lg">
					<div className="flex items-center gap-3">
						<Icon name="Bell" />
						<span className="font-medium">알림</span>
					</div>
					<Badge className="h-6 min-w-6 rounded-full px-2 font-mono bg-red-500">
						5
					</Badge>
				</div>

				<div className="flex items-center justify-between p-3 border rounded-lg">
					<div className="flex items-center gap-3">
						<Icon name="Mail" />
						<span className="font-medium">메시지</span>
					</div>
					<Badge className="h-6 min-w-6 rounded-full px-2 font-mono bg-blue-500">
						12
					</Badge>
				</div>
			</div>
		</div>
	);
}`}
											</UICodeBlock>
										</CardContent>
									</Card>
								</TabsContent>
							</Tabs>
						</div>

						{/* 예제 4: 금융상품 태그 */}
						<div className="flex flex-col gap-2 pt-6">
							<div className="flex items-start justify-between">
								<h3
									data-shorcut="true"
									className="scroll-m-20 text-2xl font-semibold tracking-tight sm:text-2xl xl:text-2xl"
								>
									4. 금융상품 특성 태그
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								추천, 신규, 인기, 한정 등 금융상품의 특징과 프로모션 정보를 표시합니다.
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
										<CardContent className="pt-5 pb-5">
											<div className="grid gap-6">
												<div>
													<h4 className="text-sm font-semibold mb-3">추천 금융상품</h4>
													<div className="grid md:grid-cols-2 gap-4">
														<div className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
															<div className="flex items-start justify-between mb-3">
																<div className="flex flex-wrap gap-2">
																	<Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600">
																		<Icon name="Star" />
																		추천
																	</Badge>
																	<Badge className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600">
																		<Icon name="TrendingUp" />
																		인기
																	</Badge>
																</div>
															</div>
															<h5 className="font-bold text-lg mb-2">프리미엄 정기예금</h5>
															<p className="text-3xl font-bold text-blue-600 mb-2">연 4.5%</p>
															<p className="text-sm text-muted-foreground mb-3">최고 우대금리 적용 시</p>
															<div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
																<span>• 가입금액: 100만원 이상</span>
																<span>• 가입기간: 12개월</span>
															</div>
														</div>

														<div className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
															<div className="flex items-start justify-between mb-3">
																<div className="flex flex-wrap gap-2">
																	<Badge className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600">
																		<Icon name="Sparkles" />
																		신규
																	</Badge>
																	<Badge
																		variant="outline"
																		className="border-red-500 text-red-600 dark:text-red-400"
																	>
																		<Icon name="Clock" />
																		한정
																	</Badge>
																</div>
															</div>
															<h5 className="font-bold text-lg mb-2">청년도약 적금</h5>
															<p className="text-3xl font-bold text-green-600 mb-2">연 5.0%</p>
															<p className="text-sm text-muted-foreground mb-3">정부지원금 포함 시</p>
															<div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
																<span>• 만 19~34세</span>
																<span>• 월 70만원 이내</span>
															</div>
														</div>

														<div className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
															<div className="flex items-start justify-between mb-3">
																<div className="flex flex-wrap gap-2">
																	<Badge className="bg-gradient-to-r from-purple-400 to-indigo-500 hover:from-purple-500 hover:to-indigo-600">
																		<Icon name="Gift" />
																		이벤트
																	</Badge>
																</div>
															</div>
															<h5 className="font-bold text-lg mb-2">My Car 자동차 대출</h5>
															<p className="text-3xl font-bold text-purple-600 mb-2">연 3.2%</p>
															<p className="text-sm text-muted-foreground mb-3">첫 거래 고객 특별금리</p>
															<div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
																<span>• 한도: 최대 5천만원</span>
																<span>• 기간: 최장 5년</span>
															</div>
														</div>

														<div className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
															<div className="flex items-start justify-between mb-3">
																<div className="flex flex-wrap gap-2">
																	<Badge className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600">
																		<Icon name="Award" />
																		베스트
																	</Badge>
																	<Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600">
																		<Icon name="Zap" />
																		특별
																	</Badge>
																</div>
															</div>
															<h5 className="font-bold text-lg mb-2">Premium 주택담보대출</h5>
															<p className="text-3xl font-bold text-cyan-600 mb-2">연 2.8%</p>
															<p className="text-sm text-muted-foreground mb-3">신용등급 우수고객 우대</p>
															<div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
																<span>• LTV 최대 70%</span>
																<span>• 최장 30년</span>
															</div>
														</div>
													</div>
												</div>

												<div>
													<h4 className="text-sm font-semibold mb-3">상품 특성별 배지</h4>
													<div className="flex flex-wrap gap-3">
														<Badge className="bg-gradient-to-r from-yellow-400 to-orange-500">
															<Icon name="Star" />
															추천
														</Badge>
														<Badge className="bg-gradient-to-r from-pink-500 to-rose-500">
															<Icon name="TrendingUp" />
															인기
														</Badge>
														<Badge className="bg-gradient-to-r from-green-400 to-emerald-500">
															<Icon name="Sparkles" />
															신규
														</Badge>
														<Badge
															variant="outline"
															className="border-red-500 text-red-600 dark:text-red-400"
														>
															<Icon name="Clock" />
															한정
														</Badge>
														<Badge className="bg-gradient-to-r from-purple-400 to-indigo-500">
															<Icon name="Gift" />
															이벤트
														</Badge>
														<Badge className="bg-gradient-to-r from-cyan-400 to-blue-500">
															<Icon name="Award" />
															베스트
														</Badge>
														<Badge className="bg-gradient-to-r from-amber-400 to-yellow-500">
															<Icon name="Zap" />
															특별
														</Badge>
													</div>
												</div>
											</div>
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value="code">
									<Card className="overflow-hidden">
										<CardContent className="grid gap-6">
											<UICodeBlock
												language="tsx"
												filename="ProductTags.tsx"
											>
												{`import { Badge, Icon } from '@/app/components/ui';

function ProductTags() {
	return (
		<div className="grid md:grid-cols-2 gap-4">
			{/* 추천 + 인기 상품 */}
			<div className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
				<div className="flex items-start justify-between mb-3">
					<div className="flex flex-wrap gap-2">
						<Badge className="bg-gradient-to-r from-yellow-400 to-orange-500">
							<Icon name="Star" />
							추천
						</Badge>
						<Badge className="bg-gradient-to-r from-pink-500 to-rose-500">
							<Icon name="TrendingUp" />
							인기
						</Badge>
					</div>
				</div>
				<h5 className="font-bold text-lg mb-2">프리미엄 정기예금</h5>
				<p className="text-3xl font-bold text-blue-600 mb-2">연 4.5%</p>
				<p className="text-sm text-muted-foreground mb-3">
					최고 우대금리 적용 시
				</p>
				<div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
					<span>• 가입금액: 100만원 이상</span>
					<span>• 가입기간: 12개월</span>
				</div>
			</div>

			{/* 신규 + 한정 상품 */}
			<div className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
				<div className="flex items-start justify-between mb-3">
					<div className="flex flex-wrap gap-2">
						<Badge className="bg-gradient-to-r from-green-400 to-emerald-500">
							<Icon name="Sparkles" />
							신규
						</Badge>
						<Badge variant="outline" className="border-red-500 text-red-600">
							<Icon name="Clock" />
							한정
						</Badge>
					</div>
				</div>
				<h5 className="font-bold text-lg mb-2">청년도약 적금</h5>
				<p className="text-3xl font-bold text-green-600 mb-2">연 5.0%</p>
				<p className="text-sm text-muted-foreground mb-3">
					정부지원금 포함 시
				</p>
			</div>

			{/* 이벤트 상품 */}
			<div className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
				<div className="flex items-start justify-between mb-3">
					<div className="flex flex-wrap gap-2">
						<Badge className="bg-gradient-to-r from-purple-400 to-indigo-500">
							<Icon name="Gift" />
							이벤트
						</Badge>
					</div>
				</div>
				<h5 className="font-bold text-lg mb-2">My Car 자동차 대출</h5>
				<p className="text-3xl font-bold text-purple-600 mb-2">연 3.2%</p>
			</div>
		</div>
	);
}`}
											</UICodeBlock>
										</CardContent>
									</Card>
								</TabsContent>
							</Tabs>
						</div>

						{/* 예제 5: 거래 유형 및 보안 등급 */}
						<div className="flex flex-col gap-2 pt-6">
							<div className="flex items-start justify-between">
								<h3
									data-shorcut="true"
									className="scroll-m-20 text-2xl font-semibold tracking-tight sm:text-2xl xl:text-2xl"
								>
									5. 거래 유형 및 보안 등급
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								입금, 출금, 이체 등 거래 유형과 거래의 보안 수준을 표시합니다.
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
										<CardContent className="pt-5 pb-5">
											<div className="grid gap-6">
												<div>
													<h4 className="text-sm font-semibold mb-3">최근 거래 내역</h4>
													<div className="space-y-3">
														<div className="flex items-center justify-between p-3 border rounded-lg">
															<div className="flex items-center gap-3 flex-1">
																<Badge
																	variant="outline"
																	className="border-blue-500 text-blue-700 dark:text-blue-400"
																>
																	<Icon name="ArrowDownToLine" />
																	입금
																</Badge>
																<div>
																	<p className="font-medium">급여 이체</p>
																	<p className="text-sm text-muted-foreground">(주)엔텍</p>
																</div>
															</div>
															<p className="font-bold text-blue-600">+3,500,000원</p>
														</div>

														<div className="flex items-center justify-between p-3 border rounded-lg">
															<div className="flex items-center gap-3 flex-1">
																<Badge
																	variant="outline"
																	className="border-red-500 text-red-700 dark:text-red-400"
																>
																	<Icon name="ArrowUpFromLine" />
																	출금
																</Badge>
																<div>
																	<p className="font-medium">ATM 현금 인출</p>
																	<p className="text-sm text-muted-foreground">강남역 ATM</p>
																</div>
															</div>
															<p className="font-bold text-red-600">-500,000원</p>
														</div>

														<div className="flex items-center justify-between p-3 border rounded-lg">
															<div className="flex items-center gap-3 flex-1">
																<Badge
																	variant="outline"
																	className="border-purple-500 text-purple-700 dark:text-purple-400"
																>
																	<Icon name="ArrowLeftRight" />
																	이체
																</Badge>
																<div>
																	<p className="font-medium">홍길동님에게 송금</p>
																	<p className="text-sm text-muted-foreground">국민 123-45-678901</p>
																</div>
															</div>
															<p className="font-bold text-purple-600">-100,000원</p>
														</div>

														<div className="flex items-center justify-between p-3 border rounded-lg">
															<div className="flex items-center gap-3 flex-1">
																<Badge
																	variant="outline"
																	className="border-green-500 text-green-700 dark:text-green-400"
																>
																	<Icon name="CreditCard" />
																	카드
																</Badge>
																<div>
																	<p className="font-medium">스타벅스 강남점</p>
																	<p className="text-sm text-muted-foreground">신한카드 *1234</p>
																</div>
															</div>
															<p className="font-bold text-green-600">-5,500원</p>
														</div>

														<div className="flex items-center justify-between p-3 border rounded-lg">
															<div className="flex items-center gap-3 flex-1">
																<Badge
																	variant="outline"
																	className="border-amber-500 text-amber-700 dark:text-amber-400"
																>
																	<Icon name="CalendarClock" />
																	자동
																</Badge>
																<div>
																	<p className="font-medium">전기요금 자동이체</p>
																	<p className="text-sm text-muted-foreground">한국전력공사</p>
																</div>
															</div>
															<p className="font-bold text-amber-600">-45,300원</p>
														</div>
													</div>
												</div>

												<div>
													<h4 className="text-sm font-semibold mb-3">보안 등급</h4>
													<div className="space-y-3">
														<div className="p-4 border rounded-lg border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
															<div className="flex items-center justify-between mb-2">
																<div className="flex items-center gap-2">
																	<Icon
																		name="ShieldCheck"
																		className="text-green-600 dark:text-green-400"
																	/>
																	<span className="font-semibold">보안 수준</span>
																</div>
																<Badge className="bg-green-600 hover:bg-green-700">
																	<Icon name="Lock" />
																	안전
																</Badge>
															</div>
															<p className="text-sm text-muted-foreground">
																2단계 인증이 활성화되어 있고, 최근 비정상 접근이 감지되지 않았습니다.
															</p>
														</div>

														<div className="p-4 border rounded-lg border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
															<div className="flex items-center justify-between mb-2">
																<div className="flex items-center gap-2">
																	<Icon
																		name="ShieldAlert"
																		className="text-amber-600 dark:text-amber-400"
																	/>
																	<span className="font-semibold">보안 수준</span>
																</div>
																<Badge className="bg-amber-500 hover:bg-amber-600">
																	<Icon name="AlertTriangle" />
																	주의
																</Badge>
															</div>
															<p className="text-sm text-muted-foreground">
																비밀번호를 90일 이상 변경하지 않았습니다. 정기적인 비밀번호 변경을 권장합니다.
															</p>
														</div>

														<div className="p-4 border rounded-lg border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
															<div className="flex items-center justify-between mb-2">
																<div className="flex items-center gap-2">
																	<Icon
																		name="ShieldX"
																		className="text-red-600 dark:text-red-400"
																	/>
																	<span className="font-semibold">보안 수준</span>
																</div>
																<Badge
																	variant="destructive"
																	className="bg-red-600 hover:bg-red-700"
																>
																	<Icon name="AlertOctagon" />
																	위험
																</Badge>
															</div>
															<p className="text-sm text-muted-foreground">
																알 수 없는 기기에서 여러 번 로그인 시도가 있었습니다. 즉시 비밀번호를 변경하세요.
															</p>
														</div>
													</div>
												</div>

												<div>
													<h4 className="text-sm font-semibold mb-3">거래 유형 및 보안 배지</h4>
													<div className="flex flex-wrap gap-3">
														<Badge
															variant="outline"
															className="border-blue-500 text-blue-700 dark:text-blue-400"
														>
															<Icon name="ArrowDownToLine" />
															입금
														</Badge>
														<Badge
															variant="outline"
															className="border-red-500 text-red-700 dark:text-red-400"
														>
															<Icon name="ArrowUpFromLine" />
															출금
														</Badge>
														<Badge
															variant="outline"
															className="border-purple-500 text-purple-700 dark:text-purple-400"
														>
															<Icon name="ArrowLeftRight" />
															이체
														</Badge>
														<Badge
															variant="outline"
															className="border-green-500 text-green-700 dark:text-green-400"
														>
															<Icon name="CreditCard" />
															카드
														</Badge>
														<Badge
															variant="outline"
															className="border-amber-500 text-amber-700 dark:text-amber-400"
														>
															<Icon name="CalendarClock" />
															자동
														</Badge>
													</div>
													<div className="flex flex-wrap gap-3 mt-3">
														<Badge className="bg-green-600 hover:bg-green-700">
															<Icon name="Lock" />
															안전
														</Badge>
														<Badge className="bg-amber-500 hover:bg-amber-600">
															<Icon name="AlertTriangle" />
															주의
														</Badge>
														<Badge
															variant="destructive"
															className="bg-red-600 hover:bg-red-700"
														>
															<Icon name="AlertOctagon" />
															위험
														</Badge>
													</div>
												</div>
											</div>
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value="code">
									<Card className="overflow-hidden">
										<CardContent className="grid gap-6">
											<UICodeBlock
												language="tsx"
												filename="TransactionTypesAndSecurity.tsx"
											>
												{`import { Badge, Icon } from '@/app/components/ui';

function TransactionTypesAndSecurity() {
	return (
		<div className="grid gap-6">
			{/* 거래 유형별 내역 */}
			<div className="space-y-3">
				{/* 입금 */}
				<div className="flex items-center justify-between p-3 border rounded-lg">
					<div className="flex items-center gap-3 flex-1">
						<Badge 
							variant="outline" 
							className="border-blue-500 text-blue-700"
						>
							<Icon name="ArrowDownToLine" />
							입금
						</Badge>
						<div>
							<p className="font-medium">급여 이체</p>
							<p className="text-sm text-muted-foreground">(주)엔텍</p>
						</div>
					</div>
					<p className="font-bold text-blue-600">+3,500,000원</p>
				</div>

				{/* 출금 */}
				<div className="flex items-center justify-between p-3 border rounded-lg">
					<div className="flex items-center gap-3 flex-1">
						<Badge 
							variant="outline" 
							className="border-red-500 text-red-700"
						>
							<Icon name="ArrowUpFromLine" />
							출금
						</Badge>
						<div>
							<p className="font-medium">ATM 현금 인출</p>
							<p className="text-sm text-muted-foreground">강남역 ATM</p>
						</div>
					</div>
					<p className="font-bold text-red-600">-500,000원</p>
				</div>

				{/* 이체 */}
				<div className="flex items-center justify-between p-3 border rounded-lg">
					<div className="flex items-center gap-3 flex-1">
						<Badge 
							variant="outline" 
							className="border-purple-500 text-purple-700"
						>
							<Icon name="ArrowLeftRight" />
							이체
						</Badge>
						<div>
							<p className="font-medium">홍길동님에게 송금</p>
							<p className="text-sm text-muted-foreground">
								국민 123-45-678901
							</p>
						</div>
					</div>
					<p className="font-bold text-purple-600">-100,000원</p>
				</div>
			</div>

			{/* 보안 등급 */}
			<div className="space-y-3">
				{/* 안전 */}
				<div className="p-4 border rounded-lg border-green-200 bg-green-50">
					<div className="flex items-center justify-between mb-2">
						<div className="flex items-center gap-2">
							<Icon name="ShieldCheck" className="text-green-600" />
							<span className="font-semibold">보안 수준</span>
						</div>
						<Badge className="bg-green-600 hover:bg-green-700">
							<Icon name="Lock" />
							안전
						</Badge>
					</div>
					<p className="text-sm text-muted-foreground">
						2단계 인증이 활성화되어 있습니다.
					</p>
				</div>

				{/* 주의 */}
				<div className="p-4 border rounded-lg border-amber-200 bg-amber-50">
					<div className="flex items-center justify-between mb-2">
						<div className="flex items-center gap-2">
							<Icon name="ShieldAlert" className="text-amber-600" />
							<span className="font-semibold">보안 수준</span>
						</div>
						<Badge className="bg-amber-500 hover:bg-amber-600">
							<Icon name="AlertTriangle" />
							주의
						</Badge>
					</div>
					<p className="text-sm text-muted-foreground">
						비밀번호를 90일 이상 변경하지 않았습니다.
					</p>
				</div>

				{/* 위험 */}
				<div className="p-4 border rounded-lg border-red-200 bg-red-50">
					<div className="flex items-center justify-between mb-2">
						<div className="flex items-center gap-2">
							<Icon name="ShieldX" className="text-red-600" />
							<span className="font-semibold">보안 수준</span>
						</div>
						<Badge variant="destructive" className="bg-red-600">
							<Icon name="AlertOctagon" />
							위험
						</Badge>
					</div>
					<p className="text-sm text-muted-foreground">
						알 수 없는 기기에서 로그인 시도가 있었습니다.
					</p>
				</div>
			</div>
		</div>
	);
}`}
											</UICodeBlock>
										</CardContent>
									</Card>
								</TabsContent>
							</Tabs>
						</div>
						{/* 실전 예제 END */}
					</div>
				</div>
			</div>
		</>
	);
};

BadgeEx.displayName = 'BadgeEx';
export default BadgeEx;
