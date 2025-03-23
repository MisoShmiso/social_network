import React, { useState, useRef, useEffect } from 'react';
import styles from './index.module.css';
import { useParams } from 'react-router';
import BackButton from '../BackButton';
import { Avatar, Divider } from 'antd';
import { Input, Button } from 'antd';
import {
	SendOutlined,
	DeleteOutlined,
	EditOutlined,
	CloseOutlined,
} from '@ant-design/icons';
import { useStore } from '../../models/StoreContext';
import MessagesStore from '../../models/stores/MessagesStore';
import { observer } from 'mobx-react-lite';

const { TextArea } = Input;

const Dialog = observer(() => {
	const { id } = useParams();
	const { messagesStore, dialogStore } = useStore();
	const [isEdit, setIsEdit] = useState(false);
	const targetDialog = dialogStore.getDialogById(Number(id));
	const [value, setValue] = useState();
	const [editId, setEditId] = useState();
	const messageAreaRef = useRef(null);
	const textAreaRef = useRef(null);

	const sendMessage = () => {
		messagesStore.sendMessage({
			description: value,
			dialogId: Number(id),
			author: 'John Doe',
		});
		setValue('');
	};

	const handleEdit = (message) => {
		setValue(message.description);
		setIsEdit(true);
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

	const confirmEdit = () => {
		messagesStore.confirmEdit({
			description: value,
			id: editId,
		});
		setIsEdit(false);
		setValue();
		setEditId();
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			if (value) {
				isEdit ? confirmEdit() : sendMessage();
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
						<div className={styles.messageWrapper}>
							<div
								className={
									isEdit && editId === message.id
										? styles.changedBlock
										: styles.messageBlock
								}
							>
								<span className={styles.author}>{message.author}</span>
								<span key={index}>{message.description}</span>
								{message.updatedAt && (
									<span className={styles.updatedAt}>Edited</span>
								)}
							</div>
							{!isEdit && (
								<Button
									className={styles.button}
									variant={'text'}
									size={'small'}
									color={'danger'}
									disabled={isEdit}
									icon={<DeleteOutlined />}
									onClick={() => {
										messagesStore.deleteMessage({ id: message.id });
									}}
								/>
							)}
							{!isEdit && (
								<Button
									className={
										isEdit && message.id !== editId
											? styles.hideButton
											: styles.button
									}
									variant={'text'}
									size={'small'}
									color={'default'}
									icon={
										isEdit && editId === message.id ? (
											<CloseOutlined />
										) : (
											<EditOutlined />
										)
									}
									onClick={() =>
										isEdit && editId === message.id
											? confirmEdit()
											: handleEdit(message)
									}
								/>
							)}
						</div>
					);
				})}
			</div>
			<div className={styles.inputBox}>
				{isEdit && (
					<div className={styles.inputForEdit}>
						<div className={styles.editInfoWrapper}>
							<div className={styles.leftEditSite}>
								<span className={styles.textAboutEditing}>Editing message</span>
								<span>{messagesStore.getMessageById(editId).description}</span>
							</div>
							<div className={styles.rightEditSite}>
								<CloseOutlined onClick={() => setIsEdit(false)} />
							</div>
						</div>
					</div>
				)}
				<div
					className={`${styles.areaAndButton} ${
						isEdit ? styles.editedTextArea : ''
					}`}
				>
					<TextArea
						ref={textAreaRef}
						className={styles.textArea}
						value={value}
						onChange={(e) => setValue(e.target.value)}
						placeholder='Write a message'
						autoSize={{ minRows: 3, maxRows: 5 }}
						variant={isEdit ? 'underline' : 'outlined'}
						onKeyDown={handleKeyDown}
					/>
					<Button
						className={styles.button}
						variant={'text'}
						size={'large'}
						color={'default'}
						icon={<SendOutlined />}
						onClick={isEdit ? confirmEdit : sendMessage}
						disabled={!value}
					/>
				</div>
			</div>
		</div>
	);
});

export default Dialog;
