import React from 'react';
import styles from './index.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ dialog }) => {
	return (
		<NavLink
			to={`/messages/${dialog.id}`}
			className={styles.root}
		>
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
