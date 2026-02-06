import type { IComponent } from '@/app/types/common';

import { Alert, alertVariants } from '@/app/components/shadcn/ui/alert';
import { type VariantProps } from 'class-variance-authority';

interface IAlertDefaultProps {
	//
}

const AlertDefault: IComponent<
	IAlertDefaultProps & React.ComponentProps<'div'> & VariantProps<typeof alertVariants>
> = ({ ...props }) => {
	return <Alert {...props} />;
};

AlertDefault.displayName = 'AlertDefault';
export default AlertDefault;
