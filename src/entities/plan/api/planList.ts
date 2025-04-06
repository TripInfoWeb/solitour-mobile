import {BACKEND_URL} from '@env';
import {getNewAccessToken} from '@src/shared/api';
import EncryptedStorage from 'react-native-encrypted-storage';
import {SavedPlan} from '../model/plan';

export async function getPlanList() {
  const accessToken = await EncryptedStorage.getItem('access_token');
  const response = await fetch(`${BACKEND_URL}/api/travel/user-plan`, {
    method: 'GET',
    headers: {Cookie: `access_token=${accessToken}`},
  });

  if (response.status === 401) {
    await getNewAccessToken();
    throw new Error('Access token has expired.');
  }

  if (!response.ok) {
    return [];
  }

  return response.json() as Promise<SavedPlan[]>;
}
