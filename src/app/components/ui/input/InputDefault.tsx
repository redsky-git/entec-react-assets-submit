import type { IComponent } from '@/app/types/common';

import { Input } from '@/app/components/shadcn/ui/input';

interface IInputDefaultProps {
	className?: string;
}

const InputDefault: IComponent<IInputDefaultProps & React.ComponentProps<'input'>> = ({ className = '', ...props }) => {
	return (
		<Input
			className={className}
			{...props}
		/>
	);
};

InputDefault.displayName = 'InputDefault';
export default InputDefault;
