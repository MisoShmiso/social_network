import React from 'react';
import styles from './index.module.css';
import { useParams } from 'react-router';
import { dialogs } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const Dialog = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const targetDialog = dialogs.find((dialog) => dialog.id === id);

	return (
		<div className={styles.root}>
			<Button
				variant={'text'}
				color={'default'}
				icon={<CloseOutlined />}
				onClick={() => navigate(-1)}
			/>
			<span>{targetDialog.lastMessage}</span>
		</div>
	);
};

export default Dialog;
