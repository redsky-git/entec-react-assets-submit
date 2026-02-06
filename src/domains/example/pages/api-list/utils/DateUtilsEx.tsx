import type { IComponent } from '@/app/types/common';
import type { JSX } from 'react';
import { useEffect, useState } from 'react';

import { Alert, AlertDescription, AlertTitle } from '@/app/components/shadcn/ui/alert';
import { Button, Icon, Input } from '@/app/components/ui';
import { Card, CardContent } from '@/app/components/shadcn/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/shadcn/ui/tabs';
import { Separator } from '@/app/components/shadcn/ui/separator';

import UICodeBlock from '@/shared/components/common/ui/UICodeBlock';

interface IDateUtilsExProps {
	test?: string;
}

const DateUtilsEx: IComponent<IDateUtilsExProps> = (): JSX.Element => {
	const [toDateData] = useState<string>('20240115');
	const [toDateData2] = useState<string>('2024-01-15');
	const [toDateData3] = useState<string>('2024-01-15');
	const [resultData, setResultData] = useState<string>('');
	const [resultData2, setResultData2] = useState<string>('');
	const [resultData3, setResultData3] = useState<string>('');
	const handlerFormatDate = (valueType: string) => {
		if (valueType === '1') {
			setResultData($util.date.formatDate(toDateData, 'YYYY-MM-DD'));
		} else if (valueType === '2') {
			setResultData2($util.date.formatDate(toDateData2, 'YYYY.MM.DD'));
		} else if (valueType === '3') {
			setResultData3($util.date.formatDate(toDateData3, 'YYYY년 MM월 DD일'));
		}
	};

	// useEffect hooks
	useEffect(() => {
		//setResultData(toCamelCaseData);
	}, []);

	return (
		<>
			<div className="flex min-w-0 flex-1 flex-col">
				<div className="h-(--top-spacing) shrink-0" />
				<div className="mx-auto flex w-full  min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300">
					<div className="flex flex-col gap-2">
						<div className="flex items-start justify-between">
							<h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">$util.date</h1>
							<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
								&nbsp;
							</div>
						</div>
						<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
							<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
								$util
							</code>{' '}
							객체에 <strong>날짜</strong> 관련 유틸 함수만 모아놓은{' '}
							<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
								$util.date
							</code>
							예제입니다.
						</p>
					</div>
					<div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
						<Alert>
							<Icon name="AlertCircleIcon" />
							<AlertTitle>$util.date 객체 관련</AlertTitle>
							<AlertDescription>
								<ul className="list-inside list-disc text-sm">
									<li>
										<strong>$util.date</strong> 객체는 <strong>entec-react-assets</strong>에서 제공하는 전역 객체이므로
										$util.date.메서드() 를 사용하기 위하여 따로 <strong>import</strong>를 하지 않아도 됩니다.
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
									$util.date.formatDate()
								</h2>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								첫번째 매개변수로 받은 Date 값을 지정된 형식의 문자열로 변환합니다.
							</p>
							<UICodeBlock
								language="js"
								filename="사용 예시 코드"
							>{`$util.date.formatDate('2025-11-12', 'YYYY-MM-DD');`}</UICodeBlock>
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
											<div className="grid gap-2">
												<div className="py-0 flex items-center justify-between">
													<Input
														readOnly
														value={toDateData}
														className="w-1/4"
													/>
													<Icon name="ChevronsRight" />
													<Button onClick={() => handlerFormatDate('1')}>'YYYY-MM-DD' 포멧 변환</Button>
													<Icon name="ChevronsRight" />
													<Input
														readOnly
														value={resultData}
														className="w-1/4"
													/>
												</div>
												<div className="py-0 flex items-center justify-between">
													<Input
														readOnly
														value={toDateData2}
														className="w-1/4"
													/>
													<Icon name="ChevronsRight" />
													<Button onClick={() => handlerFormatDate('2')}>'YYYY.MM.DD' 포멧 변환</Button>
													<Icon name="ChevronsRight" />
													<Input
														readOnly
														value={resultData2}
														className="w-1/4"
													/>
												</div>
												<div className="py-0 flex items-center justify-between">
													<Input
														readOnly
														value={toDateData3}
														className="w-1/4"
													/>
													<Icon name="ChevronsRight" />
													<Button onClick={() => handlerFormatDate('3')}>'YYYY년 MM월 DD일' 포멧 변환</Button>
													<Icon name="ChevronsRight" />
													<Input
														readOnly
														value={resultData3}
														className="w-1/4"
													/>
												</div>
											</div>
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value="code">
									<UICodeBlock
										language="tsx"
										filename="SamplePage.tsx"
									>
										{`import { Button, Input, Icon } from '@/app/components/ui';
import { useState } from 'react';

function SamplePage() {
	const [toDateData] = useState<string>('20240115');
	const [toDateData2] = useState<string>('2024-01-15');
	const [toDateData3] = useState<string>('2024-01-15');
	const [resultData, setResultData] = useState<string>('');
	const [resultData2, setResultData2] = useState<string>('');
	const [resultData3, setResultData3] = useState<string>('');
	const handlerFormatDate = (valueType: string) => {
		if (valueType === '1') {
			setResultData($util.date.formatDate(toDateData, 'YYYY-MM-DD'));
		} else if (valueType === '2') {
			setResultData2($util.date.formatDate(toDateData2, 'YYYY.MM.DD'));
		} else if (valueType === '3') {
			setResultData3($util.date.formatDate(toDateData3, 'YYYY년 MM월 DD일'));
		}
	};

	return (
		<div className="grid gap-2">
			<div className="py-0 flex items-center justify-between">
				<Input
					readOnly
					value={toDateData}
					className="w-1/4"
				/>
				<Icon name="ChevronsRight" />
				<Button onClick={() => handlerFormatDate('1')}>'YYYY-MM-DD' 포멧 변환</Button>
				<Icon name="ChevronsRight" />
				<Input
					readOnly
					value={resultData}
					className="w-1/4"
				/>
			</div>
			<div className="py-0 flex items-center justify-between">
				<Input
					readOnly
					value={toDateData2}
					className="w-1/4"
				/>
				<Icon name="ChevronsRight" />
				<Button onClick={() => handlerFormatDate('2')}>'YYYY.MM.DD' 포멧 변환</Button>
				<Icon name="ChevronsRight" />
				<Input
					readOnly
					value={resultData2}
					className="w-1/4"
				/>
			</div>
			<div className="py-0 flex items-center justify-between">
				<Input
					readOnly
					value={toDateData3}
					className="w-1/4"
				/>
				<Icon name="ChevronsRight" />
				<Button onClick={() => handlerFormatDate('3')}>'YYYY년 MM월 DD일' 포멧 변환</Button>
				<Icon name="ChevronsRight" />
				<Input
					readOnly
					value={resultData3}
					className="w-1/4"
				/>
			</div>
		</div>
	);
}`}
									</UICodeBlock>
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

DateUtilsEx.displayName = 'DateUtilsEx';
export default DateUtilsEx;
