import {BACKEND_URL} from '@env';
import {getNewAccessToken} from '@src/shared/api';
import EncryptedStorage from 'react-native-encrypted-storage';
import {User} from '../model/user';

export async function getUserInfo() {
  const accessToken = await EncryptedStorage.getItem('access_token');
  const response = await fetch(`${BACKEND_URL}/api/users/info`, {
    method: 'GET',
    headers: {Cookie: `access_token=${accessToken}`},
  });

  if (response.status === 401) {
    await getNewAccessToken();
    throw new Error('Access token has expired.');
  }

  if (!response.ok) {
    await EncryptedStorage.clear();
  }

  return response.json() as Promise<User>;
}
