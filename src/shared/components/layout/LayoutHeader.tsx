import type { IComponent } from '@/app/types/common';

interface ILayoutHeaderProps {
	test?: string;
}

const LayoutHeader: IComponent<ILayoutHeaderProps> = () => {
	return (
		<>
			<div className={`default-layout`}>LayoutHeader</div>
		</>
	);
};

LayoutHeader.displayName = 'LayoutHeader';
export default LayoutHeader;
