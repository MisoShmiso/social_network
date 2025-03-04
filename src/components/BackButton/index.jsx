import React from 'react';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const BackButton = () => {
	const navigate = useNavigate();

	return (
		<Button
			className={styles.root}
			variant={'text'}
			color={'default'}
			icon={<CloseOutlined />}
			onClick={() => navigate(-1)}
		/>
	);
};

export default BackButton;
