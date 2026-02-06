import { setReducer } from '@/app/store/store-redux';

// 각 업무(domain) store를 가져와서
import exampleStore from '@/domains/example/store';

// APP Root store ------------------------
const appRootReducer = (): any => {
	return setReducer({
		appRootStore: {
			appActiveMenuState: { actionType: 'appRootStore/appActiveMenuState' },
			appRouteMeta: { actionType: 'appRootStore/appRouteMeta' },
			appMenuList: { actionType: 'appRootStore/appMenuList' },
			appLayout: { actionType: 'appRootStore/appLayout' },
		},
		// 가져온 업무 store를 아래쪽에 추가합니다.
		exampleStore,
	});
};

export default () => {
	return appRootReducer();
};
