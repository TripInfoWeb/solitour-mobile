import {useDiaryList} from '@src/hooks/diary/useDiaryList';
import {tw} from '@src/libs/tailwind';
import React from 'react';
import {FlatList, Image, Text, useWindowDimensions, View} from 'react-native';
import {DiaryCard} from './DiaryCard';

interface DiaryListProps {
  page: number;
}

export const DiaryList = ({page}: DiaryListProps) => {
  const {width} = useWindowDimensions();
  const {diaryList} = useDiaryList(page);

  if (diaryList.content.length === 0) {
    return (
      <View style={tw`flex flex-col items-center gap-[1.125rem] pt-[8.375rem]`}>
        <Image
          style={tw`ml-[0.3125rem] h-16 w-16`}
          source={require('@src/assets/diary/diary-empty.png')}
        />
        <Text>아직 저장된 일기가 없어요</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={tw`flex-grow-0 pt-7`}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentOffset={{
        x:
          diaryList.content.length % 2 === 0
            ? (308 * (diaryList.content.length - 1) - width) / 2
            : (308 * diaryList.content.length - width) / 2,
        y: 0,
      }}
      data={diaryList.content}
      renderItem={({item}) => (
        <DiaryCard
          title={item.title}
          period={`${new Date(item.startDatetime).toLocaleDateString()} - ${new Date(item.endDatetime).toLocaleDateString()}`}
          location={
            item.diaryDayContentResponses.diaryDayContentDetail[0].place
          }
          imageUrl={item.titleImage}
          content={
            item.diaryDayContentResponses.diaryDayContentDetail[0].content
          }
        />
      )}
      keyExtractor={item => item.diaryId.toString()}
    />
  );
};
