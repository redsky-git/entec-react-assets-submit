import { createRoot } from 'react-dom/client';
import ConfirmDialogDefault from './ConfirmDialogDefault';
import type { IAlertDialogOption } from '@/app/types/components';

export class ConfirmDialog {
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
			<ConfirmDialogDefault
				message={option.message as string}
				title={option.title}
			/>,
		);
	}
}

// $ui.confirm() 으로 사용할 함수
export const confirm = (message: string, option: IAlertDialogOption) => {
	const _inst = new ConfirmDialog();

	_inst.open({ message, title: option?.title });
};
