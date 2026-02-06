import type { IComponent } from '@/app/types/common';
import { useEffect, useState } from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/app/components/shadcn/ui/select';

interface ISelectData {
	value: string;
	label: string;
}

interface ISelectDefaultProps {
	data: ISelectData[];
	placeholder?: string;
	label?: string;
}

const SelectDefault: IComponent<ISelectDefaultProps & React.ComponentProps<typeof SelectPrimitive.Root>> = ({
	data,
	placeholder = '',
	label = '',
	...props
}) => {
	const [selectData, setSelectData] = useState<ISelectData[]>();

	useEffect(() => {
		if (data) {
			setSelectData(data);
		}
	}, []);

	return (
		<>
			<Select {...props}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{label !== '' ? <SelectLabel>{label}</SelectLabel> : null}
						{selectData?.map((data, index) => (
							<SelectItem
								key={index}
								value={data.value}
							>
								{data.label}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</>
	);
};

SelectDefault.displayName = 'SelectDefault';
export default SelectDefault;
