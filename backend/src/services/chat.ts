import { Chat } from '../models';
import { Types, Document } from 'mongoose';
interface ChatInfo {
  nickname: string;
  message: string;
  time: string;
}

interface ChatData extends Document<Types.ObjectId> {
  nickname: string;
  message: string;
  time: string;
}
class ChatService {
  async addChat(chatInfo: ChatInfo): Promise<ChatData> {
    // db에 저장
    const createdNewChat = await Chat.create(chatInfo);

    if (!createdNewChat) {
      const error = new Error('서버와의 연결이 원활하지 않습니다.');
      error.name = 'InternalServerError';
      throw error;
    }
    return createdNewChat;
  }

  async getChats(): Promise<ChatData[]> {
    const chats = await Chat.find({});

    if (!chats) {
      const error = new Error('채팅 내역을 불러올 수 없습니다.');
      error.name = 'NotFound';
      throw error;
    }
    return chats;
  }
}

const chatService = new ChatService();

export { chatService };
