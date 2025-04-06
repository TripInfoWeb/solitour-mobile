import {BACKEND_URL} from '@env';
import {getNewAccessToken} from '@src/shared/api';
import EncryptedStorage from 'react-native-encrypted-storage';
import {Plan} from '../model/plan';

interface PlanCreateRequest {
  days: number;
  contentCategory: 'DRAMA' | 'ARTIST' | 'MOVIE' | 'ENTERTAINMENT';
  contentTitles: string[];
  preferredTrips: (
    | 'CULTURAL_FACILITY'
    | 'NOVELTY_EXPERIENCE'
    | 'NATURAL_PLACE'
    | 'HISTORICAL_PLACE'
    | 'MARKET'
  )[];
}

export async function createPlan(data: PlanCreateRequest) {
  const accessToken = await EncryptedStorage.getItem('access_token');
  const response = await fetch(`${BACKEND_URL}/api/travel/plan`, {
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
    throw new Error('Failed to create data.');
  }

  return response.json() as Promise<{plans: Plan[]}>;
}

export async function savePlan(planId: number) {
  const accessToken = await EncryptedStorage.getItem('access_token');
  const formData = new URLSearchParams();
  formData.append('planId', planId.toString());

  const response = await fetch(`${BACKEND_URL}/api/travel/user-plan`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Cookie: `access_token=${accessToken}`,
    },
    body: formData.toString(),
  });

  if (response.status === 401) {
    await getNewAccessToken();
    throw new Error('Access token has expired.');
  }

  if (!response.ok) {
    throw new Error('Failed to save a course.');
  }

  return true;
}

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
