import React from 'react';
import styles from './index.module.css';
import Hashtags from './Hashtags';
import Photos from '../Photos';
import Card from '../Card';
import Videos from '../Videos';
import picture1 from '../../assets/images/picture1.jpg';
import picture2 from '../../assets/images/picture2.jpg';
import picture3 from '../../assets/images/picture3.jpg';
import picture4 from '../../assets/images/picture4.jpg';
import picture5 from '../../assets/images/picture5.jpg';
import picture6 from '../../assets/images/picture6.jpg';
import picture7 from '../../assets/images/picture7.jpg';
import picture8 from '../../assets/images/picture8.jpg';
import picture9 from '../../assets/images/picture9.jpg';
import previewVideo1 from '../../assets/images/previewVideo1.jpg';
import previewVideo2 from '../../assets/images/previewVideo2.jpg';
import previewVideo3 from '../../assets/images/previewVideo3.jpg';
import previewVideo4 from '../../assets/images/previewVideo4.jpg';
import previewVideo5 from '../../assets/images/previewVideo5.jpg';
import previewVideo6 from '../../assets/images/previewVideo6.jpg';
import previewVideo7 from '../../assets/images/previewVideo7.jpg';
import previewVideo8 from '../../assets/images/previewVideo8.jpg'

const images = [
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

const videos = [
	{
		image: previewVideo1,
		videoUrl: 'https://www.youtube.com/watch?v=G5RpJwCJDqc'
	},
	{
		image: previewVideo2,
		videoUrl: 'https://www.youtube.com/watch?v=QCJqRco_sC8'
	},
	{
		image: previewVideo3,
		videoUrl: 'https://www.youtube.com/watch?v=0AugFrZPP9U'
	},
	{
		image: previewVideo4,
		videoUrl: 'https://www.youtube.com/watch?v=zFiqZMTmolY'
	},
	{
		image: previewVideo5,
		videoUrl: 'https://www.youtube.com/watch?v=lyh2kAjcmSY'
	},
	{
		image: previewVideo6,
		videoUrl: 'https://www.youtube.com/watch?v=YZ84iQrbYjw'
	},
	{
		image: previewVideo7,
		videoUrl: 'https://www.youtube.com/watch?v=FJC1eBRJ-DY'
	},
	{
		image: previewVideo8,
		videoUrl: 'https://www.youtube.com/watch?v=z2Bbm1Jr0mI'
	}

]

const CommunityInfo = () => {
	return (
		<div className={styles.root}>
			<Card
				title='Community Hashtags'
				renderContent={() => <Hashtags />}
				isViewAllVisible={false}
			/>
			<Card
				title='Latest Community Photos'
				renderContent={() => <Photos images={images} />}
				totalCount={176}
			/>
			<Card
				title='Community Media'
				renderContent={() => <Videos videos={videos}/>}
				totalCount={229}
			/>
		</div>
	);
};

export default CommunityInfo;
