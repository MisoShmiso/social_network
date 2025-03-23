import styles from './index.module.css';
import { SendOutlined, CloseOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../models/StoreContext';
import { Input, Button } from 'antd';

const { TextArea } = Input;
const MessageInput = observer(
	({
		value,
		setValue,
		editId,
		textAreaRef,
		handleKeyDown,
		cleanup,
		sendMessage,
		confirmEdit,
	}) => {
		const { messagesStore } = useStore();
		return (
			<div className={styles.inputBox}>
				{editId && (
					<div className={styles.inputForEdit}>
						<div className={styles.editInfoWrapper}>
							<div className={styles.leftEditSite}>
								<span className={styles.textAboutEditing}>Editing message</span>
								<span>{messagesStore.getMessageById(editId).description}</span>
							</div>
							<CloseOutlined onClick={cleanup} />
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
		);
	}
);

export default MessageInput;
