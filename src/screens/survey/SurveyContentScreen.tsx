import {useNavigation} from '@react-navigation/native';
import {SurveyContentItem} from '@src/components/survey/SurveyContentItem';
import {SurveyNextButton} from '@src/components/survey/SurveyNextButton';
import {tw} from '@src/libs/tailwind';
import {NavigationProps} from '@src/types/navigation';
import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';

export const SurveyContentScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const [content, setContent] = useState<string | null>(null);

  return (
    <View style={tw`h-full w-full bg-white px-4 pt-10`}>
      <View style={tw`flex flex-row items-center gap-1.5`}>
        <View style={tw`h-2.5 flex-1 rounded-lg bg-primary-green`} />
        <View style={tw`h-2.5 flex-1 rounded-lg bg-primary-green`} />
        <View style={tw`h-2.5 flex-1 rounded-lg bg-custom-gray`} />
      </View>
      <Text style={tw`pt-8 text-2xl font-bold text-custom-01`}>
        어떤 예능의 {/* TODO */}
      </Text>
      <Text style={tw`pb-12 text-2xl font-bold text-custom-01`}>
        여행지로 떠나볼까요?
      </Text>
      <FlatList
        contentContainerStyle={tw`gap-[1.125rem] pb-20`}
        columnWrapperStyle={tw`gap-2.5`}
        data={[
          '나 혼자 산다',
          '런닝맨',
          '전현무계획',
          '독박투어',
          '1',
          '2',
          '3',
          '4',
        ]}
        renderItem={({item}) => (
          <SurveyContentItem
            title={item}
            isActive={content === item}
            onPress={() => setContent(item)}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
      />
      <SurveyNextButton
        disabled={content === null}
        onPress={() => navigation.navigate('SurveyActivity')}
      />
    </View>
  );
};
