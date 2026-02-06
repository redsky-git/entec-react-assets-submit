import type { IComponent } from '@/app/types/common';

import { Table } from '@/app/components/shadcn/ui/table';

interface ITableDefaultProps {
	//
}

const TableDefault: IComponent<ITableDefaultProps & React.ComponentProps<'table'>> = ({ ...props }) => {
	return <Table {...props} />;
};

TableDefault.displayName = 'TableDefault';
export default TableDefault;
