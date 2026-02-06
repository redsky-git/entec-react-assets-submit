import { createRoot } from 'react-dom/client';
import AlertDialogDefault from './AlertDialogDefault';
import type { IAlertDialogOption } from '@/app/types/components';

export class AlertDialog {
	private container: HTMLDivElement | null = null;

	public open(option: IAlertDialogOption) {
		console.log(option);
		// Create container if it doesn't exist
		if (!this.container) {
			this.container = document.createElement('div');
			document.body.appendChild(this.container);
		}

		const root = createRoot(this.container);
		root.render(
			<AlertDialogDefault
				message={option.message as string}
				title={option.title}
			/>,
		);
	}
}

// $ui.alert() 으로 사용할 함수
export const alert = (message: string, option: IAlertDialogOption) => {
	const _inst = new AlertDialog();

	_inst.open({ message, title: option?.title });
};
