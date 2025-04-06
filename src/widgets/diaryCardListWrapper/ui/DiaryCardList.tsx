import {tw} from '@src/shared/lib/utils';
import React from 'react';
import {FlatList, Image, Text, useWindowDimensions, View} from 'react-native';
import {DiaryPageIndicator} from './DiaryPageIndicator';
import {DiaryCardMenu} from '@src/features/diaryCardMenu';
import {DiaryCard, useDiaryList} from '@src/entities/diary';

interface DiaryCardListProps {
  page: number;
  goPreviousPage: () => void;
  goNextPage: () => void;
}

export const DiaryCardList = ({
  page,
  goPreviousPage,
  goNextPage,
}: DiaryCardListProps) => {
  const {width} = useWindowDimensions();
  const {diaryList} = useDiaryList(page);

  return (
    <View style={tw`flex h-full flex-col items-center bg-white`}>
      <DiaryPageIndicator
        page={page}
        lastPage={diaryList.page.totalPages}
        goPreviousPage={goPreviousPage}
        goNextPage={goNextPage}
      />
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
          <DiaryCard diary={item}>
            <DiaryCardMenu diary={item} />
          </DiaryCard>
        )}
        keyExtractor={item => item.diaryId.toString()}
        ListEmptyComponent={
          <View
            style={tw`flex flex-col items-center gap-[1.125rem] pt-[8.375rem]`}>
            <Image
              style={tw`ml-[0.3125rem] h-16 w-16`}
              source={require('@assets/diary/diary-empty.png')}
            />
            <Text>아직 저장된 일기가 없어요</Text>
          </View>
        }
      />
    </View>
  );
};
