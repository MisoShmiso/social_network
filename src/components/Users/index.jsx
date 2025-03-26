import React, { useEffect } from 'react';
import styles from './index.module.css';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../models/StoreContext';
import User from './User';
import { message } from 'antd';
const Users = observer(() => {
	const { usersStore } = useStore();

	useEffect(() => {
		usersStore.fetchUsers().catch((error) => {
			message.error('Failed to load users');
			console.error('Error in fetchUsers:', error);
		});
	}, [usersStore]);

	return (
		<div className={styles.root}>
			{usersStore.isLoadingState ? (
				<div>Loading users...</div>
			) : usersStore.errorMessage ? (
				<div>{usersStore.errorMessage}</div>
			) : (
				usersStore.getUsers().map((user, index) => (
					<User
						key={index}
						user={user}
					/>
				))
			)}
		</div>
	);
});

export default Users;
