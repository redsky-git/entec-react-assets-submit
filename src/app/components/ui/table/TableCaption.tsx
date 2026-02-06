import type { IComponent } from '@/app/types/common';

import { TableCaption as TableCaptionPrimitive } from '@/app/components/shadcn/ui/table';

interface ITableCaptionProps {
	//
}

const TableCaption: IComponent<ITableCaptionProps & React.ComponentProps<'caption'>> = ({ ...props }) => {
	return <TableCaptionPrimitive {...props} />;
};

TableCaption.displayName = 'TableCaption';
export default TableCaption;
