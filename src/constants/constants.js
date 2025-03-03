import { v4 as uuidv4 } from 'uuid';
import friendPhoto6 from '../assets/images/friendPhoto6.jpg';
import friendPhoto9 from '../assets/images/friendPhoto9.jpg';
import friendPhoto3 from '../assets/images/friendPhoto3.jpg';
import friendPhoto8 from '../assets/images/friendPhoto8.jpg';
import friendPhoto5 from '../assets/images/friendPhoto5.jpg';

export const dialogs = [
	{
		name: 'Andrew Simmons',
		lastMessage: "Sure, let's do it today at 7 then.",
		id: uuidv4(),
		image: friendPhoto6,
	},
	{
		name: 'Debbie Begaye',
		lastMessage: 'He is so cute, I love him so much!💗',
		id: uuidv4(),
		image: friendPhoto9,
	},
	{
		name: 'Romeo Caruthers',
		lastMessage: "Hey man, I'm having a party on Friday, come over 😎🤘",
		id: uuidv4(),
		image: friendPhoto3,
	},
	{
		name: 'Petr Semenov',
		lastMessage: 'Ahahaha this meme is so funny i love it😂😂😂',
		id: uuidv4(),
		image: friendPhoto8,
	},
	{
		name: 'William Torres',
		lastMessage:
			'Hi, can you recommend me a nice restaurant where I could take Leah? We have an anniversary in a week and I want to surprise her',
		id: uuidv4(),
		image: friendPhoto5,
	},
];
