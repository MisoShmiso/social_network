import React, { useState, useRef, useEffect } from 'react';
import styles from './index.module.css';
import { useParams } from 'react-router';
import BackButton from '../BackButton';
import { Avatar, Divider } from 'antd';
import { Input, Button } from 'antd';
import { SendOutlined, CloseOutlined } from '@ant-design/icons';
import { useStore } from '../../models/StoreContext';
import MessagesStore from '../../models/stores/MessagesStore';
import { observer } from 'mobx-react-lite';

const { TextArea } = Input;

const Dialog = observer(() => {
	const { id } = useParams();
	const { messagesStore, dialogStore } = useStore();
	const targetDialog = dialogStore.getDialogById(Number(id));
	const [value, setValue] = useState();
	const messageAreaRef = useRef(null);

	const sendMessage = () => {
		messagesStore.sendMessage({
			description: value,
			dialogId: Number(id),
			author: 'John Doe',
		});
		setValue('');
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
		console.log(setTimeout);
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
							<div className={styles.messageBlock}>
								<span className={styles.author}>{message.author}</span>
								<span key={index}>{message.description}</span>
							</div>
							<Button
								className={styles.button}
								variant={'text'}
								size={'small'}
								color={'default'}
								icon={<CloseOutlined />}
								onClick={() => {
									messagesStore.deleteMessage({ id: message.id });
								}}
							/>
						</div>
					);
				})}
			</div>
			<div className={styles.inputBox}>
				<TextArea
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder='Write a message'
					autoSize={{ minRows: 3, maxRows: 5 }}
				/>
				<Button
					className={styles.button}
					variant={'text'}
					size={'large'}
					color={'default'}
					icon={<SendOutlined />}
					onClick={sendMessage}
					disabled={!value}
				/>
			</div>
		</div>
	);
});

export default Dialog;
