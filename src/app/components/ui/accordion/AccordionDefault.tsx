import type { IComponent } from '@/app/types/common';

import { Accordion } from '@/app/components/shadcn/ui/accordion';
import type { AccordionSingleProps, AccordionMultipleProps } from '@radix-ui/react-accordion';
import { AccordionProvider } from './AccordionContext';
import { type IconName } from '@/app/components/ui/icon/registry-icon';

interface IAccordionDefaultProps {
	disableAnimation?: boolean;
	expandIcon?: IconName;
}

const AccordionDefault: IComponent<
	IAccordionDefaultProps & (AccordionSingleProps | AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>
> = ({ disableAnimation = false, expandIcon, ...props }) => {
	return (
		<AccordionProvider value={{ disableAnimation, expandIcon }}>
			<Accordion {...props} />
		</AccordionProvider>
	);
};

AccordionDefault.displayName = 'AccordionDefault';
export default AccordionDefault;
