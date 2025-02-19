import {useNavigation} from '@react-navigation/native';
import {SurveyButton} from '@src/components/survey/common/SurveyButton';
import {SurveyNextButton} from '@src/components/survey/common/SurveyNextButton';
import {SurveyProgressBar} from '@src/components/survey/common/SurveyProgressBar';
import {ACTIVITY} from '@src/constants/activity';
import {tw} from '@src/libs/tailwind';
import {useSurveyStore} from '@src/stores/surveyStore';
import {NavigationProps} from '@src/types/navigation';
import React from 'react';
import {FlatList, Text, View} from 'react-native';

export const SurveyActivityScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const {preferredTrips, setSurveyState} = useSurveyStore();

  return (
    <View style={tw`h-full w-full bg-white px-4 pt-2`}>
      <SurveyProgressBar totalProgress={4} currentProgress={4} />
      <Text style={tw`pt-8 text-2xl font-bold text-custom-01`}>여행에서</Text>
      <Text style={tw`text-2xl font-bold text-custom-01`}>
        무엇을 하고 싶나요?
      </Text>
      <Text style={tw`pb-12 pt-1.5 text-custom-03`}>여러 개 선택 가능해요</Text>
      <FlatList
        contentContainerStyle={tw`gap-[1.125rem] pb-20`}
        columnWrapperStyle={tw`gap-2.5`}
        data={ACTIVITY}
        renderItem={({item}) => (
          <SurveyButton
            title={item.title}
            isActive={preferredTrips.includes(item.activity)}
            onPress={() => {
              if (preferredTrips.includes(item.activity)) {
                setSurveyState({
                  preferredTrips: preferredTrips.filter(
                    preferredTrip => preferredTrip !== item.activity,
                  ),
                });
              } else {
                setSurveyState({
                  preferredTrips: [...preferredTrips, item.activity],
                });
              }
            }}
          />
        )}
        keyExtractor={item => item.activity}
        numColumns={2}
      />
      <SurveyNextButton
        disabled={preferredTrips.length === 0}
        onPress={() => navigation.navigate('SurveyLoading')}
      />
    </View>
  );
};
