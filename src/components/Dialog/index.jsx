import React, { useState, useRef, useEffect } from 'react';
import styles from './index.module.css';
import { useParams } from 'react-router';
import BackButton from '../BackButton';
import { Avatar, Divider } from 'antd';
import { Input, Button } from 'antd';
import { SendOutlined, CloseOutlined } from '@ant-design/icons';
import { useStore } from '../../models/StoreContext';
import { observer } from 'mobx-react-lite';
import Message from './Message';

const { TextArea } = Input;

const Dialog = observer(() => {
	const { id } = useParams();
	const { messagesStore, dialogStore } = useStore();
	const targetDialog = dialogStore.getDialogById(Number(id));
	const [value, setValue] = useState();
	const [editId, setEditId] = useState();
	const messageAreaRef = useRef(null);
	const textAreaRef = useRef(null);

	const cleanup = () => {
		setValue();
		setEditId();
	};

	const sendMessage = () => {
		messagesStore.sendMessage({
			description: value,
			dialogId: Number(id),
			author: 'John Doe',
		});
		cleanup();
	};

	const confirmEdit = () => {
		messagesStore.editMessage({
			description: value,
			id: editId,
		});
		cleanup();
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			if (value) {
				editId ? confirmEdit() : sendMessage();
			}
		}
	};

	useEffect(() => {
		const scrollToBottom = () => {
			if (messageAreaRef.current) {
				messageAreaRef.current.scrollTo({
					top: messageAreaRef.current.scrollHeight,
					behavior: 'smooth',
				});
			}
		};

		setTimeout(scrollToBottom, 0);
	}, [messagesStore.messages.length]);

	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<div className={styles.headerTitleBlock}>
					<BackButton />
					<Avatar
						className={styles.avatar}
						size={80}
						src={targetDialog.image}
					/>
					<span className={styles.name}>{targetDialog.name}</span>
				</div>
				<Divider className={styles.divider} />
			</div>
			<div
				className={styles.messageArea}
				ref={messageAreaRef}
			>
				{messagesStore.getSortedByDate().map((message, index) => {
					return (
						<Message
							setValue={setValue}
							setEditId={setEditId}
							editId={editId}
							textAreaRef={textAreaRef}
							confirmEdit={confirmEdit}
							key={index}
							message={message}
						/>
					);
				})}
			</div>
			<div className={styles.inputBox}>
				{editId && (
					<div className={styles.inputForEdit}>
						<div className={styles.editInfoWrapper}>
							<div className={styles.leftEditSite}>
								<span className={styles.textAboutEditing}>Editing message</span>
								<span>{messagesStore.getMessageById(editId).description}</span>
							</div>
							<div className={styles.rightEditSite}>
								<CloseOutlined onClick={cleanup} />
							</div>
						</div>
					</div>
				)}
				<div
					className={`${styles.areaAndButton} ${
						editId ? styles.editedTextArea : ''
					}`}
				>
					<TextArea
						ref={textAreaRef}
						className={styles.textArea}
						value={value}
						onChange={(e) => setValue(e.target.value)}
						placeholder='Write a message'
						autoSize={{ minRows: 3, maxRows: 5 }}
						variant={editId ? 'underline' : 'outlined'}
						onKeyDown={handleKeyDown}
					/>
					<Button
						className={styles.button}
						variant={'text'}
						size={'large'}
						color={'default'}
						icon={<SendOutlined />}
						onClick={editId ? confirmEdit : sendMessage}
						disabled={!value}
					/>
				</div>
			</div>
		</div>
	);
});

export default Dialog;
