import type { IComponent } from '@/app/types/common';
import { type JSX } from 'react';
import { useEffect } from 'react';

import { Separator } from '@/app/components/shadcn/ui/separator';

import { Button } from '@/app/components/ui';

interface IRouterPushExPage01Props {
	test?: string;
}

const RouterPushExPage01: IComponent<IRouterPushExPage01Props> = (): JSX.Element => {
	const handlerGoBack = () => {
		$router.goBack();
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
							<h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
								$router.push() 이동 예제 화면 01
							</h1>
							<div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
								&nbsp;
							</div>
						</div>
						<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
							다음 버튼을 누르면 이전화면으로 다시 이동됩니다.
						</p>
					</div>
					<div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
						<Button onClick={handlerGoBack}>이전화면으로 다시 돌아가기</Button>
						<Separator className="my-6" />
					</div>
				</div>
			</div>
		</>
	);
};

RouterPushExPage01.displayName = 'RouterPushExPage01';
export default RouterPushExPage01;
