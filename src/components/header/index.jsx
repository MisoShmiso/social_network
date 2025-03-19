import React from 'react';
import styles from './index.module.css';
import Image from '../../assets/images/logo.png';

const Header = () => {
	return (
		<div className={styles.root}>
			<img
				alt='logo'
				className={styles.logo}
				src={Image}
			/>
		</div>
	);
};

export default Header;
