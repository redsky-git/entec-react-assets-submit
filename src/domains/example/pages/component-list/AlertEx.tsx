import type { IComponent } from '@/app/types/common';
import type { JSX } from 'react';
import { useEffect } from 'react';

import { Card, CardContent } from '@/app/components/shadcn/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/shadcn/ui/tabs';
import { Separator } from '@/app/components/shadcn/ui/separator';

import UICodeBlock from '@/shared/components/common/ui/UICodeBlock';

import { Alert, AlertTitle, AlertDescription, Icon } from '@/app/components/ui';

interface IAlertExProps {
	test?: string;
}

const AlertEx: IComponent<IAlertExProps> = (): JSX.Element => {
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
							<h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">Alert</h1>
							<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
								&nbsp;
							</div>
						</div>
						<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
							<strong>Alert</strong> 컴포넌트는 사용자에게 간단한 정보나 상태 메시지를 전달하기 위한 컴포넌트입니다.
						</p>
						<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
							<strong>Alert</strong> 컴포넌트는 팝업이나 알림창처럼 사용자의 상호작용을 유도하는 <strong>Dialog</strong>
							와 달리, 화면의 <strong>특정 위치에 표시</strong>되며, 성공, 경고, 오류 등의 상태를 시각적으로 나타낼 수도
							있습니다.
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
									Basic Alert
								</h2>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>Alert</strong> 컴포넌트는 모두 3가지 컴포넌트를 제공합니다.{' '}
								<strong>Alert, AlertDescription, AlertTitle</strong>
							</p>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								이렇게 제공하는 3가지 컴포넌트를 조합하여 화면에 다양한 Alert UI를 구현할 수 있습니다.
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
											<div className="grid w-full max-w-xl items-start gap-4">
												<Alert>
													<Icon name="CheckCircle2" />
													<AlertTitle>성공! 변경 사항이 저장되었습니다.</AlertTitle>
													<AlertDescription>아이콘, 제목, 설명이 포함된 Alert입니다.</AlertDescription>
												</Alert>
												<Alert>
													<Icon name="Popcorn" />
													<AlertTitle>이 알림에는 제목과 아이콘이 있습니다. 설명은 없습니다.</AlertTitle>
												</Alert>
												<Alert variant="destructive">
													<Icon name="AlertCircle" />
													<AlertTitle>결제를 처리할 수 없습니다.</AlertTitle>
													<AlertDescription>
														<p>결제 정보를 확인하고 다시 시도해 주세요.</p>
														<ul className="list-inside list-disc text-sm">
															<li>카드 정보를 확인하세요</li>
															<li>충분한 자금을 확보하세요</li>
															<li>청구지 주소 확인</li>
														</ul>
													</AlertDescription>
												</Alert>
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
												{`import { Alert, AlertTitle, AlertDescription, Icon } from '@/app/components/ui';

function SamplePage() {
	return (
		<div className="grid w-full max-w-xl items-start gap-4">
			<Alert>
				<Icon name="CheckCircle2" />
				<AlertTitle>성공! 변경 사항이 저장되었습니다.</AlertTitle>
				<AlertDescription>아이콘, 제목, 설명이 포함된 Alert입니다.</AlertDescription>
			</Alert>
			<Alert>
				<Icon name="Popcorn" />
				<AlertTitle>이 알림에는 제목과 아이콘이 있습니다. 설명은 없습니다.</AlertTitle>
			</Alert>
			<Alert variant="destructive">
				<Icon name="AlertCircle" />
				<AlertTitle>결제를 처리할 수 없습니다.</AlertTitle>
				<AlertDescription>
					<p>결제 정보를 확인하고 다시 시도해 주세요.</p>
					<ul className="list-inside list-disc text-sm">
						<li>카드 정보를 확인하세요</li>
						<li>충분한 자금을 확보하세요</li>
						<li>청구지 주소 확인</li>
					</ul>
				</AlertDescription>
			</Alert>
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
								두 가지 <strong>variant ('default', 'destructive')</strong> 속성을 설정할 수 있습니다.
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
										<CardContent className="pt-15 pb-15 flex items-center justify-center">
											<div className="grid w-full max-w-xl items-start gap-4">
												<Alert variant="default">
													<Icon name="MessageSquareWarning" />
													<AlertTitle>default</AlertTitle>
													<AlertDescription>variant 속성의 'default' 값을 설정한 Alert.</AlertDescription>
												</Alert>
												<Alert variant="destructive">
													<Icon name="MessageSquareWarning" />
													<AlertTitle>destructive</AlertTitle>
													<AlertDescription>variant 속성의 'destructive' 값을 설정한 Alert.</AlertDescription>
												</Alert>
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
												{`import { Alert, AlertTitle, AlertDescription, Icon } from '@/app/components/ui';

function SamplePage() {
	return (
		<div className="grid w-full max-w-xl items-start gap-4">
			<Alert variant="default">
				<Icon name="MessageSquareWarning" />
				<AlertTitle>default</AlertTitle>
				<AlertDescription>variant 속성의 'default' 값을 설정한 Alert.</AlertDescription>
			</Alert>
			<Alert variant="destructive">
				<Icon name="MessageSquareWarning" />
				<AlertTitle>destructive</AlertTitle>
				<AlertDescription>variant 속성의 'destructive' 값을 설정한 Alert.</AlertDescription>
			</Alert>
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
								<strong>Alert</strong> 컴포넌트를 활용한 UI 예제들입니다. 거래 결과, 보안 경고, 시스템 공지 등 다양한
								화면에서 활용 가능합니다.
							</p>
						</div>

						{/* 예제 1: 거래 결과 알림 */}
						<div className="flex flex-col gap-2 pt-6">
							<div className="flex items-start justify-between">
								<h3
									data-shorcut="true"
									className="scroll-m-20 text-2xl font-semibold tracking-tight sm:text-2xl xl:text-2xl"
								>
									1. 거래 결과 알림
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								송금, 이체, 결제 등 금융 거래 후 결과를 사용자에게 명확하게 전달합니다. 성공/실패 여부와 함께 상세
								정보를 제공합니다.
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
											<div className="grid w-full items-start gap-4">
												<Alert>
													<Icon name="CheckCircle2" />
													<AlertTitle>송금이 완료되었습니다</AlertTitle>
													<AlertDescription>
														<div className="flex flex-col gap-2 mt-2">
															<div className="flex justify-between text-sm">
																<span className="text-muted-foreground">받는 분</span>
																<span className="font-medium">홍길동</span>
															</div>
															<div className="flex justify-between text-sm">
																<span className="text-muted-foreground">받는 계좌</span>
																<span className="font-medium">국민은행 123-45-678901</span>
															</div>
															<div className="flex justify-between text-sm">
																<span className="text-muted-foreground">이체 금액</span>
																<span className="font-semibold text-blue-600">100,000원</span>
															</div>
															<div className="flex justify-between text-sm">
																<span className="text-muted-foreground">거래 시간</span>
																<span className="font-medium">2025.11.26 14:23:15</span>
															</div>
														</div>
													</AlertDescription>
												</Alert>

												<Alert variant="destructive">
													<Icon name="XCircle" />
													<AlertTitle>송금에 실패했습니다</AlertTitle>
													<AlertDescription>
														<p className="mb-2">거래를 처리하는 중 오류가 발생했습니다.</p>
														<div className="flex flex-col gap-1 text-sm">
															<p>
																<strong>오류 코드:</strong> TR-4012
															</p>
															<p>
																<strong>사유:</strong> 1일 이체 한도 초과
															</p>
															<p className="mt-2 text-xs">문제가 계속되면 고객센터(1588-xxxx)로 문의해 주세요.</p>
														</div>
													</AlertDescription>
												</Alert>

												<Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
													<Icon
														name="CheckCircle2"
														className="text-green-600 dark:text-green-400"
													/>
													<AlertTitle className="text-green-900 dark:text-green-100">자동이체 등록 완료</AlertTitle>
													<AlertDescription className="text-green-800 dark:text-green-200">
														<div className="flex flex-col gap-2 mt-2 text-sm">
															<p>매월 25일 자동으로 이체됩니다.</p>
															<div className="flex justify-between">
																<span>출금 계좌</span>
																<span className="font-medium">신한 110-123-456789</span>
															</div>
															<div className="flex justify-between">
																<span>이체 금액</span>
																<span className="font-semibold">350,000원</span>
															</div>
															<p className="text-xs mt-1">자동이체 관리에서 언제든지 해지할 수 있습니다.</p>
														</div>
													</AlertDescription>
												</Alert>
											</div>
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value="code">
									<Card className="overflow-hidden">
										<CardContent className="grid gap-6">
											<UICodeBlock
												language="tsx"
												filename="TransactionResult.tsx"
											>
												{`import { Alert, AlertTitle, AlertDescription, Icon } from '@/app/components/ui';

function TransactionResult() {
	return (
		<div className="grid w-full items-start gap-4">
			{/* 송금 성공 */}
			<Alert>
				<Icon name="CheckCircle2" />
				<AlertTitle>송금이 완료되었습니다</AlertTitle>
				<AlertDescription>
					<div className="flex flex-col gap-2 mt-2">
						<div className="flex justify-between text-sm">
							<span className="text-muted-foreground">받는 분</span>
							<span className="font-medium">홍길동</span>
						</div>
						<div className="flex justify-between text-sm">
							<span className="text-muted-foreground">받는 계좌</span>
							<span className="font-medium">국민은행 123-45-678901</span>
						</div>
						<div className="flex justify-between text-sm">
							<span className="text-muted-foreground">이체 금액</span>
							<span className="font-semibold text-blue-600">100,000원</span>
						</div>
					</div>
				</AlertDescription>
			</Alert>

			{/* 송금 실패 */}
			<Alert variant="destructive">
				<Icon name="XCircle" />
				<AlertTitle>송금에 실패했습니다</AlertTitle>
				<AlertDescription>
					<p className="mb-2">거래를 처리하는 중 오류가 발생했습니다.</p>
					<div className="flex flex-col gap-1 text-sm">
						<p><strong>오류 코드:</strong> TR-4012</p>
						<p><strong>사유:</strong> 1일 이체 한도 초과</p>
					</div>
				</AlertDescription>
			</Alert>

			{/* 자동이체 등록 성공 */}
			<Alert className="border-green-200 bg-green-50">
				<Icon name="CheckCircle2" className="text-green-600" />
				<AlertTitle className="text-green-900">자동이체 등록 완료</AlertTitle>
				<AlertDescription className="text-green-800">
					<p>매월 25일 자동으로 이체됩니다.</p>
				</AlertDescription>
			</Alert>
		</div>
	);
}`}
											</UICodeBlock>
										</CardContent>
									</Card>
								</TabsContent>
							</Tabs>
						</div>

						{/* 예제 2: 보안 경고 */}
						<div className="flex flex-col gap-2 pt-6">
							<div className="flex items-start justify-between">
								<h3
									data-shorcut="true"
									className="scroll-m-20 text-2xl font-semibold tracking-tight sm:text-2xl xl:text-2xl"
								>
									2. 보안 경고 및 알림
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								비밀번호 변경, 비정상 접근 감지, 보안 인증 등 보안 관련 중요한 정보를 사용자에게 전달합니다.
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
											<div className="grid w-full items-start gap-4">
												<Alert
													variant="destructive"
													className="border-red-300 dark:border-red-800"
												>
													<Icon name="ShieldAlert" />
													<AlertTitle>비밀번호 변경이 필요합니다</AlertTitle>
													<AlertDescription>
														<div className="flex flex-col gap-2">
															<p>마지막 비밀번호 변경 후 90일이 경과했습니다.</p>
															<p className="text-sm">보안을 위해 주기적으로 비밀번호를 변경하는 것을 권장합니다.</p>
															<div className="flex gap-2 mt-2">
																<button className="px-3 py-1 text-sm bg-white dark:bg-gray-800 border border-red-300 dark:border-red-700 rounded hover:bg-red-50 dark:hover:bg-red-950">
																	지금 변경
																</button>
																<button className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground">
																	나중에
																</button>
															</div>
														</div>
													</AlertDescription>
												</Alert>

												<Alert className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
													<Icon
														name="AlertTriangle"
														className="text-amber-600 dark:text-amber-400"
													/>
													<AlertTitle className="text-amber-900 dark:text-amber-100">
														비정상 접근 시도가 감지되었습니다
													</AlertTitle>
													<AlertDescription className="text-amber-800 dark:text-amber-200">
														<div className="flex flex-col gap-2">
															<p className="text-sm">알 수 없는 기기에서 계정 접근 시도가 있었습니다.</p>
															<div className="text-sm space-y-1 bg-amber-100/50 dark:bg-amber-900/20 p-3 rounded">
																<div className="flex justify-between">
																	<span className="text-muted-foreground">시도 시간</span>
																	<span className="font-medium">2025.11.26 02:15:33</span>
																</div>
																<div className="flex justify-between">
																	<span className="text-muted-foreground">접근 위치</span>
																	<span className="font-medium">서울시 강남구</span>
																</div>
																<div className="flex justify-between">
																	<span className="text-muted-foreground">기기</span>
																	<span className="font-medium">Windows PC</span>
																</div>
															</div>
															<p className="text-xs mt-2">
																본인의 접근이 아닌 경우 즉시 비밀번호를 변경하고 고객센터로 연락해 주세요.
															</p>
														</div>
													</AlertDescription>
												</Alert>

												<Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
													<Icon
														name="Smartphone"
														className="text-blue-600 dark:text-blue-400"
													/>
													<AlertTitle className="text-blue-900 dark:text-blue-100">
														2단계 인증이 설정되지 않았습니다
													</AlertTitle>
													<AlertDescription className="text-blue-800 dark:text-blue-200">
														<div className="flex flex-col gap-2">
															<p className="text-sm">계정 보안을 강화하기 위해 2단계 인증(OTP) 설정을 권장합니다.</p>
															<ul className="list-disc list-inside text-sm space-y-1">
																<li>더 안전한 계정 보호</li>
																<li>불법 접근 차단</li>
																<li>금융거래 시 추가 인증</li>
															</ul>
															<button className="w-fit px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 mt-2">
																2단계 인증 설정하기
															</button>
														</div>
													</AlertDescription>
												</Alert>
											</div>
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value="code">
									<Card className="overflow-hidden">
										<CardContent className="grid gap-6">
											<UICodeBlock
												language="tsx"
												filename="SecurityAlerts.tsx"
											>
												{`import { Alert, AlertTitle, AlertDescription, Icon } from '@/app/components/ui';

function SecurityAlerts() {
	return (
		<div className="grid w-full items-start gap-4">
			{/* 비밀번호 변경 필요 */}
			<Alert variant="destructive" className="border-red-300">
				<Icon name="ShieldAlert" />
				<AlertTitle>비밀번호 변경이 필요합니다</AlertTitle>
				<AlertDescription>
					<div className="flex flex-col gap-2">
						<p>마지막 비밀번호 변경 후 90일이 경과했습니다.</p>
						<p className="text-sm">
							보안을 위해 주기적으로 비밀번호를 변경하는 것을 권장합니다.
						</p>
						<div className="flex gap-2 mt-2">
							<button className="px-3 py-1 text-sm bg-white border rounded">
								지금 변경
							</button>
							<button className="px-3 py-1 text-sm text-muted-foreground">
								나중에
							</button>
						</div>
					</div>
				</AlertDescription>
			</Alert>

			{/* 비정상 접근 감지 */}
			<Alert className="border-amber-200 bg-amber-50">
				<Icon name="AlertTriangle" className="text-amber-600" />
				<AlertTitle className="text-amber-900">
					비정상 접근 시도가 감지되었습니다
				</AlertTitle>
				<AlertDescription className="text-amber-800">
					<p className="text-sm">
						알 수 없는 기기에서 계정 접근 시도가 있었습니다.
					</p>
					{/* 상세 정보... */}
				</AlertDescription>
			</Alert>

			{/* 2단계 인증 권장 */}
			<Alert className="border-blue-200 bg-blue-50">
				<Icon name="Smartphone" className="text-blue-600" />
				<AlertTitle className="text-blue-900">
					2단계 인증이 설정되지 않았습니다
				</AlertTitle>
				<AlertDescription className="text-blue-800">
					<p className="text-sm">
						계정 보안을 강화하기 위해 2단계 인증 설정을 권장합니다.
					</p>
				</AlertDescription>
			</Alert>
		</div>
	);
}`}
											</UICodeBlock>
										</CardContent>
									</Card>
								</TabsContent>
							</Tabs>
						</div>

						{/* 예제 3: 시스템 공지 */}
						<div className="flex flex-col gap-2 pt-6">
							<div className="flex items-start justify-between">
								<h3
									data-shorcut="true"
									className="scroll-m-20 text-2xl font-semibold tracking-tight sm:text-2xl xl:text-2xl"
								>
									3. 시스템 공지 및 안내
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								시스템 점검, 서비스 중단, 신규 기능 안내 등 운영 관련 중요한 정보를 전달합니다.
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
											<div className="grid w-full items-start gap-4">
												<Alert className="border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950">
													<Icon
														name="Wrench"
														className="text-purple-600 dark:text-purple-400"
													/>
													<AlertTitle className="text-purple-900 dark:text-purple-100">
														정기 시스템 점검 안내
													</AlertTitle>
													<AlertDescription className="text-purple-800 dark:text-purple-200">
														<div className="flex flex-col gap-2">
															<p className="text-sm">더 나은 서비스 제공을 위해 시스템 점검을 실시합니다.</p>
															<div className="bg-purple-100/50 dark:bg-purple-900/20 p-3 rounded text-sm space-y-1">
																<div className="flex justify-between">
																	<span className="font-semibold">점검 일시</span>
																	<span>2025.11.30 (토) 02:00 ~ 06:00</span>
																</div>
																<div className="flex justify-between">
																	<span className="font-semibold">점검 내용</span>
																	<span>서버 보안 업데이트</span>
																</div>
															</div>
															<p className="text-xs mt-1">점검 시간 동안 모든 금융 서비스 이용이 불가능합니다.</p>
														</div>
													</AlertDescription>
												</Alert>

												<Alert className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950">
													<Icon
														name="AlertCircle"
														className="text-orange-600 dark:text-orange-400"
													/>
													<AlertTitle className="text-orange-900 dark:text-orange-100">
														일부 서비스 지연 안내
													</AlertTitle>
													<AlertDescription className="text-orange-800 dark:text-orange-200">
														<div className="flex flex-col gap-2">
															<p className="text-sm">현재 타행이체 서비스에 일시적인 지연이 발생하고 있습니다.</p>
															<div className="text-sm">
																<p className="font-semibold mb-1">영향받는 서비스:</p>
																<ul className="list-disc list-inside space-y-0.5 ml-2">
																	<li>타행 계좌이체</li>
																	<li>자동이체 등록</li>
																</ul>
															</div>
															<p className="text-xs mt-1">
																빠른 시일 내에 정상화하도록 하겠습니다. 불편을 드려 죄송합니다.
															</p>
														</div>
													</AlertDescription>
												</Alert>

												<Alert className="border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-950">
													<Icon
														name="Sparkles"
														className="text-indigo-600 dark:text-indigo-400"
													/>
													<AlertTitle className="text-indigo-900 dark:text-indigo-100">
														새로운 기능이 추가되었습니다!
													</AlertTitle>
													<AlertDescription className="text-indigo-800 dark:text-indigo-200">
														<div className="flex flex-col gap-2">
															<p className="text-sm">모바일 앱에서 생체인증 로그인이 가능합니다.</p>
															<div className="bg-indigo-100/50 dark:bg-indigo-900/20 p-3 rounded text-sm">
																<p className="font-semibold mb-2">주요 기능:</p>
																<ul className="list-disc list-inside space-y-1">
																	<li>지문 인증 로그인</li>
																	<li>얼굴 인식 로그인</li>
																	<li>빠르고 안전한 계좌 조회</li>
																</ul>
															</div>
															<button className="w-fit px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 mt-2">
																설정하러 가기
															</button>
														</div>
													</AlertDescription>
												</Alert>
											</div>
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value="code">
									<Card className="overflow-hidden">
										<CardContent className="grid gap-6">
											<UICodeBlock
												language="tsx"
												filename="SystemNotices.tsx"
											>
												{`import { Alert, AlertTitle, AlertDescription, Icon } from '@/app/components/ui';

function SystemNotices() {
	return (
		<div className="grid w-full items-start gap-4">
			{/* 시스템 점검 안내 */}
			<Alert className="border-purple-200 bg-purple-50">
				<Icon name="Wrench" className="text-purple-600" />
				<AlertTitle className="text-purple-900">정기 시스템 점검 안내</AlertTitle>
				<AlertDescription className="text-purple-800">
					<div className="flex flex-col gap-2">
						<p className="text-sm">
							더 나은 서비스 제공을 위해 시스템 점검을 실시합니다.
						</p>
						<div className="bg-purple-100/50 p-3 rounded text-sm space-y-1">
							<div className="flex justify-between">
								<span className="font-semibold">점검 일시</span>
								<span>2025.11.30 (토) 02:00 ~ 06:00</span>
							</div>
							<div className="flex justify-between">
								<span className="font-semibold">점검 내용</span>
								<span>서버 보안 업데이트</span>
							</div>
						</div>
					</div>
				</AlertDescription>
			</Alert>

			{/* 서비스 지연 안내 */}
			<Alert className="border-orange-200 bg-orange-50">
				<Icon name="AlertCircle" className="text-orange-600" />
				<AlertTitle className="text-orange-900">일부 서비스 지연 안내</AlertTitle>
				<AlertDescription className="text-orange-800">
					<p className="text-sm">
						현재 타행이체 서비스에 일시적인 지연이 발생하고 있습니다.
					</p>
				</AlertDescription>
			</Alert>

			{/* 신규 기능 안내 */}
			<Alert className="border-indigo-200 bg-indigo-50">
				<Icon name="Sparkles" className="text-indigo-600" />
				<AlertTitle className="text-indigo-900">
					새로운 기능이 추가되었습니다!
				</AlertTitle>
				<AlertDescription className="text-indigo-800">
					<p className="text-sm">모바일 앱에서 생체인증 로그인이 가능합니다.</p>
				</AlertDescription>
			</Alert>
		</div>
	);
}`}
											</UICodeBlock>
										</CardContent>
									</Card>
								</TabsContent>
							</Tabs>
						</div>

						{/* 예제 4: 한도 및 잔액 경고 */}
						<div className="flex flex-col gap-2 pt-6">
							<div className="flex items-start justify-between">
								<h3
									data-shorcut="true"
									className="scroll-m-20 text-2xl font-semibold tracking-tight sm:text-2xl xl:text-2xl"
								>
									4. 한도 및 잔액 경고
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								계좌 잔액 부족, 이체 한도 초과, 카드 한도 근접 등 금액 관련 중요한 알림을 전달합니다.
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
											<div className="grid w-full items-start gap-4">
												<Alert
													variant="destructive"
													className="border-red-300 dark:border-red-800"
												>
													<Icon name="Wallet" />
													<AlertTitle>계좌 잔액이 부족합니다</AlertTitle>
													<AlertDescription>
														<div className="flex flex-col gap-2">
															<p className="text-sm">요청하신 거래를 처리하기에 잔액이 부족합니다.</p>
															<div className="bg-red-100/50 dark:bg-red-900/20 p-3 rounded text-sm space-y-1">
																<div className="flex justify-between">
																	<span>현재 잔액</span>
																	<span className="font-semibold">85,000원</span>
																</div>
																<div className="flex justify-between">
																	<span>이체 요청 금액</span>
																	<span className="font-semibold">100,000원</span>
																</div>
																<div className="flex justify-between border-t border-red-200 dark:border-red-800 pt-1 mt-1">
																	<span className="font-semibold">부족 금액</span>
																	<span className="font-bold text-red-700 dark:text-red-300">15,000원</span>
																</div>
															</div>
															<p className="text-xs mt-1">입금 후 다시 시도해 주세요.</p>
														</div>
													</AlertDescription>
												</Alert>

												<Alert className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
													<Icon
														name="TrendingUp"
														className="text-amber-600 dark:text-amber-400"
													/>
													<AlertTitle className="text-amber-900 dark:text-amber-100">
														1일 이체 한도가 초과되었습니다
													</AlertTitle>
													<AlertDescription className="text-amber-800 dark:text-amber-200">
														<div className="flex flex-col gap-2">
															<p className="text-sm">오늘 이체 가능한 금액을 모두 사용하셨습니다.</p>
															<div className="bg-amber-100/50 dark:bg-amber-900/20 p-3 rounded text-sm space-y-1">
																<div className="flex justify-between">
																	<span>1일 이체 한도</span>
																	<span className="font-semibold">5,000,000원</span>
																</div>
																<div className="flex justify-between">
																	<span>오늘 이체 금액</span>
																	<span className="font-semibold">5,000,000원</span>
																</div>
																<div className="flex justify-between border-t border-amber-200 dark:border-amber-800 pt-1 mt-1">
																	<span className="font-semibold">잔여 한도</span>
																	<span className="font-bold">0원</span>
																</div>
															</div>
															<p className="text-xs mt-1">
																내일 0시 이후 다시 이용 가능합니다. 한도 증액은 고객센터로 문의해 주세요.
															</p>
														</div>
													</AlertDescription>
												</Alert>

												<Alert className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
													<Icon
														name="CreditCard"
														className="text-yellow-600 dark:text-yellow-400"
													/>
													<AlertTitle className="text-yellow-900 dark:text-yellow-100">
														카드 사용 한도가 80% 초과했습니다
													</AlertTitle>
													<AlertDescription className="text-yellow-800 dark:text-yellow-200">
														<div className="flex flex-col gap-2">
															<p className="text-sm">이번 달 카드 사용액이 한도의 80%를 초과했습니다.</p>
															<div className="bg-yellow-100/50 dark:bg-yellow-900/20 p-3 rounded text-sm space-y-2">
																<div className="flex justify-between">
																	<span>월 한도</span>
																	<span className="font-semibold">3,000,000원</span>
																</div>
																<div className="flex justify-between">
																	<span>현재 사용액</span>
																	<span className="font-semibold text-yellow-700 dark:text-yellow-300">
																		2,450,000원
																	</span>
																</div>
																<div className="w-full bg-yellow-200 dark:bg-yellow-900 rounded-full h-2">
																	<div
																		className="bg-yellow-600 dark:bg-yellow-500 h-2 rounded-full"
																		style={{ width: '82%' }}
																	></div>
																</div>
																<div className="flex justify-between text-xs">
																	<span>사용률</span>
																	<span className="font-semibold">82%</span>
																</div>
															</div>
															<p className="text-xs mt-1">한도 초과 시 카드 사용이 제한될 수 있습니다.</p>
														</div>
													</AlertDescription>
												</Alert>

												<Alert className="border-cyan-200 bg-cyan-50 dark:border-cyan-800 dark:bg-cyan-950">
													<Icon
														name="PiggyBank"
														className="text-cyan-600 dark:text-cyan-400"
													/>
													<AlertTitle className="text-cyan-900 dark:text-cyan-100">적금 자동이체 예정 안내</AlertTitle>
													<AlertDescription className="text-cyan-800 dark:text-cyan-200">
														<div className="flex flex-col gap-2">
															<p className="text-sm">내일 자동이체가 예정되어 있습니다.</p>
															<div className="bg-cyan-100/50 dark:bg-cyan-900/20 p-3 rounded text-sm space-y-1">
																<div className="flex justify-between">
																	<span>출금 예정일</span>
																	<span className="font-semibold">2025.11.27</span>
																</div>
																<div className="flex justify-between">
																	<span>출금 금액</span>
																	<span className="font-semibold">500,000원</span>
																</div>
																<div className="flex justify-between">
																	<span>현재 잔액</span>
																	<span className="font-semibold">450,000원</span>
																</div>
																<div className="flex justify-between border-t border-cyan-200 dark:border-cyan-800 pt-1 mt-1">
																	<span className="font-semibold text-red-600 dark:text-red-400">부족 금액</span>
																	<span className="font-bold text-red-600 dark:text-red-400">50,000원</span>
																</div>
															</div>
															<p className="text-xs mt-1">
																잔액이 부족하면 자동이체가 실행되지 않습니다. 미리 입금해 주세요.
															</p>
														</div>
													</AlertDescription>
												</Alert>
											</div>
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value="code">
									<Card className="overflow-hidden">
										<CardContent className="grid gap-6">
											<UICodeBlock
												language="tsx"
												filename="BalanceAlerts.tsx"
											>
												{`import { Alert, AlertTitle, AlertDescription, Icon } from '@/app/components/ui';

function BalanceAlerts() {
	return (
		<div className="grid w-full items-start gap-4">
			{/* 잔액 부족 */}
			<Alert variant="destructive" className="border-red-300">
				<Icon name="Wallet" />
				<AlertTitle>계좌 잔액이 부족합니다</AlertTitle>
				<AlertDescription>
					<div className="flex flex-col gap-2">
						<p className="text-sm">요청하신 거래를 처리하기에 잔액이 부족합니다.</p>
						<div className="bg-red-100/50 p-3 rounded text-sm space-y-1">
							<div className="flex justify-between">
								<span>현재 잔액</span>
								<span className="font-semibold">85,000원</span>
							</div>
							<div className="flex justify-between">
								<span>이체 요청 금액</span>
								<span className="font-semibold">100,000원</span>
							</div>
							<div className="flex justify-between border-t pt-1">
								<span className="font-semibold">부족 금액</span>
								<span className="font-bold text-red-700">15,000원</span>
							</div>
						</div>
					</div>
				</AlertDescription>
			</Alert>

			{/* 이체 한도 초과 */}
			<Alert className="border-amber-200 bg-amber-50">
				<Icon name="TrendingUp" className="text-amber-600" />
				<AlertTitle className="text-amber-900">
					1일 이체 한도가 초과되었습니다
				</AlertTitle>
				<AlertDescription className="text-amber-800">
					<p className="text-sm">오늘 이체 가능한 금액을 모두 사용하셨습니다.</p>
				</AlertDescription>
			</Alert>

			{/* 카드 한도 근접 */}
			<Alert className="border-yellow-200 bg-yellow-50">
				<Icon name="CreditCard" className="text-yellow-600" />
				<AlertTitle className="text-yellow-900">
					카드 사용 한도가 80% 초과했습니다
				</AlertTitle>
				<AlertDescription className="text-yellow-800">
					<div className="flex flex-col gap-2">
						<p className="text-sm">이번 달 카드 사용액이 한도의 80%를 초과했습니다.</p>
						<div className="w-full bg-yellow-200 rounded-full h-2">
							<div 
								className="bg-yellow-600 h-2 rounded-full" 
								style={{ width: '82%' }}
							/>
						</div>
					</div>
				</AlertDescription>
			</Alert>
		</div>
	);
}`}
											</UICodeBlock>
										</CardContent>
									</Card>
								</TabsContent>
							</Tabs>
						</div>

						{/* 예제 5: 입력 검증 및 안내 */}
						<div className="flex flex-col gap-2 pt-6">
							<div className="flex items-start justify-between">
								<h3
									data-shorcut="true"
									className="scroll-m-20 text-2xl font-semibold tracking-tight sm:text-2xl xl:text-2xl"
								>
									5. 입력 검증 및 안내
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								계좌번호, 금액 입력 등 사용자 입력에 대한 검증 결과와 도움말을 제공합니다.
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
											<div className="grid w-full items-start gap-4">
												<Alert
													variant="destructive"
													className="border-red-300 dark:border-red-800"
												>
													<Icon name="XCircle" />
													<AlertTitle>올바르지 않은 계좌번호입니다</AlertTitle>
													<AlertDescription>
														<div className="flex flex-col gap-2">
															<p className="text-sm">입력하신 계좌번호의 형식이 올바르지 않습니다.</p>
															<div className="text-sm">
																<p className="font-semibold mb-1">확인사항:</p>
																<ul className="list-disc list-inside space-y-0.5 ml-2">
																	<li>계좌번호를 정확히 입력했는지 확인</li>
																	<li>하이픈(-) 없이 숫자만 입력</li>
																	<li>은행별 계좌번호 자릿수 확인</li>
																</ul>
															</div>
														</div>
													</AlertDescription>
												</Alert>

												<Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
													<Icon
														name="Info"
														className="text-blue-600 dark:text-blue-400"
													/>
													<AlertTitle className="text-blue-900 dark:text-blue-100">이체 전 확인해 주세요</AlertTitle>
													<AlertDescription className="text-blue-800 dark:text-blue-200">
														<div className="flex flex-col gap-2 text-sm">
															<p>안전한 금융거래를 위해 아래 사항을 확인해 주세요.</p>
															<div className="bg-blue-100/50 dark:bg-blue-900/20 p-3 rounded space-y-2">
																<div className="flex items-start gap-2">
																	<Icon
																		name="Check"
																		className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400"
																	/>
																	<span>받는 분의 성명과 계좌번호를 다시 확인하세요</span>
																</div>
																<div className="flex items-start gap-2">
																	<Icon
																		name="Check"
																		className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400"
																	/>
																	<span>이체 금액이 정확한지 확인하세요</span>
																</div>
																<div className="flex items-start gap-2">
																	<Icon
																		name="Check"
																		className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400"
																	/>
																	<span>보이스피싱 의심 시 즉시 중단하세요</span>
																</div>
															</div>
														</div>
													</AlertDescription>
												</Alert>

												<Alert className="border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950">
													<Icon
														name="CheckCircle2"
														className="text-emerald-600 dark:text-emerald-400"
													/>
													<AlertTitle className="text-emerald-900 dark:text-emerald-100">
														계좌번호가 확인되었습니다
													</AlertTitle>
													<AlertDescription className="text-emerald-800 dark:text-emerald-200">
														<div className="flex flex-col gap-2">
															<div className="bg-emerald-100/50 dark:bg-emerald-900/20 p-3 rounded text-sm space-y-1">
																<div className="flex justify-between">
																	<span>예금주</span>
																	<span className="font-semibold">홍길동</span>
																</div>
																<div className="flex justify-between">
																	<span>은행</span>
																	<span className="font-semibold">국민은행</span>
																</div>
																<div className="flex justify-between">
																	<span>계좌번호</span>
																	<span className="font-semibold">123-45-678901</span>
																</div>
															</div>
															<p className="text-xs mt-1">예금주 정보가 맞는지 확인해 주세요.</p>
														</div>
													</AlertDescription>
												</Alert>

												<Alert className="border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
													<Icon
														name="Lightbulb"
														className="text-slate-600 dark:text-slate-400"
													/>
													<AlertTitle className="text-slate-900 dark:text-slate-100">빠른 송금 팁</AlertTitle>
													<AlertDescription className="text-slate-800 dark:text-slate-200">
														<div className="flex flex-col gap-2 text-sm">
															<p>자주 송금하는 계좌는 즐겨찾기에 등록해 보세요.</p>
															<div className="bg-slate-100/50 dark:bg-slate-900/20 p-3 rounded space-y-1">
																<p className="font-semibold">즐겨찾기 등록 시 장점:</p>
																<ul className="list-disc list-inside space-y-0.5 ml-2">
																	<li>계좌번호 입력 불필요</li>
																	<li>빠른 송금 처리</li>
																	<li>입력 오류 방지</li>
																</ul>
															</div>
														</div>
													</AlertDescription>
												</Alert>
											</div>
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value="code">
									<Card className="overflow-hidden">
										<CardContent className="grid gap-6">
											<UICodeBlock
												language="tsx"
												filename="ValidationAlerts.tsx"
											>
												{`import { Alert, AlertTitle, AlertDescription, Icon } from '@/app/components/ui';

function ValidationAlerts() {
	return (
		<div className="grid w-full items-start gap-4">
			{/* 계좌번호 오류 */}
			<Alert variant="destructive" className="border-red-300">
				<Icon name="XCircle" />
				<AlertTitle>올바르지 않은 계좌번호입니다</AlertTitle>
				<AlertDescription>
					<div className="flex flex-col gap-2">
						<p className="text-sm">입력하신 계좌번호의 형식이 올바르지 않습니다.</p>
						<div className="text-sm">
							<p className="font-semibold mb-1">확인사항:</p>
							<ul className="list-disc list-inside space-y-0.5 ml-2">
								<li>계좌번호를 정확히 입력했는지 확인</li>
								<li>하이픈(-) 없이 숫자만 입력</li>
								<li>은행별 계좌번호 자릿수 확인</li>
							</ul>
						</div>
					</div>
				</AlertDescription>
			</Alert>

			{/* 이체 전 확인 안내 */}
			<Alert className="border-blue-200 bg-blue-50">
				<Icon name="Info" className="text-blue-600" />
				<AlertTitle className="text-blue-900">이체 전 확인해 주세요</AlertTitle>
				<AlertDescription className="text-blue-800">
					<p className="text-sm">
						안전한 금융거래를 위해 아래 사항을 확인해 주세요.
					</p>
					<div className="bg-blue-100/50 p-3 rounded space-y-2 mt-2">
						<div className="flex items-start gap-2">
							<Icon name="Check" className="w-4 h-4 mt-0.5" />
							<span>받는 분의 성명과 계좌번호를 다시 확인하세요</span>
						</div>
					</div>
				</AlertDescription>
			</Alert>

			{/* 계좌 확인 완료 */}
			<Alert className="border-emerald-200 bg-emerald-50">
				<Icon name="CheckCircle2" className="text-emerald-600" />
				<AlertTitle className="text-emerald-900">
					계좌번호가 확인되었습니다
				</AlertTitle>
				<AlertDescription className="text-emerald-800">
					<div className="bg-emerald-100/50 p-3 rounded text-sm space-y-1">
						<div className="flex justify-between">
							<span>예금주</span>
							<span className="font-semibold">홍길동</span>
						</div>
					</div>
				</AlertDescription>
			</Alert>

			{/* 도움말 */}
			<Alert className="border-slate-200 bg-slate-50">
				<Icon name="Lightbulb" className="text-slate-600" />
				<AlertTitle className="text-slate-900">빠른 송금 팁</AlertTitle>
				<AlertDescription className="text-slate-800">
					<p className="text-sm">
						자주 송금하는 계좌는 즐겨찾기에 등록해 보세요.
					</p>
				</AlertDescription>
			</Alert>
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

AlertEx.displayName = 'AlertEx';
export default AlertEx;
