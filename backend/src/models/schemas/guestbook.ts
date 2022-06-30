import { Schema } from 'mongoose';

const GuestbookSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'guestbooks',
    timestamps: true,
  },
);

export { GuestbookSchema };
