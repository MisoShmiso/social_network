import { types } from 'mobx-state-tree';

const Photos = types.model('Photos', {
	small: types.maybeNull(types.string),
	large: types.maybeNull(types.string),
});

const User = types.model('User', {
	id: types.identifier,
	name: types.string,
	photos: Photos,
	status: types.maybeNull(types.string),
	followed: types.boolean,
	uniqueUrlName: types.string,
});

export default User;
