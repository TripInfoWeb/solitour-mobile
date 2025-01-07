import {SurveyResultItem} from '@src/components/survey/result/SurveyResultItem';
import {tw} from '@src/libs/tailwind';
import React from 'react';
import {FlatList, View} from 'react-native';

// TODO: 삭제 필요
const temp = {
  plans: [
    {
      id: 4,
      title: 'Plan 1',
      createdDate: '2024-12-28',
      days: [
        [
          {
            id: 19,
            placeName: '가나아트센터',
            latitude: 37.6122099878,
            longitude: 126.9751811398,
          },
          {
            id: 20,
            placeName: '간송미술관(서울 보화각)',
            latitude: 37.5936764304,
            longitude: 126.9973796423,
          },
          {
            id: 21,
            placeName: '갤러리 M',
            latitude: 37.5742729433,
            longitude: 126.9869450321,
          },
          {
            id: 22,
            placeName: '가람화랑',
            latitude: 37.5742756967,
            longitude: 126.9856034879,
          },
          {
            id: 23,
            placeName: '강서아트리움',
            latitude: 37.5376050905,
            longitude: 126.8376513443,
          },
          {
            id: 24,
            placeName: '강서별빛우주과학관',
            latitude: 37.5810885136,
            longitude: 126.8146355542,
          },
        ],
      ],
    },
    {
      id: 5,
      title: 'Plan 2',
      createdDate: '2024-12-28',
      days: [
        [
          {
            id: 25,
            placeName: '가나아트센터',
            latitude: 37.6122099878,
            longitude: 126.9751811398,
          },
          {
            id: 26,
            placeName: '간송미술관(서울 보화각)',
            latitude: 37.5936764304,
            longitude: 126.9973796423,
          },
          {
            id: 27,
            placeName: '가람화랑',
            latitude: 37.5742756967,
            longitude: 126.9856034879,
          },
          {
            id: 28,
            placeName: '갤러리 S.P',
            latitude: 37.5383633594,
            longitude: 126.9943120449,
          },
          {
            id: 29,
            placeName: '강서아트리움',
            latitude: 37.5376050905,
            longitude: 126.8376513443,
          },
          {
            id: 30,
            placeName: '강서별빛우주과학관',
            latitude: 37.5810885136,
            longitude: 126.8146355542,
          },
        ],
      ],
    },
    {
      id: 6,
      title: 'Plan 3',
      createdDate: '2024-12-28',
      days: [
        [
          {
            id: 31,
            placeName: '가나아트센터',
            latitude: 37.6122099878,
            longitude: 126.9751811398,
          },
          {
            id: 32,
            placeName: '간송미술관(서울 보화각)',
            latitude: 37.5936764304,
            longitude: 126.9973796423,
          },
          {
            id: 33,
            placeName: '가람화랑',
            latitude: 37.5742756967,
            longitude: 126.9856034879,
          },
          {
            id: 34,
            placeName: '갤러리 구루지',
            latitude: 37.4970135079,
            longitude: 126.8894255436,
          },
          {
            id: 35,
            placeName: '강서아트리움',
            latitude: 37.5376050905,
            longitude: 126.8376513443,
          },
          {
            id: 36,
            placeName: '강서별빛우주과학관',
            latitude: 37.5810885136,
            longitude: 126.8146355542,
          },
        ],
      ],
    },
  ],
};

export const SurveyResultListScreen = () => {
  return (
    <View style={tw`flex h-full flex-col gap-6 bg-[#F3F3F3] px-4`}>
      <FlatList
        data={temp.plans}
        renderItem={({item, index}) => (
          <SurveyResultItem index={index + 1} plan={item} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
