import type { IComponent } from '@/app/types/common';

interface ILayoutErrorProps {
	message?: string;
	subMessage?: string;
}

const LayoutError: IComponent<ILayoutErrorProps> = () => {
	return (
		<>
			<div className={`default-layout`}>LayoutError</div>
		</>
	);
};

LayoutError.displayName = 'LayoutError';
export default LayoutError;
