import type { IComponent } from '@/app/types/common';

import { Badge, badgeVariants } from '@/app/components/shadcn/ui/badge';
import { type VariantProps } from 'class-variance-authority';

interface IBadgeDefaultProps {
	//
}

const BadgeDefault: IComponent<
	IBadgeDefaultProps & React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }
> = ({ ...props }) => {
	return <Badge {...props} />;
};

BadgeDefault.displayName = 'BadgeDefault';
export default BadgeDefault;
