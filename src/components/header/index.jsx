import React from 'react';
import styles from './index.module.css';
import Image from '../../assets/images/logo.png'

const Header = () => {

return <header className={styles.root}>
  <img className = {styles.logo} src={Image}/>
</header>
}

export default Header;