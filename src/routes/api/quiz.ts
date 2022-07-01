import { Router, Request, Response, NextFunction } from 'express';
import { quizService } from '../../services';

interface QuizUpdate {
  quizNumber: number;
  result: boolean;
}

const quizRouter = Router();

quizRouter.get('/quizzes', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quizzes = await quizService.getQuizzes();

    res.status(200).json(quizzes);
  } catch (error) {
    next(error);
  }
});

quizRouter.get('/:quizNumber', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quizNumber = Number(req.params.quizNumber);
    const quizData = await quizService.getQuizDataByQuizNumber(quizNumber);

    res.status(200).json(quizData);
  } catch (error) {
    next(error);
  }
});

quizRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quizInfo = req.body;
    const newQuiz = await quizService.addQuiz(quizInfo);
    res.status(201).json(newQuiz);
  } catch (error) {
    next(error);
  }
});

quizRouter.put('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { update } = req.body;
    let updatedQuiz = [];
    for (let i = 0; i < update.length; i++) {
      const { quizNumber, result } = update[i];
      const updated = await quizService.setQuiz(quizNumber, result);
      updatedQuiz.push(updated);
    }

    res.status(200).json(updatedQuiz);
  } catch (error) {
    next(error);
  }
});

quizRouter.delete('/:quizNumber', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quizNumber = Number(req.params.quizNumber);
    const deleteResult = await quizService.deleteQuiz(quizNumber);

    res.status(200).json(deleteResult);
  } catch (error) {
    next(error);
  }
});

export { quizRouter };
