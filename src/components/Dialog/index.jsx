import React, { useState, useRef, useEffect } from 'react';
import styles from './index.module.css';
import { useParams } from 'react-router';
import { Input } from 'antd';
import { useStore } from '../../models/StoreContext';
import { observer } from 'mobx-react-lite';
import Message from './Message';
import MessageInput from './MessageInput';
import Header from './Header';

const { TextArea } = Input;

const Dialog = observer(() => {
	const { id } = useParams();
	const { messagesStore } = useStore();
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
			<Header id={id} />
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
			<MessageInput
				value={value}
				setValue={setValue}
				editId={editId}
				setEditId={setEditId}
				textAreaRef={textAreaRef}
				handleKeyDown={handleKeyDown}
				cleanup={cleanup}
				sendMessage={sendMessage}
				confirmEdit={confirmEdit}
			/>
		</div>
	);
});

export default Dialog;
