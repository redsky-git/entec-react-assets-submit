import type { IComponent } from '@/app/types/common';
import { RouterProvider } from 'react-router';
import router, { Router } from '@/app/router';
import Utils from '@/app/common/utils/app-utils';
import { setUIService } from '@/app/components/ui';
import { useReduxState } from '@/app/hooks';
import { useEffect } from 'react';

const App: IComponent = () => {
	window.$router = Router.getInstance();
	window.$util = Utils.getInstance();
	window.$ui = setUIService();

	const { setData: setActiveMenu } = useReduxState('appRootStore/appActiveMenuState');

	// App 최초 진입 시 hash값을 찾아서 좌측메뉴 active 값 전역에 넣기
	const setActive = () => {
		setActiveMenu(String(location.hash.replace(/#/g, '')));
	};

	useEffect(() => {
		setActive();
	}, []);

	return (
		<>
			{/* TODO: 추가 html 요소가 있으면 추가. */}
			<RouterProvider router={router} />
		</>
	);
};

export default App;
