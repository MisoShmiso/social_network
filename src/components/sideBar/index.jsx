import React from 'react';
import styles from './index.module.css';
import NavMenu from './navMenu';
import Friends from './RecentFriends';
import AvatarAndInfo from './avatarAndInfo';
import Photos from '../CommunityPhotos';
import Card from '../Card';
import picture1 from '../../assets/images/myPhoto1.jpg';
import picture2 from '../../assets/images/myPhoto2.jpg';
import picture3 from '../../assets/images/myPhoto3.jpg';
import picture4 from '../../assets/images/myPhoto4.jpg';
import picture5 from '../../assets/images/myPhoto5.jpg';
import picture6 from '../../assets/images/myPhoto6.jpg';
import picture7 from '../../assets/images/myPhoto7.jpg';
import picture8 from '../../assets/images/myPhoto8.jpg';
import picture9 from '../../assets/images/myPhoto9.jpg';
import { useLocation } from 'react-router-dom';
import { shouldHideCards } from '../../helpers';

const pictures = [
	picture1,
	picture2,
	picture3,
	picture4,
	picture5,
	picture6,
	picture7,
	picture8,
	picture9,
];

const SideBar = () => {
	const location = useLocation();

	return (
		<div className={styles.root}>
			<div>
				<AvatarAndInfo />
				<NavMenu />
			</div>
			{!shouldHideCards(location.pathname) && (
				<>
					<Card
						title='My Friends'
						renderContent={() => <Friends />}
						totalCount={45}
					/>
					<Card
						title='My Photos'
						renderContent={() => <Photos images={pictures} />}
						totalCount={176}
					/>
				</>
			)}
		</div>
	);
};

export default SideBar;
