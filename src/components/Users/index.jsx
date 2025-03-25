import React from 'react';
import styles from './index.module.css';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../models/StoreContext';
import User from './User';

const Users = observer(() => {
	const { usersStore } = useStore();
	return (
		<div className={styles.root}>
			{usersStore.getAll().map((user, index) => {
				return (
					<User
						key={index}
						user={user}
					/>
				);
			})}
		</div>
	);
});

export default Users;
