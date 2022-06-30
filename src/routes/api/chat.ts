import { Router, Request, Response, NextFunction } from 'express';
import path from 'path';
import { chatService } from '../../services';
const chatRouter = Router();

chatRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const chats = await chatService.getChats();
    console.log(chats.map((chat) => ({ name: chat.nickname, msg: chat.message, time: chat.time })));
    res.sendFile(path.resolve(__dirname + '../../../static/index.html'));
  } catch (error) {
    next(error);
  }
});

export { chatRouter };
