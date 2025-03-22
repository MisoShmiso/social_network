import { types } from "mobx-state-tree";
import Post from "../entities/Post";
import { v4 as uuidv4 } from "uuid";

const PostStore = types
  .model("PostStore", {
    posts: types.array(Post),
  })

  .views((self) => ({
    getAll() {
      return [...self.posts];
    },
    getSortedByDate() {
      return [...self.posts].sort((a, b) => b.createdAt - a.createdAt);
    },
    getPostById(id) {
      return self.posts.find((post) => post.id === id);
    },
  }))

  .actions((self) => ({
    addPost: ({ title, author, description }) => {
      const newPost = {
        id: uuidv4(),
        title,
        author,
        description,
        likes: 0,
        comments: [],
        createdAt: new Date(),
      };
      self.posts.push(newPost);
    },

    addComment: (postId, { name, message }) => {
      const post = self.getPostById(postId);
      if (post) {
        post.comments.push({
          id: uuidv4(),
          name,
          message,
          createdAt: new Date(),
        });
      }
    },

    incrementLikes: (postId) => {
      const post = self.getPostById(postId);
      if (post) {
        post.likes += 1;
      }
    },
  }));

export default PostStore;
