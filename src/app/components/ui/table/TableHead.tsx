import type { IComponent } from '@/app/types/common';

import { TableHead as TableHeadPrimitive } from '@/app/components/shadcn/ui/table';

interface ITableHeadProps {
	//
}

const TableHead: IComponent<ITableHeadProps & React.ComponentProps<'th'>> = ({ ...props }) => {
	return <TableHeadPrimitive {...props} />;
};

TableHead.displayName = 'TableHead';
export default TableHead;
