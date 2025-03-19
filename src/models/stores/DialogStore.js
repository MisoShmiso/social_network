import { types } from 'mobx-state-tree';
import Dialog from '../entities/Dialog';

const DialogStore = types
	.model('DialogStore', {
		dialogs: types.array(Dialog),
	})

	.views((self) => ({
		getSortedByDate() {
			return [...self.dialogs].sort((a, b) => b.updatedAt - a.updatedAt);
		},
		getDialogById(id) {
			return self.dialogs.find((dialog) => dialog.id === id);
		},
	}))

	.actions((self) => ({
		addDialog: ({ name, lastMessage, image }) => {
			const newDialog = {
				id: self.dialogs.length + 1,
				name,
				lastMessage,
				image,
				updatedAt: new Date(),
			};
			self.dialogs.push(newDialog);
		},

		updateLastMessage: (dialogId, message) => {
			const dialog = self.getDialogById(dialogId);
			if (dialog) {
				dialog.lastMessage = message;
				dialog.updatedAt = new Date();
			}
		},
	}));

export default DialogStore;
