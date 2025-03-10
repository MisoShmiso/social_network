import React, { useState } from 'react';
import styles from './index.module.css';
import { useParams } from 'react-router';
import BackButton from '../BackButton';
import { Avatar, Divider } from 'antd';
import { Input, Button } from 'antd';
import { SendOutlined, CloseOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const initialMessages = ["Sure, let's do it today at 7 then."];

const Dialog = ({ dialogs }) => {
	const { id } = useParams();
	const targetDialog = dialogs.find((dialog) => dialog.id === id);
	const [value, setValue] = useState();
	const [messages, setMessages] = useState(initialMessages);
	const sendMessage = () => {
		setMessages((prev) => {
			return [...prev, value];
		});
		setValue('');
	};
	const deleteMessage = (index) => {
		// Создаем копию массива, чтобы не мутировать исходный массив напрямую
		const updatedMessages = [...messages];
		// Удаляем элемент по индексу
		updatedMessages.splice(index, 1);
		// Обновляем состояние
		setMessages(updatedMessages);
	};
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
			<div className={styles.messageArea}>
				{messages.map((message, index) => {
					return (
						<div className={styles.messageWrapper}>
							<span key={index}>{message}</span>
							<Button
								className={styles.button}
								variant={'text'}
								size={'small'}
								color={'default'}
								icon={<CloseOutlined />}
								onClick={() => deleteMessage(index)}
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
};

export default Dialog;
