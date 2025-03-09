import React from 'react';
import styles from './index.module.css';
import Post from './Post';

const Posts = ({ posts }) => {
	return (
		<div className={styles.root}>
			{posts.map((post, index) => {
				return (
					<Post
						key={index}
						post={post}
					/>
				);
			})}
		</div>
	);
};

export default Posts;
