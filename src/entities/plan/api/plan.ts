import {BACKEND_URL} from '@env';
import {getNewAccessToken} from '@src/shared/api';
import EncryptedStorage from 'react-native-encrypted-storage';

export async function updatePlan(planId: number, title: string) {
  const accessToken = await EncryptedStorage.getItem('access_token');
  const response = await fetch(
    `${BACKEND_URL}/api/travel/user-plan/title/${planId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `access_token=${accessToken}`,
      },
      body: JSON.stringify({title}),
    },
  );

  if (response.status === 401) {
    await getNewAccessToken();
    throw new Error('Access token has expired.');
  }

  if (!response.ok) {
    throw new Error('Failed to update title.');
  }

  return true;
}

export async function deletePlan(planId: number) {
  const accessToken = await EncryptedStorage.getItem('access_token');
  const response = await fetch(
    `${BACKEND_URL}/api/travel/user-plan/${planId}`,
    {
      method: 'DELETE',
      headers: {
        Cookie: `access_token=${accessToken}`,
      },
    },
  );

  if (response.status === 401) {
    await getNewAccessToken();
    throw new Error('Access token has expired.');
  }

  if (!response.ok) {
    throw new Error('Failed to delete.');
  }

  return true;
}
