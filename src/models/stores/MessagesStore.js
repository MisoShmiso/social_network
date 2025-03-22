import { types } from "mobx-state-tree";
import Message from "../entities/Message";
import { v4 as uuidv4 } from "uuid";

const MessagesStore = types
  .model("MessagesStore", {
    messages: types.array(Message),
  })

  .views((self) => ({
    getSortedByDate() {
      return [...self.messages].sort((a, b) => a.createdAt - b.createdAt);
    },
    getMessageById(id) {
      return self.messages.find((message) => message.id === id);
    },
  }))

  .actions((self) => ({
    sendMessage: ({ dialogId, author, description }) => {
      const newMessage = {
        id: self.messages.length + 1,
        author,
        dialogId,
        description,
        createdAt: new Date(),
      };
      self.messages.push(newMessage);
    },

    deleteMessage: ({ id }) => {
      self.messages = self.messages.filter((message) => message.id !== id);
    },

    editMessage: ({ id, description }) => {
      const message = self.messages.find((message) => message.id === id);
      message.description = description;
    },
  }));

export default MessagesStore;
