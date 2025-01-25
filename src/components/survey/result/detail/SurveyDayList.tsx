import {tw} from '@src/libs/tailwind';
import React from 'react';
import {FlatList, Pressable, Text} from 'react-native';

interface SurveyDayListProps {
  currentDay: number;
  totalDays: number;
  setDay: (day: number) => void;
}

export const SurveyDayList = ({
  currentDay,
  totalDays,
  setDay,
}: SurveyDayListProps) => {
  return (
    <FlatList
      style={tw`py-4`}
      contentContainerStyle={tw`gap-1.5`}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={Array.from({length: totalDays}, (_, index) => index + 1)}
      renderItem={({item}) => (
        <Pressable
          style={({pressed}) =>
            tw.style(
              pressed || item === currentDay + 1
                ? 'border-primary-green bg-primary-green'
                : 'border-custom-gray bg-white',
              'flex h-10 w-20 items-center justify-center rounded-full border',
            )
          }
          onPress={() => setDay(item - 1)}>
          {({pressed}) => (
            <Text
              style={tw.style(
                pressed || item === currentDay + 1
                  ? 'text-white'
                  : 'text-custom-01',
                'text-center',
              )}>
              day {item}
            </Text>
          )}
        </Pressable>
      )}
      keyExtractor={item => item.toString()}
    />
  );
};
