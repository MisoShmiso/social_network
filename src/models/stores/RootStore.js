import { types } from 'mobx-state-tree';
import PostStore from './PostStore';
import DialogStore from './DialogStore';
import MessagesStore from './MessagesStore';

const RootStore = types.model('RootStore', {
	postStore: types.optional(PostStore, { posts: [] }),
	dialogStore: types.optional(DialogStore, { dialogs: [] }),
	messagesStore: types.optional(MessagesStore, { messages: [] }),
});

export default RootStore;
