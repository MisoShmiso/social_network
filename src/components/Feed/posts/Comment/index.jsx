import React from 'react';
import styles from './index.module.css';
import {Divider} from 'antd'


const Comment = ({comment}) => {
	return (
		<div className={styles.root}>
      <span className={styles.names}>{comment.name}</span>
      <span className={styles.message}>{comment.message}</span>
      <Divider className={styles.divider} />
		</div>
	);
};


export default Comment;