import CardsService from '../services/cards.service';

class CardsController {
  // 카드 생성
  static async createCard(req, res) {
    const userId = 1;
    //   const userId = req.locals.user;
    const {
      cardName,
      cardColor,
      cardContent,
      cardOrder,
      endAt,
      columnId,
      deletedAt,
    } = req.body;
    const cardData = {
      cardName,
      cardColor,
      cardContent,
      cardOrder,
      endAt,
      columnId,
      deletedAt,
    };

    const { status, message } = await CardsService.createCard(userId, cardData);

    return res.status(status).json({ message });
  }

  // 카드 전체 조회
  static async getCards(req, res) {
    try {
      const cards = await CardsService.getCards();

      return res.status(200).json({ cards });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // 카드 수정
  static async updateCard(req, res) {
    try {
      const { cardId } = req.params;
      const userId = 1;
      //   const userId = req.locals.user;
      const { cardName, cardColor, cardContent, cardOrder } = req.body;

      await CardsService.updateCard(
        cardId,
        userId,
        cardName,
        cardColor,
        cardContent,
        cardOrder,
      );

      return res.status(200).json({ message: '카드 수정에 성공하였습니다.' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // 카드 삭제
  static async deleteCard(req, res) {
    const { cardId } = req.params;
    const { deletedAt } = req.body;
    const userId = 1;
    //   const userId = req.locals.user;

    const { status, message } = await CardsService.deleteCard(
      cardId,
      userId,
      deletedAt,
    );

    return res.status(status).json({ message });
  }
}

export default CardsController;
