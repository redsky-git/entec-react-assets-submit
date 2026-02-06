import type { IComponent } from '@/app/types/common';
import { type JSX } from 'react';

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/app/components/shadcn/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/shadcn/ui/tabs';
import { Separator } from '@/app/components/shadcn/ui/separator';

import UICodeBlock from '@/shared/components/common/ui/UICodeBlock';

import { User, Clock, CheckCircle2, Upload, FileText, Calendar } from 'lucide-react';

interface IDashboardExProps {
	test?: string;
}

const DashboardEx: IComponent<IDashboardExProps> = (): JSX.Element => {
	return (
		<>
			<div className="flex min-w-0 flex-1 flex-col">
				<div className="h-(--top-spacing) shrink-0" />
				<div className="mx-auto flex w-full  min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300">
					<div className="flex flex-col gap-2">
						<div className="flex items-start justify-between">
							<h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">대시보드</h1>
							<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
								&nbsp;
							</div>
						</div>
						<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
							<strong>entec-react-assets</strong>
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
									대시보드
								</h2>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">--</p>
						</div>
						<div className="w-full flex-1 py-4">
							<Tabs defaultValue="preview">
								<TabsList>
									<TabsTrigger value="preview">Preview</TabsTrigger>
									<TabsTrigger value="code">Code</TabsTrigger>
								</TabsList>
								<TabsContent value="preview">
									<Card>
										<CardContent className="pt-5 pb-5 grid grid-cols-1 gap-4">
											<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
												<Card>
													<CardHeader className="flex flex-row items-center justify-between pb-2">
														<CardTitle className="text-sm font-medium">전체 직원</CardTitle>
														<User className="w-4 h-4 text-slate-600" />
													</CardHeader>
													<CardContent>
														<div className="text-2xl font-bold">245</div>
														<p className="text-xs text-green-600 mt-1">
															<span className="font-semibold">+12%</span> 지난달 대비
														</p>
													</CardContent>
												</Card>

												<Card>
													<CardHeader className="flex flex-row items-center justify-between pb-2">
														<CardTitle className="text-sm font-medium">진행중 작업</CardTitle>
														<Clock className="w-4 h-4 text-slate-600" />
													</CardHeader>
													<CardContent>
														<div className="text-2xl font-bold">38</div>
														<p className="text-xs text-yellow-600 mt-1">
															<span className="font-semibold">-5%</span> 지난주 대비
														</p>
													</CardContent>
												</Card>

												<Card>
													<CardHeader className="flex flex-row items-center justify-between pb-2">
														<CardTitle className="text-sm font-medium">완료율</CardTitle>
														<CheckCircle2 className="w-4 h-4 text-slate-600" />
													</CardHeader>
													<CardContent>
														<div className="text-2xl font-bold">87.3%</div>
														<p className="text-xs text-green-600 mt-1">
															<span className="font-semibold">+3.2%</span> 목표 달성
														</p>
													</CardContent>
												</Card>
											</div>

											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												<Card>
													<CardHeader>
														<CardTitle>최근 활동</CardTitle>
														<CardDescription>최근 7일간의 활동 내역</CardDescription>
													</CardHeader>
													<CardContent className="space-y-4">
														{[
															{
																user: '김민수',
																action: '프로젝트를 완료했습니다',
																time: '2시간 전',
																icon: CheckCircle2,
																color: 'text-green-500',
															},
															{
																user: '이지은',
																action: '새 문서를 업로드했습니다',
																time: '4시간 전',
																icon: Upload,
																color: 'text-blue-500',
															},
															{
																user: '박철수',
																action: '코드 리뷰를 요청했습니다',
																time: '6시간 전',
																icon: FileText,
																color: 'text-purple-500',
															},
															{
																user: '최영희',
																action: '회의를 예약했습니다',
																time: '1일 전',
																icon: Calendar,
																color: 'text-orange-500',
															},
														].map((activity, idx) => (
															<div
																key={idx}
																className="flex items-start gap-4"
															>
																<div className={`p-2 rounded-full bg-slate-100 ${activity.color}`}>
																	<activity.icon className="w-4 h-4" />
																</div>
																<div className="flex-1">
																	<p className="text-sm font-medium">{activity.user}</p>
																	<p className="text-xs text-slate-600">{activity.action}</p>
																	<p className="text-xs text-slate-400 mt-1">{activity.time}</p>
																</div>
															</div>
														))}
													</CardContent>
												</Card>

												<Card>
													<CardHeader>
														<CardTitle>부서별 현황</CardTitle>
														<CardDescription>각 부서의 인원 및 진행 상황</CardDescription>
													</CardHeader>
													<CardContent className="space-y-4">
														{[
															{ dept: '개발팀', count: 45, progress: 85 },
															{ dept: '디자인팀', count: 28, progress: 92 },
															{ dept: '마케팅팀', count: 32, progress: 78 },
															{ dept: '인사팀', count: 15, progress: 95 },
														].map((dept, idx) => (
															<div
																key={idx}
																className="space-y-2"
															>
																<div className="flex items-center justify-between text-sm">
																	<span className="font-medium">{dept.dept}</span>
																	<span className="text-slate-600">{dept.count}명</span>
																</div>
																<div className="w-full bg-slate-200 rounded-full h-2">
																	<div
																		className="bg-blue-500 h-2 rounded-full transition-all"
																		style={{ width: `${dept.progress}%` }}
																	/>
																</div>
																<p className="text-xs text-slate-600">{dept.progress}% 목표 달성</p>
															</div>
														))}
													</CardContent>
												</Card>
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

DashboardEx.displayName = 'DashboardEx';
export default DashboardEx;
