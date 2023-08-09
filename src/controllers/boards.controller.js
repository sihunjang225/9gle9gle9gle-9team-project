import BoardsService from '../services/boards.service';
class BoardsController {
  boardsService = new BoardsService();
  userId = 1;

  makeBoard = async (req, res) => {
    const { boardName, boardColor, boardContent } = req.body;
    console.log(boardName);
    const { status, message } = await this.boardsService.makeBoard(
      this.userId,
      boardName,
      boardColor,
      boardContent,
    );
    return res.status(status).json({ message });
  };
  getBoards = async (req, res) => {
    const { status, message, getBoards } = await this.boardsService.getBoards(
      this.userId,
    );
    return res.status(status).json({ message, getBoards });
  };
  showABoard = async (req, res) => {
    const { boardId } = req.params;
    const { status, message, showABoard } = await this.boardsService.showABoard(
      this.userId,
      boardId,
    );
    return res.status(status).json({ message, showABoard });
  };
}

export default BoardsController;
