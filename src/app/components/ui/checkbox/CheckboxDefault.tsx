import type { IComponent } from '@/app/types/common';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Checkbox } from '@/app/components/shadcn/ui/checkbox';

interface ICheckboxDefaultProps {
	//
}

const CheckboxDefault: IComponent<ICheckboxDefaultProps & React.ComponentProps<typeof CheckboxPrimitive.Root>> = ({
	...props
}) => {
	return <Checkbox {...props} />;
};

CheckboxDefault.displayName = 'CheckboxDefault';
export default CheckboxDefault;
