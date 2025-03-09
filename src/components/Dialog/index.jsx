import React from 'react';
import styles from './index.module.css';
import { useParams } from 'react-router';
import BackButton from '../BackButton';
import { Avatar, Divider } from 'antd';

const Dialog = ({ dialogs }) => {
	const { id } = useParams();
	const targetDialog = dialogs.find((dialog) => dialog.id === id);
	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<BackButton />
				<Avatar
					className={styles.avatar}
					size={80}
					src={targetDialog.image}
				/>
				<span className={styles.name}>{targetDialog.name}</span>
			</div>
			<Divider className={styles.divider} />
			<span>{targetDialog.lastMessage}</span>
		</div>
	);
};

export default Dialog;
