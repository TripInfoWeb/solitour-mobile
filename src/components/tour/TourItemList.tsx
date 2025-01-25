import React from 'react';
import {BACKEND_URL} from '@env';
import {SavedPlan} from '@src/types/plan';
import {useSuspenseQuery} from '@tanstack/react-query';
import {FlatList, Image, Text, View} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import {tw} from '@src/libs/tailwind';
import {TourItem} from './TourItem';

export const TourItemList = () => {
  const {data} = useSuspenseQuery<SavedPlan[]>({
    queryKey: ['tourItemList'],
    queryFn: async () => {
      const accessToken = await EncryptedStorage.getItem('access_token');
      const response = await fetch(`${BACKEND_URL}/api/travel/user-plan`, {
        method: 'GET',
        headers: {
          Cookie: `access_token=${accessToken}`,
        },
      });

      if (!response.ok) {
        return [];
      }

      return await response.json();
    },
    staleTime: 0,
    gcTime: 0,
  });

  return (
    <View
      style={tw.style(
        data.length === 0 ? 'bg-white' : 'bg-[#F3F3F3]',
        'flex h-full flex-col justify-center px-4',
      )}>
      {data.length === 0 ? (
        <View style={tw`flex flex-col items-center gap-[1.125rem]`}>
          <Image
            style={tw`h-16 w-16`}
            source={require('@src/assets/tour/tour-empty.png')}
          />
          <Text>아직 저장된 여행이 없어요</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={tw`flex flex-col`}
          data={data}
          renderItem={({item}) => <TourItem data={item} />}
          keyExtractor={item => item.plan.planId.toString()}
        />
      )}
    </View>
  );
};
