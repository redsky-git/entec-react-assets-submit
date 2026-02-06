import type { IComponent } from '@/app/types/common';

import { Calendar } from '@/app/components/shadcn/ui/calendar';
import { Button } from '@/app/components/ui';
import { DayPicker } from 'react-day-picker';

export type { DateRange } from 'react-day-picker';

interface ICalendarDefaultProps {
	//
}

const CalendarDefault: IComponent<
	ICalendarDefaultProps &
		React.ComponentProps<typeof DayPicker> & {
			buttonVariant?: React.ComponentProps<typeof Button>['variant'];
		}
> = ({ ...props }) => {
	return <Calendar {...props} />;
};

CalendarDefault.displayName = 'CalendarDefault';
export default CalendarDefault;
