import { v4 as uuidv4 } from 'uuid';
import friendPhoto6 from '../assets/images/friendPhoto6.jpg';
import friendPhoto9 from '../assets/images/friendPhoto9.jpg';
import friendPhoto3 from '../assets/images/friendPhoto3.jpg';
import friendPhoto8 from '../assets/images/friendPhoto8.jpg';
import friendPhoto5 from '../assets/images/friendPhoto5.jpg';

export let addPost = (post) => {
	console.log(post);
	let newPost = {
		title: post.title,
		author: post.author,
		description: post.description,
		likes: 0,
		comments: [],
	};
	state.posts.push(newPost);
};

export const state = {
	dialogs: [
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
	],

	posts: [
		{
			title: 'Post1',
			author: 'John Doe',
			description: 'content1',
			likes: 13,
			comments: [
				{
					name: 'Debbie Begaye',
					message: 'So good! 😊',
				},
			],
		},
		{
			title: 'Post2',
			author: 'John Doe',
			description: 'content2',
			likes: 17,
			comments: [
				{
					name: 'Romeo Caruthers',
					message: 'This is so cool! Love it!',
				},
			],
		},
		{
			title: 'Post3',
			author: 'John Doe',
			description: 'content3',
			likes: 10,
			comments: [
				{
					name: 'Andrew Simmons',
					message: 'Fantastic!',
				},
			],
		},
		{
			title: 'Post4',
			author: 'John Doe',
			description: 'content4',
			likes: 18,
			comments: [
				{
					name: 'Romeo Caruthers',
					message: `I've been wanting to visit the Faroe Islands for a long time, it's a magical place!`,
				},
			],
		},
		{
			title: 'Post5',
			author: 'John Doe',
			description: 'content5',
			likes: 8,
			comments: [
				{
					name: 'Debbie Begaye',
					message: 'Wow, Looks delicious',
				},
			],
		},
	],
};

export default state;
