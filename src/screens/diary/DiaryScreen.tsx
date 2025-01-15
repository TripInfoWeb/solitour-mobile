import React, {Suspense, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {tw} from '@src/libs/tailwind';
import {DiaryList} from '@src/components/diary/list/DiaryList';
import {DiaryListSkeleton} from '@src/components/skeleton/diary/DiaryListSkeleton';

// type State = {
//   year: number;
//   month: number;
// };

// type Action = {type: 'PREV'} | {type: 'NEXT'};

// const reducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case 'PREV':
//       return {
//         year: state.year - (state.month === 1 ? 1 : 0),
//         month: state.month === 1 ? 12 : state.month - 1,
//       };
//     case 'NEXT':
//       return {
//         year: state.year + (state.month === 12 ? 1 : 0),
//         month: state.month === 12 ? 1 : state.month + 1,
//       };
//     default:
//       throw new Error('Unknown action type');
//   }
// };

// const date = new Date();

// // TODO: 삭제 필요
// const examples = [
//   {
//     diaryId: 1,
//     title: '나 홀로 제주여행',
//     period: '2024. 12. 3 - 2024. 12. 12.',
//     image: require('@src/assets/test/diary-example.png'),
//   },
//   {
//     diaryId: 2,
//     title: '나 홀로 제주여행',
//     period: '2024. 12. 3 - 2024. 12. 12.',
//     image: require('@src/assets/test/diary-example.png'),
//   },
//   {
//     diaryId: 3,
//     title: '나 홀로 제주여행',
//     period: '2024. 12. 3 - 2024. 12. 12.',
//     image: require('@src/assets/test/diary-example.png'),
//   },
//   {
//     diaryId: 4,
//     title: '나 홀로 제주여행',
//     period: '2024. 12. 3 - 2024. 12. 12.',
//     image: require('@src/assets/test/diary-example.png'),
//   },
// ];

export const DiaryScreen = () => {
  // const {width} = useWindowDimensions();
  // const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, {
  //   year: date.getFullYear(),
  //   month: date.getMonth() + 1,
  // });

  const [page, setPage] = useState(0);

  return (
    <View style={tw`flex h-full flex-col items-center bg-white`}>
      <View style={tw.style('flex flex-row items-center gap-2 pt-[2.625rem]')}>
        <Pressable
          style={({pressed}) => {
            return tw.style([pressed ? 'bg-slate-100' : '', 'rounded-2xl p-2']);
          }}
          onPress={() => setPage(value => value - 1)}>
          <Image
            style={tw`h-6 w-6`}
            source={require('@src/assets/common/chevronLeft.png')}
          />
        </Pressable>
        <Text style={tw`text-2xl font-bold`}>{page}</Text>
        <Pressable
          style={({pressed}) => {
            return tw.style([pressed ? 'bg-slate-100' : '', 'rounded-2xl p-2']);
          }}
          onPress={() => setPage(value => value + 1)}>
          <Image
            style={tw`h-6 w-6`}
            source={require('@src/assets/common/chevronRight.png')}
          />
        </Pressable>
      </View>
      <Suspense fallback={<DiaryListSkeleton />}>
        <DiaryList page={page} />
      </Suspense>
    </View>
  );
};
