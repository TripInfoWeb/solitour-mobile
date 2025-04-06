import {useNavigation} from '@react-navigation/native';
import {BottomNextButton, OptionButton} from '@src/shared/ui/button';
import {ProgressBar} from '@src/shared/ui/progressBar';
import {tw} from '@src/shared/lib/utils';
import {NavigationProps} from '@src/shared/model';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSurveyStore} from '@src/entities/survey';

export const SurveyDayScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const {days, setSurveyState} = useSurveyStore();

  return (
    <View style={tw`h-full w-full bg-white px-4 pt-2`}>
      <ProgressBar totalProgress={4} currentProgress={1} />
      <Text style={tw`pt-8 text-2xl font-bold text-custom-01`}>
        얼마나 오랫동안
      </Text>
      <Text style={tw`pb-12 text-2xl font-bold text-custom-01`}>
        여행을 떠나고 싶나요?
      </Text>
      <FlatList
        contentContainerStyle={tw`gap-[1.125rem]`}
        columnWrapperStyle={tw`gap-2.5`}
        data={Array.from({length: 6}, (_, index) => index + 1)}
        renderItem={({item}) => (
          <OptionButton
            title={`${item}일`}
            isActive={item === days}
            onPress={() => setSurveyState({days: item})}
          />
        )}
        keyExtractor={item => item.toString()}
        numColumns={3}
      />
      <BottomNextButton
        disabled={days === 0}
        onPress={() => {
          setSurveyState({contentCategory: null});
          navigation.navigate('SurveyTheme');
        }}
      />
    </View>
  );
};
