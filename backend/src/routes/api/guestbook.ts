import { Router, Request, Response, NextFunction } from 'express';
import { guestbookService } from '../../services';

const guestbookRouter = Router();

guestbookRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const guestbookInfo = req.body;
    // 위 데이터를 방명록 db에 추가하기
    const newGuestbook = await guestbookService.addGuestbook(guestbookInfo);
    res.status(201).json(newGuestbook);
  } catch (error) {
    next(error);
  }
});

guestbookRouter.get('/list', async (req: Request, res: Response, next: NextFunction) => {
  try {
    // 전체 방명록 목록을 얻음
    const guestbooks = await guestbookService.getGuestbooks();

    res.status(200).json(guestbooks);
  } catch (error) {
    next(error);
  }
});

guestbookRouter.get('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = req.params._id;
    const guestbookData = await guestbookService.getGuestbookDataById(_id);

    res.status(200).json(guestbookData);
  } catch (error) {
    next(error);
  }
});

guestbookRouter.put('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    // req (request) 에서 데이터 가져오기
    const _id = req.params._id;
    const update = req.body;

    // 방명록 정보를 업데이트함.
    const updatedGuestbook = await guestbookService.setGuestbook(_id, update);

    res.status(200).json(updatedGuestbook);
  } catch (error) {
    next(error);
  }
});

guestbookRouter.delete('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = req.params._id;
    const deleteResult = await guestbookService.deleteGuestbookData(_id);

    res.status(200).json(deleteResult);
  } catch (error) {
    next(error);
  }
});

export { guestbookRouter };
