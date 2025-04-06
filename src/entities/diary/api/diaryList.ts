import {BACKEND_URL} from '@env';
import EncryptedStorage from 'react-native-encrypted-storage';
import {DiaryDetail} from '../model/diary';
import {getNewAccessToken} from '@src/shared/api';

interface DiaryList {
  content: DiaryDetail[];
  page: {totalPages: number};
}

export async function getDiaryList(page: number) {
  const accessToken = await EncryptedStorage.getItem('access_token');
  const response = await fetch(`${BACKEND_URL}/api/diary?page=${page}`, {
    method: 'GET',
    headers: {Cookie: `access_token=${accessToken}`},
  });

  if (response.status === 401) {
    await getNewAccessToken();
    throw new Error('Access token has expired.');
  }

  if (!response.ok) {
    throw new Error('Failed to fetch data.');
  }

  return response.json() as Promise<DiaryList>;
}
