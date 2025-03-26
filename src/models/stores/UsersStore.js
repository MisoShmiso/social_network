import { types, flow } from 'mobx-state-tree';
import User from '../entities/User';
import axios from 'axios';

const UsersStore = types
	.model('UsersStore', {
		users: types.frozen(),
		isLoading: types.optional(types.boolean, false),
		error: types.optional(types.string, ''),
	})

	.views((self) => ({
		getUsers() {
			return [...self.users];
		},

		getUserById(id) {
			return self.users.find((user) => user.id === id);
		},
		getLoadingState() {
			return self.isLoading;
		},

		getErrorMessage() {
			return self.error;
		},
	}))

	.actions((self) => ({
		fetchUsers: flow(function* () {
			self.isloading = true;
			self.error = '';
			try {
				const response = yield axios.get(
					'https://social-network.samuraijs.com/api/1.0/users'
				);
				const usersData = response.data.items;
				console.log(usersData);
				self.users = usersData;
			} catch (error) {
				self.error = 'Failed to fetch users: ' + error.message;
				console.error('Error fetching users:', error);
			} finally {
				self.isLoading = false;
			}
		}),
	}));

export default UsersStore;
