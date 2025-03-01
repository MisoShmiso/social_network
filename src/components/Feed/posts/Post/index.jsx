import React from 'react';
import styles from './index.module.css';
import Comment from '../Comment';
import {Divider} from 'antd'


const Post = ({ post }) => {
	return (
		<div className={styles.root}>
			<div>
				<span>{post.title}</span>
			</div>
			<div>
				<span>{post.author}</span>
			</div>
			<div>
				<span>{post.description}</span>
			</div>
			<div>
        <span>Likes </span>
				<span>{post.likes}</span>
			</div>

      <Divider className={styles.divider} />

			{post.comments.map((comment) => {
				return <Comment comment={comment} />;
			})}
		</div>
	);
};

export default Post;
