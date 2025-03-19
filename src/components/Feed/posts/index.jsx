import React from 'react';
import styles from './index.module.css';
import Post from './Post';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../models/StoreContext';

const Posts = observer(() => {
	const postStore = useStore('postStore');
	return (
		<div className={styles.root}>
			{postStore.getSortedByDate().map((post, index) => {
				return (
					<Post
						key={index}
						post={post}
					/>
				);
			})}
		</div>
	);
});

export default Posts;
