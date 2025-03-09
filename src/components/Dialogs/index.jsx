import React from 'react';
import styles from './index.module.css';
import DialogItem from './DialogItem';

const Dialogs = ({ dialogs }) => {
	return (
		<div className={styles.root}>
			{dialogs.map((dialog) => {
				return (
					<DialogItem
						key={dialog.id}
						dialog={dialog}
					/>
				);
			})}
		</div>
	);
};

export default Dialogs;
