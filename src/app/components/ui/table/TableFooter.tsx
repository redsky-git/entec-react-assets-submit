import type { IComponent } from '@/app/types/common';

import { TableFooter as TableFooterPrimitive } from '@/app/components/shadcn/ui/table';

interface ITableFooterProps {
	//
}

const TableFooter: IComponent<ITableFooterProps & React.ComponentProps<'tfoot'>> = ({ ...props }) => {
	return <TableFooterPrimitive {...props} />;
};

TableFooter.displayName = 'TableFooter';
export default TableFooter;
