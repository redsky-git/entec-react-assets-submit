export type TUrl = (typeof url)[keyof typeof url];

const url = {
	POSTS: '/posts',
	SEARCH: '/api/v1/search',
} as const;

export default url;
