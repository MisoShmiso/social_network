import React from 'react';
import styles from './index.module.css';
import Post from './Post';

const posts = [
  {
    title :'Post1',
    author: 'John Doe',
    description : 'content1',
    likes : 13,
    comments : [{
      name : 'Debbie Begaye',
      message: 'So good! 😊'
    }]
  },
  {
    title :'Post2',
    author: 'John Doe',
    description : 'content2',
    likes : 17,
    comments : [{
      name : 'Romeo Caruthers',
      message: 'This is so cool! Love it!'
    }]
  },
  {
    title :'Post3',
    author: 'John Doe',
    description : 'content3',
    likes : 10,
    comments : [{
      name : 'Andrew Simmons',
      message: 'Fantastic!'
    }]
  },
  {
    title :'Post4',
    author: 'John Doe',
    description : 'content4',
    likes : 18,
    comments : [{
      name: 'Romeo Caruthers',
      message: `I've been wanting to visit the Faroe Islands for a long time, it's a magical place!`
    }
    ]
  },
  {
    title :'Post5',
    author: 'John Doe',
    description : 'content5',
    likes : 8,
    comments : [{
      name: 'Debbie Begaye',
      message: 'Wow, Looks delicious'
    }]
  },
]

const Posts = () => {
	return (
		<div className={styles.root}>
			{posts.map((post)=>{
        return <Post post={post}
        />
      })}
		</div>
	);
};


export default Posts;