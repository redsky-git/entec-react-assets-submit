import { createAppRouter } from './app-common-router.ts';
import routes from '@/shared/router';

const router = createAppRouter(routes, {
	basename: import.meta.env.VITE_ROUTER_BASENAME,
});

export * from './app-common-router.ts';
export default router;
