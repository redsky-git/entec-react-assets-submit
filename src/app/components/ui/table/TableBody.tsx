import type { IComponent } from '@/app/types/common';

import { TableBody as TableBodyPrimitive } from '@/app/components/shadcn/ui/table';

interface ITableBodyProps {
	//
}

const TableBody: IComponent<ITableBodyProps & React.ComponentProps<'tbody'>> = ({ ...props }) => {
	return <TableBodyPrimitive {...props} />;
};

TableBody.displayName = 'TableBody';
export default TableBody;
