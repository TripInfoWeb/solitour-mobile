import {tw} from '@src/libs/tailwind';
import React from 'react';
import {FlatList, Image, Pressable, View} from 'react-native';

interface DiaryImageListProps {
  images: string[];
  setImages: (images: string[]) => void;
}

export const DiaryImageList = ({images, setImages}: DiaryImageListProps) => {
  return (
    <FlatList
      contentContainerStyle={tw`gap-2`}
      horizontal={true}
      data={images}
      renderItem={({item, index}) => (
        <Pressable
          style={tw`relative`}
          onPress={() => setImages(images.filter((_, idx) => idx !== index))}>
          <Image
            style={tw`h-20 w-20 rounded-lg border border-custom-04`}
            source={{uri: item}}
          />
          <View
            style={tw`absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-green`}>
            <Image
              style={tw`h-2.5 w-2.5`}
              source={require('@src/assets/common/close-white.png')}
            />
          </View>
        </Pressable>
      )}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};
