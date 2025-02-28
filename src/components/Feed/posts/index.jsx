import React from 'react';
import styles from './index.module.css';

const Posts = () => {
	return (
		<div className={styles.root}>
			My posts
			<div>New post</div>
			<div>post 1</div>
			<div>post 2</div>
		</div>
	);
};


export default Posts;