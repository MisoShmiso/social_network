import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import Posts from './posts';
import InputForPost from './inputForPost';
import Filter from './FIlter';

const Feed = ({ posts }) => {
	return (
		<div className={styles.root}>
			<InputForPost />
			<Filter />
			<Posts posts={posts} />
		</div>
	);
};

export default Feed;
