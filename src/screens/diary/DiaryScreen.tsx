import React, {Reducer, useReducer} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {tw} from '../../libs/tailwind';

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

export const DiaryScreen = () => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  });

  return (
    <View style={tw`flex h-full flex-col items-center bg-white`}>
      <View style={tw`flex flex-row items-center gap-2 pt-10`}>
        <Pressable
          style={({pressed}) => {
            return tw.style([pressed ? 'bg-slate-100' : '', 'rounded-2xl p-2']);
          }}
          onPress={() => dispatch({type: 'PREV'})}>
          <Image
            style={tw`h-6 w-6`}
            source={require('../../assets/common/chevronLeft.png')}
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
            source={require('../../assets/common/chevronRight.png')}
          />
        </Pressable>
      </View>
      <View style={tw`flex flex-col gap-[1.125rem] pt-[4.25rem]`}>
        <View style={tw`h-[7.5rem] rounded-lg bg-gray-100`} />
        <Text>아직 저장된 일기가 없어요</Text>
      </View>
    </View>
  );
};
