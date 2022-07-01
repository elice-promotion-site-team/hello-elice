import { Router, Request, Response, NextFunction } from 'express';
import path from 'path';
import { chatService } from '../../services';
const chatRouter = Router();

chatRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const chats = await chatService.getChats();
    const chatInfo = chats.map((chat) => ({ name: chat.nickname, msg: chat.message, time: chat.time }));
    res.status(200).json(chatInfo);
    // res.sendFile(path.resolve(__dirname + '../../../static/index.html'));
  } catch (error) {
    next(error);
  }
});

export { chatRouter };
