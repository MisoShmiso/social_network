import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './index.module.css';
import { Input, Button } from 'antd';
import { useStore } from '../../../models/StoreContext';

const { TextArea } = Input;

export const InputForPost = observer(() => {
	const [description, setDescription] = useState('');
	const [title, setTitle] = useState('');
	const { postStore } = useStore();

	const cleanup = () => {
		setDescription('');
		setTitle('');
	};

	const handleAddPost = () => {
		postStore.addPost({
			title,
			author: 'John Doe',
			description,
		});
		cleanup();
	};
	const handleKeyDown = (event) => {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			if (title && description) {
				handleAddPost();
			}
		}
	};
	return (
		<div className={styles.root}>
			<h3>My posts</h3>
			<div>
				<Input
					placeholder='Write a title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div>
				<TextArea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder='Write a text'
					autoSize={{ minRows: 3, maxRows: 5 }}
					onKeyDown={handleKeyDown}
				/>
			</div>
			<div>
				<Button
					type='primary'
					onClick={handleAddPost}
					disabled={!(title && description)}
				>
					Add post
				</Button>
			</div>
		</div>
	);
});

export default InputForPost;
