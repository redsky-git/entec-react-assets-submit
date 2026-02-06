import type { RouteObject } from 'react-router';

export type TAppRoute = RouteObject & {
	name?: string;
};

export interface IRouter {
	push(path: string, options?: object): void;
	setNaviInstance(nav: any): void;
	setLocationInstance(location: any): void;
	getLocation(): Location;
	goBack(): void;
}

export type TCustomRoute = RouteObject & {
	name?: string;
};
