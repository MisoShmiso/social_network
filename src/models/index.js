import { v4 as uuidv4 } from "uuid";
import RootStore from "./stores/RootStore";
import friendPhoto6 from "../assets/images/friendPhoto6.jpg";
import friendPhoto9 from "../assets/images/friendPhoto9.jpg";
import friendPhoto3 from "../assets/images/friendPhoto3.jpg";
import friendPhoto8 from "../assets/images/friendPhoto8.jpg";
import friendPhoto5 from "../assets/images/friendPhoto5.jpg";

const store = RootStore.create({
  dialogStore: {
    dialogs: [
      {
        id: 1,
        name: "Andrew Simmons",
        lastMessage: "Sure, let's do it today at 7 then.",
        image: friendPhoto6,
        updatedAt: new Date(),
      },
      {
        name: "Debbie Begaye",
        lastMessage: "He is so cute, I love him so much!💗",
        id: 2,
        image: friendPhoto9,
        updatedAt: new Date(),
      },
      {
        name: "Romeo Caruthers",
        lastMessage: "Hey man, I'm having a party on Friday, come over 😎🤘",
        id: 3,
        image: friendPhoto3,
        updatedAt: new Date(),
      },
      {
        name: "Petr Semenov",
        lastMessage: "Ahahaha this meme is so funny i love it😂😂😂",
        id: 4,
        image: friendPhoto8,
        updatedAt: new Date(),
      },
      {
        name: "William Torres",
        lastMessage:
          "Hi, can you recommend me a nice restaurant where I could take Leah? We have an anniversary in a week and I want to surprise her",
        id: 5,
        image: friendPhoto5,
        updatedAt: new Date(),
      },
    ],
  },
  postStore: {
    posts: [
      {
        id: uuidv4(),
        title: "Post1",
        author: "John Doe",
        description: "content1",
        likes: 13,
        comments: [
          {
            id: uuidv4(),
            name: "Debbie Begaye",
            message: "So good! 😊",
            createdAt: new Date(),
          },
        ],
        createdAt: new Date(),
      },
      {
        id: uuidv4(),
        title: "Post2",
        author: "John Doe",
        description: "content2",
        likes: 17,
        comments: [
          {
            id: uuidv4(),
            name: "Romeo Caruthers",
            message: "This is so cool! Love it!",
            createdAt: new Date(),
          },
        ],
        createdAt: new Date(),
      },
      {
        id: uuidv4(),
        title: "Post3",
        author: "John Doe",
        description: "content3",
        likes: 10,
        comments: [
          {
            id: uuidv4(),
            name: "Andrew Simmons",
            message: "Fantastic!",
            createdAt: new Date(),
          },
        ],
        createdAt: new Date(),
      },
      {
        id: uuidv4(),
        title: "Post4",
        author: "John Doe",
        description: "content4",
        likes: 18,
        comments: [
          {
            id: uuidv4(),
            name: "Romeo Caruthers",
            message: `I've been wanting to visit the Faroe Islands for a long time, it's a magical place!`,
            createdAt: new Date(),
          },
        ],
        createdAt: new Date(),
      },
      {
        id: uuidv4(),
        title: "Post5",
        author: "John Doe",
        description: "content5",
        likes: 8,
        comments: [
          {
            id: uuidv4(),
            name: "Debbie Begaye",
            message: "Wow, Looks delicious",
            createdAt: new Date(),
          },
        ],
        createdAt: new Date(),
      },
    ],
  },
});

export default store;
