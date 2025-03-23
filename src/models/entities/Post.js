import { types } from "mobx-state-tree";
import Comment from "./Comment";

const Post = types.model("Post", {
  id: types.identifier,
  title: types.string,
  author: types.string,
  description: types.string,
  likes: types.number,
  comments: types.array(Comment),
  createdAt: types.Date,
});

export default Post;
