import { types } from 'mobx-state-tree';
import User from '../entities/User';

const UsersStore = types
	.model('UsersStore', {
		users: types.array(User),
	})

	.views((self) => ({
		getAll() {
			return [...self.users];
		},

		getUserById(id) {
			return self.users.find((user) => user.id === id);
		},
	}))

	.actions((self) => ({
		// addPost: ({ title, author, description }) => {
		// 	const newPost = {
		// 		id: uuidv4(),
		// 		title,
		// 		author,
		// 		description,
		// 		likes: 0,
		// 		comments: [],
		// 		createdAt: new Date(),
		// 	};
		// 	self.posts.push(newPost);
		// },
		// addComment: (postId, { name, message }) => {
		// 	const post = self.getPostById(postId);
		// 	if (post) {
		// 		post.comments.push({
		// 			id: uuidv4(),
		// 			name,
		// 			message,
		// 			createdAt: new Date(),
		// 		});
		// 	}
		// },
		// incrementLikes: (postId) => {
		// 	const post = self.getPostById(postId);
		// 	if (post) {
		// 		post.likes += 1;
		// 	}
		// },
	}));

export default UsersStore;
