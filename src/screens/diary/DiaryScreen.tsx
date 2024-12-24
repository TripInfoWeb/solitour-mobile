import React, {Reducer, useReducer} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {tw} from '@src/libs/tailwind';
import {DiaryCard} from '@src/components/diary/list/DiaryCard';

type State = {
  year: number;
  month: number;
};

type Action = {type: 'PREV'} | {type: 'NEXT'};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'PREV':
      return {
        year: state.year - (state.month === 1 ? 1 : 0),
        month: state.month === 1 ? 12 : state.month - 1,
      };
    case 'NEXT':
      return {
        year: state.year + (state.month === 12 ? 1 : 0),
        month: state.month === 12 ? 1 : state.month + 1,
      };
    default:
      throw new Error('Unknown action type');
  }
};

const date = new Date();

// TODO: 삭제 필요
const examples = [
  {
    diaryId: 1,
    title: '나 홀로 제주여행',
    period: '2024. 12. 3 - 2024. 12. 12.',
    image: require('@src/assets/test/diary-example.png'),
  },
  {
    diaryId: 2,
    title: '나 홀로 제주여행',
    period: '2024. 12. 3 - 2024. 12. 12.',
    image: require('@src/assets/test/diary-example.png'),
  },
  {
    diaryId: 3,
    title: '나 홀로 제주여행',
    period: '2024. 12. 3 - 2024. 12. 12.',
    image: require('@src/assets/test/diary-example.png'),
  },
  {
    diaryId: 4,
    title: '나 홀로 제주여행',
    period: '2024. 12. 3 - 2024. 12. 12.',
    image: require('@src/assets/test/diary-example.png'),
  },
];

export const DiaryScreen = () => {
  const {width} = useWindowDimensions();
  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  });

  return (
    <View style={tw`flex h-full flex-col items-center bg-white`}>
      <View style={tw.style('flex flex-row items-center gap-2 pt-[2.625rem]')}>
        <Pressable
          style={({pressed}) => {
            return tw.style([pressed ? 'bg-slate-100' : '', 'rounded-2xl p-2']);
          }}
          onPress={() => dispatch({type: 'PREV'})}>
          <Image
            style={tw`h-6 w-6`}
            source={require('@src/assets/common/chevronLeft.png')}
          />
        </Pressable>
        <Text
          style={tw`text-2xl font-bold`}>{`${state.year}. ${state.month}월`}</Text>
        <Pressable
          style={({pressed}) => {
            return tw.style([pressed ? 'bg-slate-100' : '', 'rounded-2xl p-2']);
          }}
          onPress={() => dispatch({type: 'NEXT'})}>
          <Image
            style={tw`h-6 w-6`}
            source={require('@src/assets/common/chevronRight.png')}
          />
        </Pressable>
      </View>
      {/* TODO: 수정 필요 */}
      {state.year === 2025 && state.month === 1 ? (
        <FlatList
          style={tw`flex-grow-0 pt-7`}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentOffset={{
            x:
              examples.length % 2 === 0
                ? (308 * (examples.length - 1) - width) / 2
                : (308 * examples.length - width) / 2,
            y: 0,
          }}
          data={examples}
          renderItem={({item}) => (
            <DiaryCard
              title={item.title}
              period={item.period}
              image={item.image}
            />
          )}
          keyExtractor={item => item.diaryId.toString()}
        />
      ) : (
        <View
          style={tw`flex flex-col items-center gap-[1.125rem] pt-[8.375rem]`}>
          <Image
            style={tw`ml-[0.3125rem] h-16 w-16`}
            source={require('@src/assets/diary/diary-empty.png')}
          />
          <Text>아직 저장된 일기가 없어요</Text>
        </View>
      )}
    </View>
  );
};
