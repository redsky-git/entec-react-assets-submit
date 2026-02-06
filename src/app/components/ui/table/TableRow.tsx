import type { IComponent } from '@/app/types/common';

import { TableRow as TableRowPrimitive } from '@/app/components/shadcn/ui/table';

interface ITableRowProps {
	//
}

const TableRow: IComponent<ITableRowProps & React.ComponentProps<'tr'>> = ({ ...props }) => {
	return <TableRowPrimitive {...props} />;
};

TableRow.displayName = 'TableRow';
export default TableRow;
