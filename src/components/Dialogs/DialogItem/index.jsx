import React from 'react';
import styles from './index.module.css';
import { NavLink } from 'react-router-dom';
import { Avatar } from 'antd';

const DialogItem = ({ dialog }) => {
	return (
		<NavLink
			to={`/messages/${dialog.id}`}
			className={styles.root}
		>
			<Avatar
				className={styles.avatar}
				size={110}
				src={dialog.image}
			/>
			<div>
				<span>{dialog.name}</span>
			</div>
			<div>
				<span>{dialog.lastMessage}</span>
			</div>
		</NavLink>
	);
};

export default DialogItem;
