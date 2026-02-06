import type { IComponent } from '@/app/types/common';

interface ILayoutLnbProps {
	test?: string;
}

const LayoutLnb: IComponent<ILayoutLnbProps> = () => {
	return (
		<>
			<div className={`default-layout`}>LayoutLnb</div>
		</>
	);
};

LayoutLnb.displayName = 'LayoutLnb';
export default LayoutLnb;
