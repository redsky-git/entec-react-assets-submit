import type { TAppRoute } from '@/app/types/router';
import loadable from '@loadable/component';

// main 도메인 업무 페이지 가져오기
const MainIndex = loadable(() => import('@/domains/main/pages/MainIndex'));

const routes: TAppRoute[] = [
	{
		path: '/',
		element: <MainIndex />,
		name: 'MainIndex',
	},
];

export default routes;
