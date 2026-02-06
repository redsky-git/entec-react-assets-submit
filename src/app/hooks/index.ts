import type { IRootState } from '@/app/types/store/app-store-types';
import { useReduxAPI } from './store/use-store.ts';

// 업무 화면에서 API를 이용하는 커스텀 Hook. (상태관리 라이브러리가 달라져도 이 hook 하나로 사용하게 하기 위함)
export const useAPI = <ResponseType>(
	key: string,
): { data: IRootState<ResponseType>; fetch: (arg: object) => any; setData: any } => {
	return useReduxAPI(key);
};

export * from './store/use-store.ts';
export * from './components/use-ui.ts';
