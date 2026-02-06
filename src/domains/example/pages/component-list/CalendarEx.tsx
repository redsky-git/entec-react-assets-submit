import type { IComponent } from '@/app/types/common';
import { useState, type JSX } from 'react';
import { useEffect } from 'react';

import { Card, CardContent } from '@/app/components/shadcn/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/shadcn/ui/tabs';
import { Separator } from '@/app/components/shadcn/ui/separator';

import UICodeBlock from '@/shared/components/common/ui/UICodeBlock';

import { Calendar, type DateRange } from '@/app/components/ui';

interface ICalendarExProps {
	test?: string;
}

const CalendarEx: IComponent<ICalendarExProps> = (): JSX.Element => {
	const [date, setDate] = useState<Date | undefined>(new Date());

	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: new Date(2025, 5, 12),
		to: new Date(2025, 6, 15),
	});
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
							<h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">Calendar</h1>
							<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
								&nbsp;
							</div>
						</div>
						<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
							<strong>Calendar</strong> 컴포넌트는 사용자가 날짜를 입력하고 편집할 수 있는 달력 컴포넌트입니다.
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
									Basic Calendar
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
											<Calendar
												mode="single"
												selected={date}
												onSelect={setDate}
												className="rounded-md border shadow-sm"
												captionLayout="dropdown"
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
												{`import { Calendar } from '@/app/components/ui';

function SamplePage() {
	const [date, setDate] = useState<Date | undefined>(new Date());

	return (
		<div>
			<Calendar
				mode="single"
				selected={date}
				onSelect={setDate}
				className="rounded-md border shadow-sm"
				captionLayout="dropdown"
			/>
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
									Range Calendar
								</h3>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								<strong>Calendar</strong> 컴포넌트의{' '}
								<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
									mode="range"
								</code>{' '}
								속성을 사용하여 날짜의 범위를 선택할 수 있게 적용합니다.
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
											<Calendar
												mode="range"
												defaultMonth={dateRange?.from}
												selected={dateRange}
												onSelect={setDateRange}
												numberOfMonths={2}
												className="rounded-lg border shadow-sm"
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
												{`import { Calendar, type DateRange } from '@/app/components/ui';

function SamplePage() {
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: new Date(2025, 5, 12),
		to: new Date(2025, 6, 15),
	});

	return (
		<Calendar
			mode="range"
			defaultMonth={dateRange?.from}
			selected={dateRange}
			onSelect={setDateRange}
			numberOfMonths={2}
			className="rounded-lg border shadow-sm"
		/>
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

CalendarEx.displayName = 'CalendarEx';
export default CalendarEx;
