import { types } from 'mobx-state-tree';

const Message = types.model('Message', {
	id: types.number,
	dialogId: types.number,
	author: types.string,
	description: types.string,
	createdAt: types.Date,
	updatedAt: types.maybe(types.Date),
});

export default Message;
