import React, { useState } from 'react';
import styles from './index.module.css';
import { Input } from 'antd';

const { TextArea } = Input;

const InputForPost = () => {
	const [value, setValue] = useState();
	const addPost = () => {
		alert(value);
	};
	return (
		<div className={styles.root}>
			<h3>My posts</h3>
			<div>
				<TextArea
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder='Write a text'
					autoSize={{ minRows: 3, maxRows: 5 }}
				/>
			</div>
			<div>
				<button onClick={addPost}>Add post</button>
			</div>
		</div>
	);
};

export default InputForPost;
