import {BACKEND_URL} from '@env';
import {getNewAccessToken} from '@src/shared/api';
import EncryptedStorage from 'react-native-encrypted-storage';

export interface DiaryCreateRequest {
  title: string;
  titleImage: string;
  startDatetime: Date;
  endDatetime: Date;
  diaryDayRequests: {
    content: string;
    feelingStatus: string;
    diaryDayContentImages: string;
    place: string;
  }[];
}

export interface DiaryUpdateRequest {
  title: string;
  deleteTitleImage: string;
  saveTitleImage: string;
  startDatetime: Date;
  endDatetime: Date;
  diaryDayRequests: {
    content: string;
    feelingStatus: string;
    deleteImagesUrl: string;
    saveImagesUrl: string;
    place: string;
  }[];
}

export async function createDiary(data: DiaryCreateRequest) {
  const accessToken = await EncryptedStorage.getItem('access_token');
  const response = await fetch(`${BACKEND_URL}/api/diary`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `access_token=${accessToken}`,
    },
    body: JSON.stringify(data),
  });

  if (response.status === 401) {
    await getNewAccessToken();
    throw new Error('Access token has expired.');
  }

  if (!response.ok) {
    throw new Error('Failed to register.');
  }

  return response.text();
}

export async function updateDiary(diaryId: number, data: DiaryUpdateRequest) {
  const accessToken = await EncryptedStorage.getItem('access_token');
  const response = await fetch(`${BACKEND_URL}/api/diary/${diaryId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `access_token=${accessToken}`,
    },
    body: JSON.stringify(data),
  });

  if (response.status === 401) {
    await getNewAccessToken();
    throw new Error('Access token has expired.');
  }

  if (!response.ok) {
    throw new Error('Failed to update.');
  }

  return await response.text();
}

export async function deleteDiary(diaryId: number) {
  const accessToken = await EncryptedStorage.getItem('access_token');
  const response = await fetch(`${BACKEND_URL}/api/diary/${diaryId}`, {
    method: 'DELETE',
    headers: {
      Cookie: `access_token=${accessToken}`,
    },
  });

  if (response.status === 401) {
    await getNewAccessToken();
    throw new Error('Access token has expired.');
  }

  if (!response.ok) {
    throw new Error('Failed to delete.');
  }

  return true;
}
