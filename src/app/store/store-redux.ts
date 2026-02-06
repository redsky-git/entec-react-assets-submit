import { configureStore, combineReducers, type Reducer } from '@reduxjs/toolkit';
import GenerateSlice from './store-redux-slice'; // class의 위치가 generatedStore보다 위에서 import해야한다.
import generatedStore from '@/shared/store/app-store-redux';
import type { IActionObject } from '@/app/types/store';

// redux store를 생성하기 위하여 넘겨준 object를 reducer 객체로 생성하여 리턴하는 함수
export function setReducer(obj: any) {
	const returnReducerObj: any = {};
	// 각 도메인(서비스) 상태트리명 loop
	for (const [key, value] of Object.entries(obj)) {
		if (value && value.constructor === Object) {
			const reducerObj: any = {};
			// 도메인(서비스)에 연결된 각각의 이하 state명 loop
			for (const [key2, value2] of Object.entries(value)) {
				const valueObj = value2 as IActionObject;
				if (value2 && value2.constructor === Object) {
					if (valueObj.type && valueObj.type === 'sync') {
						// API호출이 아닌 State 저장 로직
						reducerObj[key2] = reducerHelper(valueObj.actionType, `${key}/${key2}`);
					} else {
						if (valueObj.url) {
							// API를 호출하는 State 저장
							reducerObj[key2] = reducerHelper(valueObj.actionType, `${key}/${key2}`, valueObj.url);
						} else {
							// API호출이 아닌 State 저장 로직
							reducerObj[key2] = reducerHelper(valueObj.actionType, `${key}/${key2}`);
						}
					}
				} else {
					reducerObj[key2] = value2;
				}
			}
			returnReducerObj[key] = combineReducers(reducerObj);
		}
	}
	return returnReducerObj;
}

export function sliceInstance(): GenerateSlice {
	return GenerateSlice.getInstance();
}

// redux reducer를 만들 때 slice 생성을 도와주는 함수
export function reducerHelper<RequestType, ResponseType>(key: string, stateTree: string, url?: string): Reducer {
	const sliceInst = sliceInstance();
	if (url) {
		return sliceInst.getReducer<RequestType, ResponseType>(key, stateTree, url);
	} else {
		return sliceInst.getReducer<RequestType, ResponseType>(key, stateTree);
	}
}

// Store의 State 트리를 재귀로 찾는 함수
export const recursionData = <ResponseType = any>(data: any, key: string[], index: number): any => {
	if (!key[index]) {
		return data as ResponseType;
	} else {
		const selectData = data[key[index]];
		if (selectData) {
			return recursionData<ResponseType>(selectData, key, index + 1);
		} else if (index === 0) {
			console.error(
				`[ERROR] : Store에 (${key[index]}) ActionType설정이 잘못 되었거나, State가 생성 되어 있지 않습니다.`,
			);
			return false;
		} else {
			return selectData as ResponseType;
		}
	}
};

// 전역 redux store 생성 --------------------------
export const reduxStore = configureStore({
	reducer: generatedStore(),
});

export default reduxStore;
