import React from 'react';
import styles from './index.module.css';
import Posts from './posts';
import InputForPost from './inputForPost';
import Filter from './FIlter';
import { useStore } from '../../models/StoreContext';

const Feed = () => {
	return (
		<div className={styles.root}>
			<InputForPost />
			<Filter />
			<Posts />
		</div>
	);
};

export default Feed;
