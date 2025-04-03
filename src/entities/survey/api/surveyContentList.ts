import {BACKEND_URL} from '@env';
import {getNewAccessToken} from '@src/shared/api';
import EncryptedStorage from 'react-native-encrypted-storage';
import {SurveyContentList} from '../model/survey';

export async function getSurveyContentList(
  contentCategory: 'DRAMA' | 'ARTIST' | 'MOVIE' | 'ENTERTAINMENT',
) {
  const accessToken = await EncryptedStorage.getItem('access_token');
  const response = await fetch(
    `${BACKEND_URL}/api/media?type=${contentCategory}&page=0&size=636`,
    {method: 'GET', headers: {Cookie: `access_token=${accessToken}`}},
  );

  if (response.status === 401) {
    await getNewAccessToken();
    throw new Error('Access token has expired.');
  }

  if (!response.ok) {
    throw new Error('Failed to fetch data.');
  }

  return response.json() as Promise<SurveyContentList>;
}
