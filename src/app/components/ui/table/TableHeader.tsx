import type { IComponent } from '@/app/types/common';

import { TableHeader as TableHeaderPrimitive } from '@/app/components/shadcn/ui/table';

interface ITableHeaderProps {
	//
}

const TableHeader: IComponent<ITableHeaderProps & React.ComponentProps<'thead'>> = ({ ...props }) => {
	return <TableHeaderPrimitive {...props} />;
};

TableHeader.displayName = 'TableHeader';
export default TableHeader;
