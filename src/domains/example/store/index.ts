import type { IActionObject, IRootState } from '@/app/types/store';
import url from '@/domains/example/api/url';

export interface IExampleStore<T = IRootState> {
	dummy: T;
	posts: T;
	search: T;
}

// Example Action 객체 ==============================================
// 생성할 Store state의 이름을 정하고, 값으로 actionType과 url을 입력한다.
// API호출이 아닌 경우에는 url을 입력 하지 않아도 된다.
// actionType은 전역 store에 연결한 이름을 '/'로 합쳐서 생성한다.
const exampleAction: IExampleStore<IActionObject> = {
	dummy: { actionType: 'exampleStore/dummy' },
	posts: { actionType: 'exampleStore/posts', url: url.POSTS },
	search: { actionType: 'exampleStore/search', url: url.SEARCH },
} as const;

export default exampleAction;
