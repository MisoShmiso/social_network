import React from 'react';
import styles from './index.module.css';
import { Avatar } from 'antd';

const User = ({ user, index }) => {
	return (
		<div className={styles.root}>
			<div>
				<Avatar
					key={index}
					className={styles.avatar}
					size={95}
					src={user.photos.large}
				/>
			</div>
			<div>
				<span>{user.name}</span>
			</div>
			<div>
				<span>{user.id}</span>
			</div>
			<div>
				<span>{user.uniqueUrlName}</span>
			</div>
			<div>
				<span>{user.status}</span>
			</div>
		</div>
	);
};

export default User;
