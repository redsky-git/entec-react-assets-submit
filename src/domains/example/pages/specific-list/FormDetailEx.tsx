import type { IComponent } from '@/app/types/common';
import { type JSX } from 'react';

import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from '@/app/components/shadcn/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/shadcn/ui/tabs';
import { Separator } from '@/app/components/shadcn/ui/separator';
import { Label } from '@/app/components/shadcn/ui/label';
import { Textarea } from '@/app/components/shadcn/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/app/components/shadcn/ui/select';
import UICodeBlock from '@/shared/components/common/ui/UICodeBlock';
import { Input, Checkbox, Alert, AlertTitle, AlertDescription, Button } from '@/app/components/ui';

import { AlertCircle, Mail, Phone } from 'lucide-react';

interface IFormDetailExProps {
	test?: string;
}

const FormDetailEx: IComponent<IFormDetailExProps> = (): JSX.Element => {
	return (
		<>
			<div className="flex min-w-0 flex-1 flex-col">
				<div className="h-(--top-spacing) shrink-0" />
				<div className="mx-auto flex w-full  min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300">
					<div className="flex flex-col gap-2">
						<div className="flex items-start justify-between">
							<h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
								상세 입력 폼 예제
							</h1>
							<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
								&nbsp;
							</div>
						</div>
						<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
							<strong>entec-react-assets</strong> 에서 제공하는{' '}
							<strong>Input, Select, Textarea, Checkbox, Alert, Button</strong> 컴포넌트를 활용하여 다음 예제와 같이
							다양한 입력 필드 (텍스트, 이메일, 전화번호, 날짜)를 사용하는 폼 UI 레이아웃을 만드는 예제입니다.
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
									다양한 입력 필드
								</h2>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								업무 개발 환경에서는 상황에 따라 여러가지 정보를 입력 받고, 입력 받은 정보를 서버로 보내는 경우가 많이
								있습니다.
							</p>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								이렇게 다양한 입력 필드 컴포넌트 (텍스트, 이메일, 전화번호, Selectbox, 날짜, 긴 글(Textarea))를 통해
								화면 레이아웃을 구성한 예제입니다.
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
											<Card>
												<CardHeader>
													<CardTitle>직원 정보 등록</CardTitle>
													<CardDescription>새로운 직원 정보를 입력해주세요</CardDescription>
												</CardHeader>
												<CardContent className="space-y-6">
													<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
														<div className="space-y-2">
															<Label
																htmlFor="name"
																className="after:content-['*'] after:text-red-500"
															>
																이름
															</Label>
															<Input
																id="name"
																placeholder="홍길동"
															/>
														</div>
														<div className="space-y-2">
															<Label
																htmlFor="email"
																className="after:content-['*'] after:text-red-500"
															>
																이메일
															</Label>
															<div className="relative">
																<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
																<Input
																	id="email"
																	type="email"
																	placeholder="example@company.com"
																	className="pl-10"
																/>
															</div>
														</div>
														<div className="space-y-2">
															<Label htmlFor="phone">전화번호</Label>
															<div className="relative">
																<Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
																<Input
																	id="phone"
																	placeholder="010-1234-5678"
																	className="pl-10"
																/>
															</div>
														</div>
														<div className="space-y-2">
															<Label
																htmlFor="department"
																className="after:content-['*'] after:text-red-500"
															>
																부서
															</Label>
															<Select>
																<SelectTrigger id="department">
																	<SelectValue placeholder="부서 선택" />
																</SelectTrigger>
																<SelectContent>
																	<SelectItem value="dev">개발팀</SelectItem>
																	<SelectItem value="design">디자인팀</SelectItem>
																	<SelectItem value="marketing">마케팅팀</SelectItem>
																	<SelectItem value="hr">인사팀</SelectItem>
																</SelectContent>
															</Select>
														</div>
														<div className="space-y-2">
															<Label htmlFor="position">직급</Label>
															<Select>
																<SelectTrigger id="position">
																	<SelectValue placeholder="직급 선택" />
																</SelectTrigger>
																<SelectContent>
																	<SelectItem value="intern">인턴</SelectItem>
																	<SelectItem value="junior">주니어</SelectItem>
																	<SelectItem value="senior">시니어</SelectItem>
																	<SelectItem value="lead">리드</SelectItem>
																</SelectContent>
															</Select>
														</div>
														<div className="space-y-2">
															<Label htmlFor="joinDate">입사일</Label>
															<Input
																id="joinDate"
																type="date"
															/>
														</div>
													</div>

													<div className="space-y-2">
														<Label htmlFor="bio">소개</Label>
														<Textarea
															id="bio"
															placeholder="간단한 자기소개를 입력해주세요"
															rows={4}
														/>
													</div>

													<div className="flex items-center space-x-2">
														<Checkbox id="terms" />
														<Label
															htmlFor="terms"
															className="text-sm text-slate-600"
														>
															개인정보 수집 및 이용에 동의합니다
														</Label>
													</div>

													<Alert>
														<AlertCircle className="h-4 w-4" />
														<AlertTitle>안내</AlertTitle>
														<AlertDescription className="flex">
															<span className="text-red-500 text-sm">*</span>표시된 항목은 필수 입력 항목입니다.
														</AlertDescription>
													</Alert>
												</CardContent>
												<CardFooter className="flex justify-end gap-2">
													<Button variant="outline">취소</Button>
													<Button>등록하기</Button>
												</CardFooter>
											</Card>
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
												{`<Card>
	<CardHeader>
		<CardTitle>직원 정보 등록</CardTitle>
		<CardDescription>새로운 직원 정보를 입력해주세요</CardDescription>
	</CardHeader>
	<CardContent className="space-y-6">
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div className="space-y-2">
				<Label
					htmlFor="name"
					className="after:content-['*'] after:text-red-500"
				>
					이름
				</Label>
				<Input
					id="name"
					placeholder="홍길동"
				/>
			</div>
			<div className="space-y-2">
				<Label
					htmlFor="email"
					className="after:content-['*'] after:text-red-500"
				>
					이메일
				</Label>
				<div className="relative">
					<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
					<Input
						id="email"
						type="email"
						placeholder="example@company.com"
						className="pl-10"
					/>
				</div>
			</div>
			<div className="space-y-2">
				<Label htmlFor="phone">전화번호</Label>
				<div className="relative">
					<Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
					<Input
						id="phone"
						placeholder="010-1234-5678"
						className="pl-10"
					/>
				</div>
			</div>
			<div className="space-y-2">
				<Label
					htmlFor="department"
					className="after:content-['*'] after:text-red-500"
				>
					부서
				</Label>
				<Select>
					<SelectTrigger id="department">
						<SelectValue placeholder="부서 선택" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="dev">개발팀</SelectItem>
						<SelectItem value="design">디자인팀</SelectItem>
						<SelectItem value="marketing">마케팅팀</SelectItem>
						<SelectItem value="hr">인사팀</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="space-y-2">
				<Label htmlFor="position">직급</Label>
				<Select>
					<SelectTrigger id="position">
						<SelectValue placeholder="직급 선택" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="intern">인턴</SelectItem>
						<SelectItem value="junior">주니어</SelectItem>
						<SelectItem value="senior">시니어</SelectItem>
						<SelectItem value="lead">리드</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="space-y-2">
				<Label htmlFor="joinDate">입사일</Label>
				<Input
					id="joinDate"
					type="date"
				/>
			</div>
		</div>

		<div className="space-y-2">
			<Label htmlFor="bio">소개</Label>
			<Textarea
				id="bio"
				placeholder="간단한 자기소개를 입력해주세요"
				rows={4}
			/>
		</div>

		<div className="flex items-center space-x-2">
			<Checkbox id="terms" />
			<Label
				htmlFor="terms"
				className="text-sm text-slate-600"
			>
				개인정보 수집 및 이용에 동의합니다
			</Label>
		</div>

		<Alert>
			<AlertCircle className="h-4 w-4" />
			<AlertTitle>안내</AlertTitle>
			<AlertDescription className="flex">
				<span className="text-red-500 text-sm">*</span>표시된 항목은 필수 입력 항목입니다.
			</AlertDescription>
		</Alert>
	</CardContent>
	<CardFooter className="flex justify-end gap-2">
		<Button variant="outline">취소</Button>
		<Button>등록하기</Button>
	</CardFooter>
</Card>`}
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

FormDetailEx.displayName = 'FormDetailEx';
export default FormDetailEx;
