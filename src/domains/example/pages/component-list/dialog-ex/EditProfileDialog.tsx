import type { IComponent } from '@/app/types/common';
import type { JSX } from 'react';
import { useEffect } from 'react';

import { Button, Input } from '@/app/components/ui';

interface IEditProfileDialogProps {
	onClose: () => void;
}

const EditProfileDialog: IComponent<IEditProfileDialogProps> = ({ onClose }): JSX.Element => {
	// useEffect hooks
	useEffect(() => {
		// ...
	}, []);

	return (
		<>
			<div className="space-y-4">
				<div className="space-y-2 max-h-80 overflow-y-auto">
					<div className="grid gap-4">
						<div className="grid gap-3">
							<label htmlFor="name-1">Name</label>
							<Input
								id="name-1"
								name="name"
								defaultValue="홍길동"
							/>
						</div>
						<div className="grid gap-3">
							<label htmlFor="username-1">Username</label>
							<Input
								id="username-1"
								name="username"
								defaultValue="@hong"
							/>
						</div>
					</div>
				</div>

				<div className="flex justify-end">
					<Button onClick={onClose}>닫기</Button>
				</div>
			</div>
		</>
	);
};

EditProfileDialog.displayName = 'EditProfileDialog';
export default EditProfileDialog;
