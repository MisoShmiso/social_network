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
			<div className={styles.dialogWrapper}>
				<Avatar
					className={styles.avatar}
					size={90}
					src={dialog.image}
				/>
				<div className={styles.nameMessageBlock}>
					<span className={styles.name}>{dialog.name}</span>
					<span className={styles.message}>{dialog.lastMessage}</span>
				</div>
			</div>
		</NavLink>
	);
};

export default DialogItem;
