import type { IComponent } from '@/app/types/common';
import type { JSX } from 'react';
import { useEffect, useState } from 'react';

import { Alert, AlertDescription, AlertTitle } from '@/app/components/shadcn/ui/alert';
import { Button, Icon, Input } from '@/app/components/ui';
import { Card, CardContent } from '@/app/components/shadcn/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/shadcn/ui/tabs';
import { Separator } from '@/app/components/shadcn/ui/separator';

import UICodeBlock from '@/shared/components/common/ui/UICodeBlock';

interface IFormatUtilsExProps {
	test?: string;
}

const FormatUtilsEx: IComponent<IFormatUtilsExProps> = (): JSX.Element => {
	const [numData] = useState<string>('1234567');
	const [numData2] = useState<string>('1234.567');
	const [resultData, setResultData] = useState<string>('');
	const [resultData2, setResultData2] = useState<string>('');
	const handlerFormatNumber = (valueType: string) => {
		if (valueType === '1') {
			setResultData($util.format.number(numData));
		} else if (valueType === '2') {
			setResultData2($util.format.number(numData2, 2));
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
							<h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
								$util.format
							</h1>
							<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
								&nbsp;
							</div>
						</div>
						<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
							<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
								$util
							</code>{' '}
							객체에 <strong>포맷</strong> 관련 유틸 함수만 모아놓은{' '}
							<code className="bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none">
								$util.format
							</code>
							예제입니다.
						</p>
					</div>
					<div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
						<Alert>
							<Icon name="AlertCircleIcon" />
							<AlertTitle>$util.format 객체 관련</AlertTitle>
							<AlertDescription>
								<ul className="list-inside list-disc text-sm">
									<li>
										<strong>$util.format</strong> 객체는 <strong>entec-react-assets</strong>에서 제공하는 전역
										객체이므로 $util.format.메서드() 를 사용하기 위하여 따로 <strong>import</strong>를 하지 않아도
										됩니다.
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
									$util.format.number()
								</h2>
								<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
									&nbsp;
								</div>
							</div>
							<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
								첫번째 매개변수로 받은 숫자 값을 3자리 콤마 포맷이 적용되게 하고, 두번째 매개변수 설정값을 통해 소수점
								이하 자릿수를 설정합니다.
							</p>
							<UICodeBlock
								language="js"
								filename="사용 예시 코드"
							>{`$util.format.number(1234567); // '1,234,567'
$util.format.number(1234.567, 2) // "1,234.57"`}</UICodeBlock>
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
														value={numData}
														className="w-1/4"
													/>
													<Icon name="ChevronsRight" />
													<Button onClick={() => handlerFormatNumber('1')}>천 단위 콤마 포멧 변환</Button>
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
														value={numData2}
														className="w-1/4"
													/>
													<Icon name="ChevronsRight" />
													<Button onClick={() => handlerFormatNumber('2')}>소수점 이하 포멧 변환</Button>
													<Icon name="ChevronsRight" />
													<Input
														readOnly
														value={resultData2}
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
	const [numData] = useState<string>('1234567');
	const [numData2] = useState<string>('1234.567');
	const [resultData, setResultData] = useState<string>('');
	const [resultData2, setResultData2] = useState<string>('');
	const handlerFormatNumber = (valueType: string) => {
		if (valueType === '1') {
			setResultData($util.format.number(numData));
		} else if (valueType === '2') {
			setResultData2($util.format.number(numData2, 2));
		}
	};

	return (
		<div className="grid gap-2">
			<div className="py-0 flex items-center justify-between">
				<Input
					readOnly
					value={numData}
					className="w-1/4"
				/>
				<Icon name="ChevronsRight" />
				<Button onClick={() => handlerFormatNumber('1')}>천 단위 콤마 포멧 변환</Button>
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
					value={numData2}
					className="w-1/4"
				/>
				<Icon name="ChevronsRight" />
				<Button onClick={() => handlerFormatNumber('2')}>소수점 이하 포멧 변환</Button>
				<Icon name="ChevronsRight" />
				<Input
					readOnly
					value={resultData2}
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

FormatUtilsEx.displayName = 'FormatUtilsEx';
export default FormatUtilsEx;
