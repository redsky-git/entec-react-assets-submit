import type { IComponent } from '@/app/types/common';

interface ILayoutFooterProps {
	test?: string;
}

const LayoutFooter: IComponent<ILayoutFooterProps> = () => {
	return (
		<>
			<div className={`default-layout`}>LayoutFooter</div>
		</>
	);
};

LayoutFooter.displayName = 'LayoutFooter';
export default LayoutFooter;
