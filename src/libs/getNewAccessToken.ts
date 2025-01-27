import {BACKEND_URL} from '@env';
import EncryptedStorage from 'react-native-encrypted-storage';

export const getNewAccessToken = async () => {
  const refreshToken = await EncryptedStorage.getItem('refresh_token');
  const tokenResponse = await fetch(
    `${BACKEND_URL}/api/auth/oauth2/token/refresh`,
    {
      method: 'POST',
      headers: {
        Cookie: `refresh_token=${refreshToken}`,
      },
    },
  );

  const cookie = tokenResponse.headers.get('set-cookie');

  if (cookie) {
    const [key, value] = cookie
      ?.split(';')[0]
      .split('=')
      .map(str => str.trim());
    await EncryptedStorage.setItem(key, value);
  }
};
