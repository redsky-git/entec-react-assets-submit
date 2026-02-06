import type { IComponent } from '@/app/types/common';
import type { JSX } from 'react';
import { useEffect } from 'react';

import { Button } from '@/app/components/ui';

interface INotificationDialogProps {
	notifications: Array<{ id: number; message: string; time: string }>;
	onClose: () => void;
}

const NotificationDialog: IComponent<INotificationDialogProps> = ({ notifications, onClose }): JSX.Element => {
	// useEffect hooks
	useEffect(() => {
		// ...
	}, []);

	return (
		<>
			<div className="space-y-4">
				<div className="space-y-2 max-h-80 overflow-y-auto">
					{notifications.length === 0 ? (
						<p className="text-sm text-muted-foreground text-center py-8">알림이 없습니다</p>
					) : (
						notifications.map((notif) => (
							<div
								key={notif.id}
								className="p-3 border rounded-lg hover:bg-accent transition-colors"
							>
								<p className="text-sm">{notif.message}</p>
								<p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
							</div>
						))
					)}
				</div>

				<div className="flex justify-end">
					<Button onClick={onClose}>닫기</Button>
				</div>
			</div>
		</>
	);
};

NotificationDialog.displayName = 'NotificationDialog';
export default NotificationDialog;
