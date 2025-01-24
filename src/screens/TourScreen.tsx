import {BACKEND_URL} from '@env';
import {TourItem} from '@src/components/tour/TourItem';
import {tw} from '@src/libs/tailwind';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';

export const TourScreen = () => {
  // TODO: 삭제 필요
  const [temp] = useState<number[] | null>(null);

  useEffect(() => {
    (async () => {
      const accessToken = await EncryptedStorage.getItem('access_token');
      const response = await fetch(`${BACKEND_URL}/api/travel/user-plan`, {
        method: 'GET',
        headers: {
          Cookie: `access_token=${accessToken}`,
        },
      });

      const data = await response.json();
      console.log(data);
      console.log(data[0].plan.days[0].daysDetailResponses);
    })();
  }, []);

  return (
    <View style={tw`flex h-full flex-col justify-center bg-white px-4`}>
      {temp === null ? (
        <View style={tw`flex flex-col items-center gap-[1.125rem]`}>
          <Image
            style={tw`h-16 w-16`}
            source={require('@src/assets/tour/tour-empty.png')}
          />
          <Text>아직 저장된 여행이 없어요</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={tw`flex flex-col gap-4`}
          data={temp}
          renderItem={() => <TourItem />}
          keyExtractor={item => item.toString()}
        />
      )}
    </View>
  );
};
