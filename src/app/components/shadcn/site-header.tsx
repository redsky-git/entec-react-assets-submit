import { SidebarIcon } from 'lucide-react';

import { SearchForm } from '@/app/components/shadcn/search-form';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/app/components/shadcn/ui/breadcrumb';
import { Button } from '@/app/components/shadcn/ui/button';
import { Separator } from '@/app/components/shadcn/ui/separator';
import { useSidebar } from '@/app/components/shadcn/ui/sidebar';
import { useEffect } from 'react';
import { useReduxState } from '@/app/hooks';

export function SiteHeader() {
	const { toggleSidebar } = useSidebar();
	const { data: activeMenu, setData: setActiveMenu } = useReduxState('appRootStore/appActiveMenuState');

	useEffect(() => {
		console.log('SiteHeader', location.hash);
		setActiveMenu(location.hash.replace(/#/g, ''));
	}, [location.hash]);

	return (
		<header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
			<div className="flex h-(--header-height) w-full items-center gap-2 px-4">
				<Button
					className="h-8 w-8"
					variant="ghost"
					size="icon"
					onClick={toggleSidebar}
				>
					<SidebarIcon />
				</Button>
				<Separator
					orientation="vertical"
					className="mr-2 h-4"
				/>
				<Breadcrumb className="hidden sm:block">
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="#">entec-react-assets example</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>{activeMenu.value}</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<SearchForm className="w-full sm:ml-auto sm:w-auto" />
			</div>
		</header>
	);
}
