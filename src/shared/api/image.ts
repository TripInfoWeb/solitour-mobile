import {BACKEND_URL} from '@env';
import EncryptedStorage from 'react-native-encrypted-storage';
import {getNewAccessToken} from './getNewAccessToken';

export async function uploadImage(image: {
  fileName: string;
  type: string;
  uri: string;
}) {
  const accessToken = await EncryptedStorage.getItem('access_token');
  const formData = new FormData();
  formData.append('image', {
    name: image.fileName,
    type: image.type,
    uri: image.uri,
  });
  formData.append('type', 'DIARY');

  const response = await fetch(`${BACKEND_URL}/api/image`, {
    method: 'POST',
    headers: {Cookie: `access_token=${accessToken}`},
    body: formData,
  });

  if (response.status === 401) {
    await getNewAccessToken();
    throw new Error('Access token has expired.');
  }

  if (!response.ok) {
    throw new Error('Failed to upload an image.');
  }

  return response.json() as Promise<{fileUrl: string}>;
}
