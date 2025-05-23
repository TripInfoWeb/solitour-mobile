import {useNavigation} from '@react-navigation/native';
import {BottomNextButton, OptionButton} from '@src/shared/ui/button';
import {ProgressBar} from '@src/shared/ui/progressBar';
import {tw} from '@src/shared/lib/utils';
import {CONTENT_CATEGORY, useSurveyStore} from '@src/entities/survey';
import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';

export const SurveyThemeScreen = () => {
  const navigation = useNavigation();
  const {contentCategory, setSurveyState} = useSurveyStore();

  return (
    <View style={tw`h-full w-full bg-white px-4 pt-2`}>
      <ProgressBar totalProgress={4} currentProgress={2} />
      <Text style={tw`pt-8 text-2xl font-bold text-custom-01`}>
        어떤 테마의
      </Text>
      <Text style={tw`pb-12 text-2xl font-bold text-custom-01`}>
        여행을 떠나고 싶나요?
      </Text>
      <SafeAreaView>
        <FlatList
          style={tw`gap-2.5`}
          columnWrapperStyle={tw`gap-2.5`}
          contentContainerStyle={tw`gap-4`}
          data={CONTENT_CATEGORY}
          renderItem={({item}) => (
            <OptionButton
              title={item.title}
              isActive={contentCategory === item.category}
              onPress={() => setSurveyState({contentCategory: item.category})}
            />
          )}
          keyExtractor={item => item.category}
          numColumns={2}
        />
      </SafeAreaView>
      <BottomNextButton
        disabled={contentCategory === null}
        onPress={() => {
          setSurveyState({contentTitles: []});
          navigation.navigate('SurveyContent');
        }}
      />
    </View>
  );
};
