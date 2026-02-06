import { sliceInstance, recursionData, reduxStore } from '@/app/store/store-redux';
import type { IRootState } from '@/app/types/store/app-store-types';
import { useSelector } from 'react-redux';

// 업무 화면에서 API를 이용하여 redux에 저장하는 커스텀 Hook.
export const useReduxAPI = <ResponseType>(
	key: string,
): { data: IRootState<ResponseType>; fetch: (arg: object) => any; setData: any } => {
	const inst = sliceInstance();
	const selectSlice = (inst.sliceList as any)[key];
	const actionCreator = inst.getAsyncThunk(key);
	const keyArr = (key as string).split('/');
	const data = useSelector((state) => {
		return recursionData(state, keyArr, 0) as IRootState<ResponseType>;
	});
	const fetch = (arg: object) => {
		return reduxStore.dispatch(actionCreator(arg));
	};

	return {
		data,
		fetch,
		setData: (data: any) => {
			reduxStore.dispatch(selectSlice.actions.setData(data));
		},
	};
};

// 업무 화면에서 일반 Redux State를 이용하는 커스텀 Hook.
export const useReduxState = <DataType = any>(
	key: string,
): { data: IRootState<DataType>; setData: (arg: any) => any } => {
	const inst = sliceInstance();
	const actionCreator = inst.getAsyncThunk(key);
	const keyArr = (key as string).split('/');
	const data = useSelector((state) => {
		return recursionData(state, keyArr, 0) as IRootState<DataType>;
	});
	const setData = (arg: any) => {
		return reduxStore.dispatch(actionCreator(arg));
	};

	return { data, setData };
};
