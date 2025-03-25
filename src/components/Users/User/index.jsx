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
					src={user.image}
				/>
			</div>
			<div>
				<span>{user.firstName}</span>
			</div>
			<div>
				<span>{user.lastName}</span>
			</div>
			<div>
				<span>{user.age}</span>
			</div>
			<div>
				<span>{user.location}</span>
			</div>
			<div>
				<span>{user.status}</span>
			</div>
		</div>
	);
};

export default User;
