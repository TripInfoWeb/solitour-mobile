import {BACKEND_URL, KAKAO_REDIRECT_URL} from '@env';
import EncryptedStorage from 'react-native-encrypted-storage';

export async function signIn(code: string) {
  const response = await fetch(
    `${BACKEND_URL}/api/auth/oauth2/login?type=kakao&redirectUrl=${KAKAO_REDIRECT_URL}&code=${code}`,
    {method: 'GET', credentials: 'include'},
  );

  const cookies = response.headers.get('set-cookie')?.split(',');

  if (!response.ok || !cookies) {
    throw new Error('Failed to sign in.');
  }

  for (const cookie of cookies) {
    const [key, value] = cookie
      .split(';')[0]
      .split('=')
      .map(str => str.trim());

    await EncryptedStorage.setItem(key, value);
  }

  return true;
}
