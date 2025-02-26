
import React from 'react';
import styles from'./index.module.css';
import { Divider } from 'antd';

const Card = ({title, renderContent, totalCount, isViewAllVisible=true}) => {
	return (
		<div className={styles.root}>
			<span className={styles.title}>{title}</span>
			<Divider className={styles.divider} />
			{renderContent()}
			{isViewAllVisible && <a href='' className={styles.totalCount}>View All ({totalCount})</a>}
		</div>
	);
};

export default Card;