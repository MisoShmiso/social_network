import { types } from 'mobx-state-tree';

const Comment = types.model('Comment', {
    id: types.identifier,
    name: types.string,
    message: types.string,
    createdAt: types.Date,
});

export default Comment;
