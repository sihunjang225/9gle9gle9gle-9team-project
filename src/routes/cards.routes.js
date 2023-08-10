import { Router } from 'express';
import CardsController from '../controllers/cards.controller';
import authmiddleware from '../middlewares/authmiddlewares';
const router = Router();

// 카드 생성
router.post('/cards', authmiddleware, CardsController.createCard);

//  카드 개별 조회
router.get('/cards/:cardId', authmiddleware, CardsController.getCard);

// 카드 수정
router.patch('/cards/:cardId', authmiddleware, CardsController.updateCard);

// 카드 삭제
router.delete('/cards/:cardId', authmiddleware, CardsController.deleteCard);

// 카드 순서 UP
router.patch('/cards/:cardId/up', CardsController.cardUp);

// 카드 순서 DOWN
router.patch('/cards/:cardId/down', CardsController.cardDown);

export default router;
