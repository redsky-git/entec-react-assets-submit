import type { TAppRoute } from '@/app/types/router';

// main layout 가져오기 -----------
import LayoutMainIndex from '@/shared/components/layout/LayoutMainIndex';

// example router 가져오기 -------------
import ExampleRouter from '@/domains/example/router';
// main router 가져오기 ----------------
import MainRouter from '@/domains/main/router';

const routes: TAppRoute[] = [
	{
		path: '/',
		element: <LayoutMainIndex />,
		children: MainRouter,
	},
	{
		path: '/example',
		element: <LayoutMainIndex />,
		children: ExampleRouter,
	},
	{
		path: '*',
		element: (
			<LayoutMainIndex
				message="죄송합니다. 현재 시스템에 일시적인 문제가 발생했습니다."
				subMessage="잠시 후 다시 접속해주세요.
				           <br />
				           문제가 지속되면 아래 고객센터로 문의해주세요."
			/>
		),
	},
];

export default routes;
