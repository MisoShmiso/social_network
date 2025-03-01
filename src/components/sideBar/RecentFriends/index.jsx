import React from 'react';
import styles from './index.module.css';
import { Avatar } from 'antd';
import Avatar1 from '../../../assets/images/friendPhoto1.jpg';
import Avatar2 from '../../../assets/images/friendPhoto2.jpg';
import Avatar3 from '../../../assets/images/friendPhoto3.jpg';
import Avatar4 from '../../../assets/images/friendPhoto4.jpg';
import Avatar5 from '../../../assets/images/friendPhoto5.jpg';
import Avatar6 from '../../../assets/images/friendPhoto6.jpg';
import Avatar7 from '../../../assets/images/friendPhoto7.jpg';
import Avatar8 from '../../../assets/images/friendPhoto8.jpg';
import Avatar9 from '../../../assets/images/friendPhoto9.jpg'

const friendAvatars = [
	Avatar1,
	Avatar2,
	Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  Avatar7,
  Avatar8,
  Avatar9
];

const RecentFriends = () => {
	return (
			<div className={styles.friendsList}>
				{friendAvatars.map((avatar, index) => {
					return (
						<Avatar
						  key={index}
							className={styles.avatar}
							size={95}
							src={avatar}
						/>
					);
				})}
			</div>
		
	);
};

export default RecentFriends;
