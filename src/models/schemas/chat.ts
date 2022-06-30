import { Schema } from 'mongoose';

const ChatSchema = new Schema(
  {
    nickname: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'chats',
    timestamps: true,
  },
);

export { ChatSchema };
