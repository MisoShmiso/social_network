import React from 'react';
import styles from './index.module.css';
import { useParams } from 'react-router';
import { dialogs } from '../../constants/constants';

const Dialog = () => {
	const { id } = useParams();
	const targetDialog = dialogs.find((dialog) => dialog.id === id);
	return (
		<div className={styles.root}>
			<span>{targetDialog.lastMessage}</span>
		</div>
	);
};

export default Dialog;
