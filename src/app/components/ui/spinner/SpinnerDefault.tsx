import type { IComponent } from '@/app/types/common';

import { Spinner } from '@/app/components/shadcn/ui/spinner';
//import { type VariantProps } from 'class-variance-authority';

interface ISpinnerDefaultProps extends React.ComponentProps<'svg'> {
	className?: string;
}

const SpinnerDefault: IComponent<ISpinnerDefaultProps> = ({ ...props }): React.ReactNode | any => {
	return (
		//<div className="flex min-h-screen items-center justify-center">
		<div className="flex items-center justify-center">
			<Spinner {...props} />
		</div>
	);
};

SpinnerDefault.displayName = 'SpinnerDefault';
export default SpinnerDefault;
