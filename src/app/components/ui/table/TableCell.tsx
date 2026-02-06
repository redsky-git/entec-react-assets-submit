import type { IComponent } from '@/app/types/common';

import { TableCell as TableCellPrimitive } from '@/app/components/shadcn/ui/table';

interface ITableCellProps {
	//
}

const TableCell: IComponent<ITableCellProps & React.ComponentProps<'td'>> = ({ ...props }) => {
	return <TableCellPrimitive {...props} />;
};

TableCell.displayName = 'TableCell';
export default TableCell;
