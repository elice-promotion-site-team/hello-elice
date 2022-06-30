import { Schema } from 'mongoose';

const QuizSchema = new Schema(
  {
    quizNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    question: {
      type: String,
      required: true,
    },
    example: {
      type: Array,
      required: true,
    },
    answer: {
      type: Number,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    commentary: {
      type: String,
      required: false,
    },
    corrected: {
      type: Number,
      required: true,
      default: 0,
    },
    solved: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    collection: 'quizzes',
    timestamps: true,
  },
);

export { QuizSchema };
