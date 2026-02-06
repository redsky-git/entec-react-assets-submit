import { useEffect, useState, type JSX } from 'react';
import type { IComponent } from '@/app/types/common';
import { Spinner } from '@/app/components/ui';
import LayoutASideProvider from '@/shared/components/common/context/LayoutASideProvider';
// Redux Store 연결을 위한 import ------------------
import { Provider } from 'react-redux';
import reduxStore from '@/app/store/store-redux';

interface IAppProviderProps {
	children: any;
}

const AppProvider: IComponent<IAppProviderProps> = ({ children }): JSX.Element => {
	const [isInitialized, setIsInitialized] = useState(false);

	// APP 초기화 함수
	const initializeApp = () => {
		setIsInitialized(true);
	};

	useEffect(() => {
		initializeApp();
	}, []);

	if (!isInitialized) {
		return (
			<div>
				<Spinner className="size-8" />
			</div>
		);
	}

	return (
		<Provider store={reduxStore}>
			<LayoutASideProvider>{children}</LayoutASideProvider>
		</Provider>
	);
};

export default AppProvider;
