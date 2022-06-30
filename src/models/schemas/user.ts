import { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isSolved: {
      type: Boolean,
      required: true,
      default: false,
    },
    score: {
      type: Number,
      required: false,
    },
    corrected: {
      type: Number,
      required: false,
    },
  },
  {
    collection: 'users',
    timestamps: true,
  },
);

export { UserSchema };
