import { Guestbook } from '../models';
import { Schema, Types } from 'mongoose';

interface GuestbookInfo {
  userId: Schema.Types.ObjectId;
  name: string;
  comment: string;
}

interface GuestbookData extends GuestbookInfo {
  _id: Types.ObjectId;
}

class GuestbookService {
  async addGuestbook(guestbookInfo: GuestbookInfo): Promise<GuestbookData> {
    // db에 저장
    const createdNewGuestbook = await Guestbook.create(guestbookInfo);

    return createdNewGuestbook;
  }

  async getGuestbooks(): Promise<GuestbookData[]> {
    const guestbooks = await Guestbook.find({});
    return guestbooks;
  }

  async getGuestbookDataById(_id: string): Promise<GuestbookData> {
    const guestbook = await Guestbook.findOne({ _id });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!guestbook) {
      const error = new Error('해당 id의 방명록이 없습니다. 다시 한 번 확인해 주세요.');
      error.name = 'NotFound';
      throw error;
    }

    return guestbook;
  }

  async setGuestbook(_id: string, update: Partial<GuestbookInfo>): Promise<GuestbookData> {
    // 업데이트 진행
    const updatedGuestbook = await Guestbook.findOneAndUpdate({ _id }, update, { returnOriginal: false });
    if (!updatedGuestbook) {
      const error = new Error('업데이트에 실패하였습니다.');
      error.name = 'NotFound';
      throw error;
    }
    return updatedGuestbook;
  }

  async deleteGuestbookData(_id: string): Promise<{ result: string }> {
    const { deletedCount } = await Guestbook.deleteOne({ _id });

    // 삭제에 실패한 경우, 에러 메시지 반환
    if (deletedCount === 0) {
      const error = new Error(`${_id} 방명록의 삭제에 실패하였습니다`);
      error.name = 'NotFound';
      throw error;
    }

    return { result: 'success' };
  }
}

const guestbookService = new GuestbookService();

export { guestbookService };
