import type { IComponent } from '@/app/types/common';
import { useState, type JSX } from 'react';

import { Card, CardContent } from '@/app/components/shadcn/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/shadcn/ui/tabs';
import { Separator } from '@/app/components/shadcn/ui/separator';
import UICodeBlock from '@/shared/components/common/ui/UICodeBlock';

import {
	Search,
	User,
	Mail,
	DollarSign,
	TrendingUp,
	TrendingDown,
	//MoreVertical,
	Calendar,
	Download,
	ChevronRight,
	Filter,
} from 'lucide-react';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	//TableCaption,
	//TableFooter,
	Badge,
} from '@/app/components/ui';

type TStatus = 'active' | 'inactive' | 'pending' | 'in-progress' | 'completed' | 'planning';
type TRole = 'Admin' | 'Manager' | 'User';

interface ITableUtilizationExProps {
	test?: string;
}

const TableUtilizationEx: IComponent<ITableUtilizationExProps> = (): JSX.Element => {
	const [activeTab, setActiveTab] = useState('users');

	// 사용자 데이터
	const users = [
		{ id: 1, name: '김민준', email: 'minjun@example.com', role: 'Admin', status: 'active', joinDate: '2024-01-15' },
		{ id: 2, name: '이서연', email: 'seoyeon@example.com', role: 'User', status: 'active', joinDate: '2024-02-20' },
		{ id: 3, name: '박지훈', email: 'jihoon@example.com', role: 'Manager', status: 'inactive', joinDate: '2024-03-10' },
		{ id: 4, name: '최유나', email: 'yuna@example.com', role: 'User', status: 'active', joinDate: '2024-04-05' },
		{ id: 5, name: '정하늘', email: 'haneul@example.com', role: 'User', status: 'pending', joinDate: '2024-05-12' },
	];

	// 매출 데이터
	const sales = [
		{
			id: 1,
			product: 'Premium Plan',
			amount: 1250000,
			customer: '테크 스타트업',
			date: '2024-11-01',
			trend: 'up',
			change: '+12%',
		},
		{
			id: 2,
			product: 'Basic Plan',
			amount: 350000,
			customer: '개인 사업자',
			date: '2024-11-03',
			trend: 'up',
			change: '+5%',
		},
		{
			id: 3,
			product: 'Enterprise Plan',
			amount: 5800000,
			customer: '대기업 A',
			date: '2024-11-05',
			trend: 'down',
			change: '-3%',
		},
		{
			id: 4,
			product: 'Premium Plan',
			amount: 1450000,
			customer: '중소기업 B',
			date: '2024-11-08',
			trend: 'up',
			change: '+18%',
		},
		{
			id: 5,
			product: 'Basic Plan',
			amount: 280000,
			customer: '프리랜서',
			date: '2024-11-10',
			trend: 'down',
			change: '-8%',
		},
	];

	// 프로젝트 데이터
	const projects = [
		{
			id: 1,
			name: 'Website Redesign',
			client: '삼성전자',
			deadline: '2024-12-15',
			progress: 75,
			status: 'in-progress',
			team: 5,
		},
		{
			id: 2,
			name: 'Mobile App Dev',
			client: 'LG전자',
			deadline: '2024-11-30',
			progress: 90,
			status: 'in-progress',
			team: 8,
		},
		{
			id: 3,
			name: 'Brand Identity',
			client: '현대자동차',
			deadline: '2024-12-30',
			progress: 45,
			status: 'in-progress',
			team: 3,
		},
		{
			id: 4,
			name: 'E-commerce Platform',
			client: '쿠팡',
			deadline: '2024-10-20',
			progress: 100,
			status: 'completed',
			team: 12,
		},
		{
			id: 5,
			name: 'Marketing Campaign',
			client: '네이버',
			deadline: '2024-12-05',
			progress: 20,
			status: 'planning',
			team: 4,
		},
	];

	const getStatusBadge = (status: TStatus) => {
		const variants = {
			active: 'bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20',
			inactive: 'bg-gray-500/10 text-gray-600 ring-1 ring-gray-500/20',
			pending: 'bg-amber-500/10 text-amber-600 ring-1 ring-amber-500/20',
			'in-progress': 'bg-blue-500/10 text-blue-600 ring-1 ring-blue-500/20',
			completed: 'bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20',
			planning: 'bg-purple-500/10 text-purple-600 ring-1 ring-purple-500/20',
		};

		const labels = {
			active: '활성',
			inactive: '비활성',
			pending: '대기중',
			'in-progress': '진행중',
			completed: '완료',
			planning: '계획',
		};

		return <Badge className={variants[status]}>{labels[status]}</Badge>;
	};

	const getRoleBadge = (role: TRole) => {
		const variants = {
			Admin: 'bg-rose-500/10 text-rose-600 ring-1 ring-rose-500/20',
			Manager: 'bg-indigo-500/10 text-indigo-600 ring-1 ring-indigo-500/20',
			User: 'bg-sky-500/10 text-sky-600 ring-1 ring-sky-500/20',
		};

		return <Badge className={variants[role]}>{role}</Badge>;
	};

	return (
		<>
			<div className="flex min-w-0 flex-1 flex-col">
				<div className="h-(--top-spacing) shrink-0" />
				<div className="mx-auto flex w-full  min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300">
					<div className="flex flex-col gap-2">
						<div className="flex items-start justify-between">
							<h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">Table 활용</h1>
							<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
								&nbsp;
							</div>
						</div>
						<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
							<strong>entec-react-assets</strong> 라이브러리에서 제공하는 <strong>Table</strong> 컴포넌트와{' '}
							<strong>TailwindCSS</strong> 시스템 스타일을 활용하여 좀 더 디자인된 Table 형태의 UI 예제입니다.
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
									Table(사용자, 매출, 프로젝트) 예제
								</h2>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								Icon, Badge 등 다양한 컴포넌트와 TailwindCSS를 활용하여 Table을 구성한 예제입니다.
							</p>
						</div>
						<div className="w-full flex-1 py-4">
							<Tabs defaultValue="preview">
								<TabsList>
									<TabsTrigger value="preview">Preview</TabsTrigger>
									<TabsTrigger value="code">Code</TabsTrigger>
									<TabsTrigger value="data">Table Data</TabsTrigger>
								</TabsList>
								<TabsContent value="preview">
									<Card>
										<CardContent className="pt-5 pb-5 flex items-center justify-center">
											{/* 좀 더 디자인된 테이블 (BEGIN) */}
											<div className=" bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-3 sm:p-4 lg:p-8">
												<div className="max-w-7xl mx-auto">
													{/* 탭 네비게이션 */}
													<div className="mb-6 overflow-x-auto">
														<div className="flex gap-2 min-w-max sm:min-w-0 border-b border-slate-200 pb-px">
															<button
																onClick={() => setActiveTab('users')}
																className={`px-4 sm:px-6 py-3 font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
																	activeTab === 'users'
																		? 'text-blue-600 border-b-2 border-blue-600 -mb-px'
																		: 'text-slate-500 hover:text-blue-500'
																}`}
															>
																<User className="w-4 h-4" />
																<span className="hidden sm:inline">사용자 관리</span>
																<span className="sm:hidden">사용자</span>
															</button>
															<button
																onClick={() => setActiveTab('sales')}
																className={`px-4 sm:px-6 py-3 font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
																	activeTab === 'sales'
																		? 'text-blue-600 border-b-2 border-blue-600 -mb-px'
																		: 'text-slate-500 hover:text-blue-500'
																}`}
															>
																<DollarSign className="w-4 h-4" />
																<span className="hidden sm:inline">매출 현황</span>
																<span className="sm:hidden">매출</span>
															</button>
															<button
																onClick={() => setActiveTab('projects')}
																className={`px-4 sm:px-6 py-3 font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
																	activeTab === 'projects'
																		? 'text-blue-600 border-b-2 border-blue-600 -mb-px'
																		: 'text-slate-500 hover:text-blue-500'
																}`}
															>
																<Calendar className="w-4 h-4" />
																<span className="hidden sm:inline">프로젝트</span>
																<span className="sm:hidden">프로젝트</span>
															</button>
														</div>
													</div>

													{/* 테이블 1: 사용자 관리 */}
													{activeTab === 'users' && (
														<div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-200/50 border border-white/20 overflow-hidden">
															<div className="p-4 sm:p-6 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600">
																<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
																	<div>
																		<h2 className="text-xl sm:text-2xl font-bold text-white">사용자 관리</h2>
																		<p className="text-blue-100 text-sm mt-1">총 {users.length}명의 사용자</p>
																	</div>
																	<div className="flex gap-2 w-full sm:w-auto">
																		<div className="relative flex-1 sm:flex-none">
																			<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4 pointer-events-none z-10" />
																			<input
																				placeholder="검색..."
																				className="w-full sm:w-48 pl-10 pr-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
																			/>
																		</div>
																		<button className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all">
																			<Filter className="w-4 h-4" />
																		</button>
																	</div>
																</div>
															</div>
															<div className="overflow-x-auto">
																<Table className="min-w-[540px]">
																	<TableHeader>
																		<TableRow className="bg-slate-50 border-b border-slate-200">
																			<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm">
																				이름
																			</TableHead>
																			<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm hidden lg:table-cell">
																				이메일
																			</TableHead>
																			<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm">
																				역할
																			</TableHead>
																			<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm">
																				상태
																			</TableHead>
																			<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm hidden md:table-cell">
																				가입일
																			</TableHead>
																			<TableHead className="text-right py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm">
																				작업
																			</TableHead>
																		</TableRow>
																	</TableHeader>
																	<TableBody>
																		{users.map((user) => (
																			<TableRow
																				key={user.id}
																				className="border-b border-slate-100 hover:bg-blue-50/50 transition-all group"
																			>
																				<TableCell className="py-2 px-2 sm:px-2">
																					<div className="flex items-center gap-2 sm:gap-3">
																						<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-semibold text-sm shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
																							{user.name.charAt(0)}
																						</div>
																						<div className="min-w-0">
																							<div className="font-semibold text-slate-900 text-sm truncate">
																								{user.name}
																							</div>
																							<div className="text-xs text-slate-500 truncate lg:hidden">
																								{user.email}
																							</div>
																						</div>
																					</div>
																				</TableCell>
																				<TableCell className="py-2 px-2 sm:px-2 text-slate-600 text-sm hidden lg:table-cell">
																					<div className="flex items-center gap-2">
																						<Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
																						<span className="truncate">{user.email}</span>
																					</div>
																				</TableCell>
																				<TableCell className="py-2 px-2 sm:px-2">
																					{getRoleBadge(user.role as TRole)}
																				</TableCell>
																				<TableCell className="py-2 px-2 sm:px-2">
																					{getStatusBadge(user.status as TStatus)}
																				</TableCell>
																				<TableCell className="py-2 px-2 sm:px-2 text-slate-600 text-sm hidden md:table-cell">
																					{user.joinDate}
																				</TableCell>
																				<TableCell className="py-2 px-2 sm:px-2 text-right">
																					<button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
																						<ChevronRight className="w-4 h-4" />
																					</button>
																				</TableCell>
																			</TableRow>
																		))}
																	</TableBody>
																</Table>
															</div>
														</div>
													)}

													{/* 테이블 2: 매출 현황 */}
													{activeTab === 'sales' && (
														<div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-200/50 border border-white/20 overflow-hidden">
															<div className="p-4 sm:p-6 bg-gradient-to-br from-indigo-500 via-blue-500 to-indigo-500">
																<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
																	<div>
																		<h2 className="text-xl sm:text-2xl font-bold text-white">매출 현황</h2>
																		<p className="text-cyan-100 text-sm mt-1">총 매출: ₩9,130,000 • +8.2%</p>
																	</div>
																	<button className="px-4 py-2 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all font-semibold flex items-center gap-2 shadow-lg text-sm w-full sm:w-auto justify-center">
																		<Download className="w-4 h-4" />
																		리포트
																	</button>
																</div>
															</div>
															<div className="overflow-x-auto">
																<Table className="min-w-[540px]">
																	<TableHeader>
																		<TableRow className="bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-slate-200">
																			<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm">
																				상품
																			</TableHead>
																			<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm hidden md:table-cell">
																				고객
																			</TableHead>
																			<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm">
																				금액
																			</TableHead>
																			<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm">
																				추이
																			</TableHead>
																			<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm hidden lg:table-cell">
																				날짜
																			</TableHead>
																		</TableRow>
																	</TableHeader>
																	<TableBody>
																		{sales.map((sale) => (
																			<TableRow
																				key={sale.id}
																				className="border-b border-slate-100 hover:bg-blue-50/50 transition-all group"
																			>
																				<TableCell className="py-2 px-2 sm:px-6">
																					<div>
																						<div className="font-semibold text-slate-900 text-sm">{sale.product}</div>
																						<div className="text-xs text-slate-500 md:hidden">{sale.customer}</div>
																					</div>
																				</TableCell>
																				<TableCell className="py-2 px-2 sm:px-6 text-slate-600 text-sm hidden md:table-cell">
																					{sale.customer}
																				</TableCell>
																				<TableCell className="py-2 px-2 sm:px-6">
																					<span className="text-base sm:text-default font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
																						₩{(sale.amount / 1000).toFixed(0)}K
																					</span>
																				</TableCell>
																				<TableCell className="py-2 px-2 sm:px-6">
																					<div className="flex items-center gap-1.5">
																						<div
																							className={`w-8 h-8 rounded-lg flex items-center justify-center ${
																								sale.trend === 'up' ? 'bg-emerald-100' : 'bg-rose-100'
																							}`}
																						>
																							{sale.trend === 'up' ? (
																								<TrendingUp className="w-4 h-4 text-emerald-600" />
																							) : (
																								<TrendingDown className="w-4 h-4 text-rose-600" />
																							)}
																						</div>
																						<span
																							className={`font-bold text-sm ${sale.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}
																						>
																							{sale.change}
																						</span>
																					</div>
																				</TableCell>
																				<TableCell className="py-2 px-2 sm:px-6 text-slate-600 text-sm hidden lg:table-cell">
																					{sale.date}
																				</TableCell>
																			</TableRow>
																		))}
																	</TableBody>
																</Table>
															</div>
														</div>
													)}

													{/* 테이블 3: 프로젝트 */}
													{activeTab === 'projects' && (
														<div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-200/50 border border-white/20 overflow-hidden">
															<div className="p-4 sm:p-6 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500">
																<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
																	<div>
																		<h2 className="text-xl sm:text-2xl font-bold text-white">프로젝트 현황</h2>
																		<p className="text-cyan-100 text-sm mt-1">5개 진행중 • 1개 완료</p>
																	</div>
																	<div className="flex gap-2">
																		<button className="px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold hover:bg-white/30 transition-all">
																			전체
																		</button>
																		<button className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold hover:bg-white/30 transition-all">
																			진행중
																		</button>
																		<button className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold hover:bg-white/30 transition-all">
																			완료
																		</button>
																	</div>
																</div>
															</div>
															<div className="overflow-x-auto">
																<Table className="min-w-[540px]">
																	<TableHeader>
																		<TableRow className="bg-gradient-to-r from-cyan-50 to-blue-50 border-b border-slate-200">
																			<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm">
																				프로젝트
																			</TableHead>
																			<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm hidden md:table-cell">
																				클라이언트
																			</TableHead>
																			<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm">
																				진행률
																			</TableHead>
																			<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm">
																				상태
																			</TableHead>
																			<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm hidden lg:table-cell">
																				팀원
																			</TableHead>
																		</TableRow>
																	</TableHeader>
																	<TableBody>
																		{projects.map((project) => (
																			<TableRow
																				key={project.id}
																				className="border-b border-slate-100 hover:bg-blue-50/50 transition-all group"
																			>
																				<TableCell className="py-2 px-2 sm:px-6">
																					<div>
																						<div className="font-semibold text-slate-900 text-sm">{project.name}</div>
																						<div className="text-xs text-slate-500 md:hidden">{project.client}</div>
																					</div>
																				</TableCell>
																				<TableCell className="py-2 px-2 sm:px-6 text-slate-600 text-sm hidden md:table-cell">
																					{project.client}
																				</TableCell>
																				<TableCell className="py-2 px-2 sm:px-6">
																					<div className="space-y-1.5 min-w-[80px] sm:min-w-[120px]">
																						<div className="flex items-center justify-between gap-2">
																							<div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
																								<div
																									className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 transition-all duration-500 rounded-full shadow-lg shadow-blue-500/30"
																									style={{ width: `${project.progress}%` }}
																								/>
																							</div>
																							<span className="text-xs font-bold text-slate-700 min-w-[2.5rem] text-right">
																								{project.progress}%
																							</span>
																						</div>
																					</div>
																				</TableCell>
																				<TableCell className="py-2 px-2 sm:px-6">
																					{getStatusBadge(project.status as TStatus)}
																				</TableCell>
																				<TableCell className="py-2 px-2 sm:px-6 hidden lg:table-cell">
																					<div className="flex items-center gap-2">
																						<div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
																							<User className="w-4 h-4 text-blue-600" />
																						</div>
																						<span className="text-slate-700 font-semibold text-sm">{project.team}</span>
																					</div>
																				</TableCell>
																			</TableRow>
																		))}
																	</TableBody>
																</Table>
															</div>
														</div>
													)}
												</div>
											</div>
											{/* 좀 더 디자인된 테이블 (END) */}
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
												{`import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	TableCaption,
	TableFooter,
	Badge,
} from '@/app/components/ui';

type TStatus = 'active' | 'inactive' | 'pending' | 'in-progress' | 'completed' | 'planning';
type TRole = 'Admin' | 'Manager' | 'User';

function SamplePage() {
	
	return (
		<div className=" bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-3 sm:p-4 lg:p-8">
			<div className="max-w-7xl mx-auto">
				{/* 탭 네비게이션 */}
				<div className="mb-6 overflow-x-auto">
					<div className="flex gap-2 min-w-max sm:min-w-0 border-b border-slate-200 pb-px">
						<button
							onClick={() => setActiveTab('users')}
							className={\`px-4 sm:px-6 py-3 font-medium transition-all flex items-center gap-2 whitespace-nowrap \${
								activeTab === 'users'
									? 'text-blue-600 border-b-2 border-blue-600 -mb-px'
									: 'text-slate-500 hover:text-blue-500'
							}\`}
						>
							<User className="w-4 h-4" />
							<span className="hidden sm:inline">사용자 관리</span>
							<span className="sm:hidden">사용자</span>
						</button>
						<button
							onClick={() => setActiveTab('sales')}
							className={\`px-4 sm:px-6 py-3 font-medium transition-all flex items-center gap-2 whitespace-nowrap \${
								activeTab === 'sales'
									? 'text-blue-600 border-b-2 border-blue-600 -mb-px'
									: 'text-slate-500 hover:text-blue-500'
							}\`}
						>
							<DollarSign className="w-4 h-4" />
							<span className="hidden sm:inline">매출 현황</span>
							<span className="sm:hidden">매출</span>
						</button>
						<button
							onClick={() => setActiveTab('projects')}
							className={\`px-4 sm:px-6 py-3 font-medium transition-all flex items-center gap-2 whitespace-nowrap \${
								activeTab === 'projects'
									? 'text-blue-600 border-b-2 border-blue-600 -mb-px'
									: 'text-slate-500 hover:text-blue-500'
							}\`}
						>
							<Calendar className="w-4 h-4" />
							<span className="hidden sm:inline">프로젝트</span>
							<span className="sm:hidden">프로젝트</span>
						</button>
					</div>
				</div>

				{/* 테이블 1: 사용자 관리 */}
				{activeTab === 'users' && (
					<div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-200/50 border border-white/20 overflow-hidden">
						<div className="p-4 sm:p-6 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600">
							<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
								<div>
									<h2 className="text-xl sm:text-2xl font-bold text-white">사용자 관리</h2>
									<p className="text-blue-100 text-sm mt-1">총 {users.length}명의 사용자</p>
								</div>
								<div className="flex gap-2 w-full sm:w-auto">
									<div className="relative flex-1 sm:flex-none">
										<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4 pointer-events-none z-10" />
										<input
											placeholder="검색..."
											className="w-full sm:w-48 pl-10 pr-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
										/>
									</div>
									<button className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all">
										<Filter className="w-4 h-4" />
									</button>
								</div>
							</div>
						</div>
						<div className="overflow-x-auto">
							<Table className="min-w-[540px]">
								<TableHeader>
									<TableRow className="bg-slate-50 border-b border-slate-200">
										<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm">
											이름
										</TableHead>
										<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm hidden lg:table-cell">
											이메일
										</TableHead>
										<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm">
											역할
										</TableHead>
										<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm">
											상태
										</TableHead>
										<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm hidden md:table-cell">
											가입일
										</TableHead>
										<TableHead className="text-right py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm">
											작업
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{users.map((user) => (
										<TableRow
											key={user.id}
											className="border-b border-slate-100 hover:bg-blue-50/50 transition-all group"
										>
											<TableCell className="py-2 px-2 sm:px-6">
												<div className="flex items-center gap-2 sm:gap-3">
													<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-semibold text-sm shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
														{user.name.charAt(0)}
													</div>
													<div className="min-w-0">
														<div className="font-semibold text-slate-900 text-sm truncate">
															{user.name}
														</div>
														<div className="text-xs text-slate-500 truncate lg:hidden">
															{user.email}
														</div>
													</div>
												</div>
											</TableCell>
											<TableCell className="py-2 px-2 sm:px-6 text-slate-600 text-sm hidden lg:table-cell">
												<div className="flex items-center gap-2">
													<Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
													<span className="truncate">{user.email}</span>
												</div>
											</TableCell>
											<TableCell className="py-2 px-2 sm:px-6">
												{getRoleBadge(user.role as TRole)}
											</TableCell>
											<TableCell className="py-2 px-2 sm:px-6">
												{getStatusBadge(user.status as TStatus)}
											</TableCell>
											<TableCell className="py-2 px-2 sm:px-6 text-slate-600 text-sm hidden md:table-cell">
												{user.joinDate}
											</TableCell>
											<TableCell className="py-2 px-2 sm:px-6 text-right">
												<button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
													<ChevronRight className="w-4 h-4" />
												</button>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</div>
				)}

				{/* 테이블 2: 매출 현황 */}
				{activeTab === 'sales' && (
					<div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-200/50 border border-white/20 overflow-hidden">
						<div className="p-4 sm:p-6 bg-gradient-to-br from-indigo-500 via-blue-500 to-indigo-500">
							<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
								<div>
									<h2 className="text-xl sm:text-2xl font-bold text-white">매출 현황</h2>
									<p className="text-cyan-100 text-sm mt-1">총 매출: ₩9,130,000 • +8.2%</p>
								</div>
								<button className="px-4 py-2 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all font-semibold flex items-center gap-2 shadow-lg text-sm w-full sm:w-auto justify-center">
									<Download className="w-4 h-4" />
									리포트
								</button>
							</div>
						</div>
						<div className="overflow-x-auto">
							<Table className="min-w-[540px]">
								<TableHeader>
									<TableRow className="bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-slate-200">
										<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm">
											상품
										</TableHead>
										<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm hidden md:table-cell">
											고객
										</TableHead>
										<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm">
											금액
										</TableHead>
										<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm">
											추이
										</TableHead>
										<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm hidden lg:table-cell">
											날짜
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{sales.map((sale) => (
										<TableRow
											key={sale.id}
											className="border-b border-slate-100 hover:bg-blue-50/50 transition-all group"
										>
											<TableCell className="py-2 px-2 sm:px-6">
												<div>
													<div className="font-semibold text-slate-900 text-sm">{sale.product}</div>
													<div className="text-xs text-slate-500 md:hidden">{sale.customer}</div>
												</div>
											</TableCell>
											<TableCell className="py-2 px-2 sm:px-6 text-slate-600 text-sm hidden md:table-cell">
												{sale.customer}
											</TableCell>
											<TableCell className="py-2 px-2 sm:px-6">
												<span className="text-base sm:text-default font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
													₩{(sale.amount / 1000).toFixed(0)}K
												</span>
											</TableCell>
											<TableCell className="py-2 px-2 sm:px-6">
												<div className="flex items-center gap-1.5">
													<div
														className={\`w-8 h-8 rounded-lg flex items-center justify-center \${
															sale.trend === 'up' ? 'bg-emerald-100' : 'bg-rose-100'
														}\`}
													>
														{sale.trend === 'up' ? (
															<TrendingUp className="w-4 h-4 text-emerald-600" />
														) : (
															<TrendingDown className="w-4 h-4 text-rose-600" />
														)}
													</div>
													<span
														className={\`font-bold text-sm \${sale.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}\`}
													>
														{sale.change}
													</span>
												</div>
											</TableCell>
											<TableCell className="py-2 px-2 sm:px-6 text-slate-600 text-sm hidden lg:table-cell">
												{sale.date}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</div>
				)}

				{/* 테이블 3: 프로젝트 */}
				{activeTab === 'projects' && (
					<div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-200/50 border border-white/20 overflow-hidden">
						<div className="p-4 sm:p-6 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500">
							<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
								<div>
									<h2 className="text-xl sm:text-2xl font-bold text-white">프로젝트 현황</h2>
									<p className="text-cyan-100 text-sm mt-1">5개 진행중 • 1개 완료</p>
								</div>
								<div className="flex gap-2">
									<button className="px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold hover:bg-white/30 transition-all">
										전체
									</button>
									<button className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold hover:bg-white/30 transition-all">
										진행중
									</button>
									<button className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold hover:bg-white/30 transition-all">
										완료
									</button>
								</div>
							</div>
						</div>
						<div className="overflow-x-auto">
							<Table className="min-w-[540px]">
								<TableHeader>
									<TableRow className="bg-gradient-to-r from-cyan-50 to-blue-50 border-b border-slate-200">
										<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm">
											프로젝트
										</TableHead>
										<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm hidden md:table-cell">
											클라이언트
										</TableHead>
										<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm">
											진행률
										</TableHead>
										<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm">
											상태
										</TableHead>
										<TableHead className="text-left py-3 px-3 sm:px-6 text-slate-700 font-semibold text-xs sm:text-sm hidden lg:table-cell">
											팀원
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{projects.map((project) => (
										<TableRow
											key={project.id}
											className="border-b border-slate-100 hover:bg-blue-50/50 transition-all group"
										>
											<TableCell className="py-2 px-2 sm:px-6">
												<div>
													<div className="font-semibold text-slate-900 text-sm">{project.name}</div>
													<div className="text-xs text-slate-500 md:hidden">{project.client}</div>
												</div>
											</TableCell>
											<TableCell className="py-2 px-2 sm:px-6 text-slate-600 text-sm hidden md:table-cell">
												{project.client}
											</TableCell>
											<TableCell className="py-2 px-2 sm:px-6">
												<div className="space-y-1.5 min-w-[80px] sm:min-w-[120px]">
													<div className="flex items-center justify-between gap-2">
														<div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
															<div
																className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 transition-all duration-500 rounded-full shadow-lg shadow-blue-500/30"
																style={{ width: \`\${project.progress}%\` }}
															/>
														</div>
														<span className="text-xs font-bold text-slate-700 min-w-[2.5rem] text-right">
															{project.progress}%
														</span>
													</div>
												</div>
											</TableCell>
											<TableCell className="py-2 px-2 sm:px-6">
												{getStatusBadge(project.status as TStatus)}
											</TableCell>
											<TableCell className="py-2 px-2 sm:px-6 hidden lg:table-cell">
												<div className="flex items-center gap-2">
													<div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
														<User className="w-4 h-4 text-blue-600" />
													</div>
													<span className="text-slate-700 font-semibold text-sm">{project.team}</span>
												</div>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}`}
											</UICodeBlock>
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value="data">
									<Card>
										<CardContent className="grid gap-6">
											<UICodeBlock
												language="js"
												filename="users, sales, projects"
											>
												{`// 사용자 데이터
const users = [
	{ id: 1, name: '김민준', email: 'minjun@example.com', role: 'Admin', status: 'active', joinDate: '2024-01-15' },
	{ id: 2, name: '이서연', email: 'seoyeon@example.com', role: 'User', status: 'active', joinDate: '2024-02-20' },
	{ id: 3, name: '박지훈', email: 'jihoon@example.com', role: 'Manager', status: 'inactive', joinDate: '2024-03-10' },
	{ id: 4, name: '최유나', email: 'yuna@example.com', role: 'User', status: 'active', joinDate: '2024-04-05' },
	{ id: 5, name: '정하늘', email: 'haneul@example.com', role: 'User', status: 'pending', joinDate: '2024-05-12' },
];

// 매출 데이터
const sales = [
	{
		id: 1,
		product: 'Premium Plan',
		amount: 1250000,
		customer: '테크 스타트업',
		date: '2024-11-01',
		trend: 'up',
		change: '+12%',
	},
	{
		id: 2,
		product: 'Basic Plan',
		amount: 350000,
		customer: '개인 사업자',
		date: '2024-11-03',
		trend: 'up',
		change: '+5%',
	},
	{
		id: 3,
		product: 'Enterprise Plan',
		amount: 5800000,
		customer: '대기업 A',
		date: '2024-11-05',
		trend: 'down',
		change: '-3%',
	},
	{
		id: 4,
		product: 'Premium Plan',
		amount: 1450000,
		customer: '중소기업 B',
		date: '2024-11-08',
		trend: 'up',
		change: '+18%',
	},
	{
		id: 5,
		product: 'Basic Plan',
		amount: 280000,
		customer: '프리랜서',
		date: '2024-11-10',
		trend: 'down',
		change: '-8%',
	},
];

// 프로젝트 데이터
const projects = [
	{
		id: 1,
		name: 'Website Redesign',
		client: '삼성전자',
		deadline: '2024-12-15',
		progress: 75,
		status: 'in-progress',
		team: 5,
	},
	{
		id: 2,
		name: 'Mobile App Dev',
		client: 'LG전자',
		deadline: '2024-11-30',
		progress: 90,
		status: 'in-progress',
		team: 8,
	},
	{
		id: 3,
		name: 'Brand Identity',
		client: '현대자동차',
		deadline: '2024-12-30',
		progress: 45,
		status: 'in-progress',
		team: 3,
	},
	{
		id: 4,
		name: 'E-commerce Platform',
		client: '쿠팡',
		deadline: '2024-10-20',
		progress: 100,
		status: 'completed',
		team: 12,
	},
	{
		id: 5,
		name: 'Marketing Campaign',
		client: '네이버',
		deadline: '2024-12-05',
		progress: 20,
		status: 'planning',
		team: 4,
	},
];

const getStatusBadge = (status: TStatus) => {
	const variants = {
		active: 'bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20',
		inactive: 'bg-gray-500/10 text-gray-600 ring-1 ring-gray-500/20',
		pending: 'bg-amber-500/10 text-amber-600 ring-1 ring-amber-500/20',
		'in-progress': 'bg-blue-500/10 text-blue-600 ring-1 ring-blue-500/20',
		completed: 'bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20',
		planning: 'bg-purple-500/10 text-purple-600 ring-1 ring-purple-500/20',
	};

	const labels = {
		active: '활성',
		inactive: '비활성',
		pending: '대기중',
		'in-progress': '진행중',
		completed: '완료',
		planning: '계획',
	};

	return <Badge className={variants[status]}>{labels[status]}</Badge>;
};

const getRoleBadge = (role: TRole) => {
	const variants = {
		Admin: 'bg-rose-500/10 text-rose-600 ring-1 ring-rose-500/20',
		Manager: 'bg-indigo-500/10 text-indigo-600 ring-1 ring-indigo-500/20',
		User: 'bg-sky-500/10 text-sky-600 ring-1 ring-sky-500/20',
	};

	return <Badge className={variants[role]}>{role}</Badge>;
};`}
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

TableUtilizationEx.displayName = 'TableUtilizationEx';
export default TableUtilizationEx;
