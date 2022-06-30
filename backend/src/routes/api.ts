import { Router } from 'express';
import { guestbookRouter, userRouter, chatRouter, quizRouter } from './api/';
import { loginRequired } from '../middlewares';

const apiRouter = Router();

apiRouter.use('/guestbook', /*loginRequired,*/ guestbookRouter);
apiRouter.use('/user', /*loginRequired,*/ userRouter);
apiRouter.use('/chat', /*loginRequired,*/ chatRouter);
apiRouter.use('/quiz', /*loginRequired,*/ quizRouter);

export { apiRouter };
