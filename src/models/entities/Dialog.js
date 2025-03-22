import { types } from "mobx-state-tree";

const Dialog = types.model("Dialog", {
  id: types.number,
  name: types.string,
  lastMessage: types.string,
  image: types.frozen(),
  updatedAt: types.Date,
});

export default Dialog;
