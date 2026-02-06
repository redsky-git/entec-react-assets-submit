import type { IComponent } from '@/app/types/common';
//import loadable from '@loadable/component';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

import { NAV_DATA } from '@/shared/constants/nav-data';

import { AppSidebar } from '@/app/components/shadcn/app-sidebar';
import { SiteHeader } from '@/app/components/shadcn/site-header';
import { SidebarInset, SidebarProvider } from '@/app/components/shadcn/ui/sidebar';

import LayoutASide from './LayoutASide';
import { useHeadings } from '@/app/hooks/layout/use-headings';

//const Header = loadable(() => import('@/shared/components/layout/LayoutHeader'));
//const Footer = loadable(() => import('@/shared/components/layout/LayoutFooter'));
//const Lnb = loadable(() => import('@/shared/components/layout/LayoutLnb'));
//const ErrorComponents = loadable(() => import('@/shared/components/layout/LayoutError'));

interface ILayoutMainIndexProps {
	message?: string;
	subMessage?: string;
	//isHeader?: boolean;
	//isSidebar?: boolean;
	//isLNB?: boolean;
	//isFooter?: boolean;
}

const LayoutMainIndex: IComponent<ILayoutMainIndexProps> = ({
	message = '',
	subMessage = '',
	//isHeader = true,
	//isSidebar = false,
	//isLNB = false,
	//isFooter = true,
}) => {
	const navigate = useNavigate();
	const location = useLocation();
	$router.setNaviInstance(navigate);
	$router.setLocationInstance(location);
	// 우측 On this Page 바로가기 데이터 세팅을 위한 호출.
	useHeadings();
	const [asidebarOpen, setAsidebarOpen] = useState<boolean>(true);
	// Sidebar 상태를 제어하기 위한 state
	const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

	//const [showHeader, setShowHeader] = useState<boolean>(isHeader);
	//const [showSidebar, setShowSidebar] = useState<boolean>(isSidebar);
	//const [showLNB, setShowLNB] = useState<boolean>(isLNB);
	//const [showFooter, setShowFooter] = useState<boolean>(isFooter);

	const [navData] = useState<any[]>(NAV_DATA);

	// 특정 경로에서 sidebar 상태를 변경하는 로직
	useEffect(() => {
		// 예시: 특정 경로에서 sidebar를 자동으로 닫거나 열기
		// 여기에 원하는 경로 패턴을 추가하세요
		const pathsToCollapse = [
			'/',
			// 추가로 sidebar를 닫고 싶은 경로를 여기에 추가
		];

		//const pathsToExpand = [
		//	'/example',
		//	// 추가로 sidebar를 열고 싶은 경로를 여기에 추가
		//];

		const currentPath = location.pathname;

		// 경로가 pathsToCollapse에 포함되어 있으면 sidebar 닫기
		if (pathsToCollapse.some((path) => currentPath === path)) {
			setSidebarOpen(false);
			setAsidebarOpen(false);
		}
		// 경로가 pathsToExpand에 포함되어 있으면 sidebar 열기
		else {
			setSidebarOpen(true);
			setAsidebarOpen(true);
		}
		//else if (pathsToExpand.some((path) => currentPath.includes(path))) {
		//	setSidebarOpen(true);
		//}
		// 기본값 설정 (필요한 경우)
		// else {
		//   setSidebarOpen(true);
		// }
	}, [location.pathname]);

	//useEffect(() => {
	//	//setShowHeader(true);
	//	//setShowSidebar(false);
	//	//setShowLNB(true);
	//	//setShowFooter(true);
	//}, [location.hash]);

	//const headings = [
	//	{ id: 'introduction', text: 'Introduction', level: 2 },
	//	{ id: 'getting-started', text: 'Getting Started', level: 2 },
	//	{ id: 'installation', text: 'Installation', level: 3 },
	//	{ id: 'configuration', text: 'Configuration', level: 3 },
	//	{ id: 'features', text: 'Features', level: 2 },
	//	{ id: 'responsive-design', text: 'Responsive Design', level: 3 },
	//	{ id: 'theming', text: 'Theming', level: 3 },
	//	{ id: 'api-reference', text: 'API Reference', level: 2 },
	//];

	return (
		<>
			<div className="[--header-height:calc(--spacing(14))]">
				<SidebarProvider
					className="flex flex-col"
					open={sidebarOpen}
					onOpenChange={setSidebarOpen}
				>
					<SiteHeader />
					<div className="flex flex-1">
						<AppSidebar navData={navData} />
						<SidebarInset>
							<div className="flex">
								<div className=" flex-1 flex-col gap-4 p-6">
									{/*<div className="grid auto-rows-min gap-4 md:grid-cols-3">
									<div className="bg-muted/50 aspect-video rounded-xl" />
									<div className="bg-muted/50 aspect-video rounded-xl" />
									<div className="bg-muted/50 aspect-video rounded-xl" />
								</div>*/}
									{/* entec-react-assets-contents 클래스를 이용해서 내부 컨텐츠의 h2, h3 태그 찾는 aside 화면 로직 때문에 추가 */}
									<div className="entec-react-assets-contents min-h-[100vh] flex-1 rounded-xl md:min-h-min">
										{message ? (
											`${message} ${subMessage}`
										) : (
											//<ErrorComponents
											//	message={message}
											//	subMessage={subMessage}
											///>
											<Outlet />
										)}
									</div>
								</div>
								{asidebarOpen ? <LayoutASide /> : null}
							</div>
						</SidebarInset>
					</div>
				</SidebarProvider>
			</div>
		</>
	);
};

LayoutMainIndex.displayName = 'LayoutMainIndex';
export default LayoutMainIndex;
