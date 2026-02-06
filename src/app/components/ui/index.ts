import { alert } from '@/app/components/ui/alert-dialog/alert-dialog.tsx';
import { dialog } from '@/app/components/ui/dialog/dialog-service.tsx';
import type { TDialog } from '@/app/types/components';
import { confirm } from '@/app/components/ui/confirm-dialog/confirm-dialog.tsx';

export { default as Accordion } from './accordion/AccordionDefault.tsx';
export { default as AccordionContent } from './accordion/AccordionContent.tsx';
export { default as AccordionItem } from './accordion/AccordionItem.tsx';
export { default as AccordionTrigger } from './accordion/AccordionTrigger.tsx';
export { default as Alert } from './alert/AlertDefault.tsx';
export { default as AlertTitle } from './alert/AlertTitle.tsx';
export { default as AlertDescription } from './alert/AlertDescription.tsx';
export { default as Badge } from './badge/BadgeDefault.tsx';
export { default as Button } from './button/ButtonDefault.tsx';
export { default as Calendar } from './calendar/CalendarDefault.tsx';
export { default as Checkbox } from './checkbox/CheckboxDefault.tsx';
export type { DateRange } from './calendar/CalendarDefault.tsx';
export { default as Icon } from './icon/IconDefault.tsx';
export { default as Input } from './input/InputDefault.tsx';
export { default as Select } from './select/SelectDefault.tsx';
export { default as Spinner } from './spinner/SpinnerDefault.tsx';
export { default as Table } from './table/TableDefault.tsx';
export { default as TableBody } from './table/TableBody.tsx';
export { default as TableCaption } from './table/TableCaption.tsx';
export { default as TableCell } from './table/TableCell.tsx';
export { default as TableFooter } from './table/TableFooter.tsx';
export { default as TableHead } from './table/TableHead.tsx';
export { default as TableHeader } from './table/TableHeader.tsx';
export { default as TableRow } from './table/TableRow.tsx';

export function setUIService() {
	const ui = {
		alert: alert as any, //TAlert,
		confirm: confirm as any, // TConfirm,
		dialog: dialog as TDialog,
	};
	return ui;
}
