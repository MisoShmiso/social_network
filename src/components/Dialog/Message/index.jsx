import React from 'react';
import styles from './index.module.css';
import { Button } from 'antd';
import { DeleteOutlined, EditOutlined, CloseOutlined } from '@ant-design/icons';
import { useStore } from '../../../models/StoreContext';
import { observer } from 'mobx-react-lite';

const Message = observer(
	({ message, editId, setValue, setEditId, textAreaRef, confirmEdit }) => {
		const { messagesStore } = useStore();
		const handleEdit = (message) => {
			setValue(message.description);
			setEditId(message.id);
			setTimeout(() => {
				if (textAreaRef.current) {
					let textAreaElement;
					if (textAreaRef.current.resizableTextArea?.textArea) {
						textAreaElement = textAreaRef.current.resizableTextArea.textArea;
					} else if (textAreaRef.current.focus) {
						textAreaElement = textAreaRef.current;
					}
					if (textAreaElement) {
						textAreaElement.focus();
						const textLength = textAreaElement.value.length;
						textAreaElement.setSelectionRange(textLength, textLength);
					}
				}
			}, 0);
		};
		return (
			<div className={styles.messageWrapper}>
				<div
					className={
						editId === message.id ? styles.changedBlock : styles.messageBlock
					}
				>
					<span className={styles.author}>{message.author}</span>
					<span>{message.description}</span>
					{message.updatedAt && (
						<span className={styles.updatedAt}>Edited</span>
					)}
				</div>
				{!editId && (
					<Button
						variant={'text'}
						size={'small'}
						color={'danger'}
						disabled={editId}
						icon={<DeleteOutlined />}
						onClick={() => {
							messagesStore.deleteMessage({ id: message.id });
						}}
					/>
				)}
				<Button
					className={editId ? styles.hideButton : styles.button}
					variant={'text'}
					size={'small'}
					color={'default'}
					icon={<EditOutlined />}
					onClick={() =>
						editId === message.id ? confirmEdit() : handleEdit(message)
					}
				/>
			</div>
		);
	}
);

export default Message;
