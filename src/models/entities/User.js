import { types } from 'mobx-state-tree';

const User = types.model('User', {
	id: types.identifier,
	firstName: types.string,
	lastName: types.string,
	age: types.number,
	image: types.frozen(),
	location: types.string,
	status: types.string,
});

export default User;
