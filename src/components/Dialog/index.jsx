import React from 'react';
import styles from './index.module.css';
import { useParams } from 'react-router';
import { dialogs } from '../../constants/constants';
import BackButton from '../BackButton';
import { Avatar } from 'antd';

const Dialog = () => {
	const { id } = useParams();
	const targetDialog = dialogs.find((dialog) => dialog.id === id);
	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<BackButton />
				<Avatar
					className={styles.avatar}
					size={70}
					src={targetDialog.image}
				/>
				<span>{targetDialog.name}</span>
			</div>
			<span>{targetDialog.lastMessage}</span>
		</div>
	);
};

export default Dialog;
