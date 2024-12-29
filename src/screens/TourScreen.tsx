import {tw} from '@src/libs/tailwind';
import React from 'react';
import {Image, Text, View} from 'react-native';

export const TourScreen = () => {
  return (
    <View
      style={tw`flex h-full flex-col items-center justify-center bg-white px-4`}>
      <View style={tw`flex flex-col items-center gap-[1.125rem]`}>
        <Image
          style={tw`h-16 w-16`}
          source={require('@src/assets/tour/tour-empty.png')}
        />
        <Text>아직 저장된 여행이 없어요</Text>
      </View>
      {/* TODO
      <FlatList
        contentContainerStyle={tw`flex flex-col gap-4`}
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={() => <TourItem />}
        keyExtractor={item => item.toString()}
      /> */}
    </View>
  );
};
