import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {tw} from '@src/shared/lib/utils/tailwind';
import {NavigationList} from '@src/shared/model/navigation';
import {useState} from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';

const _data: IDiscoveryRecommendationItem[] = [
  {
    id: 1,
    title: '눈물의 여왕',
    imageUrl:
      'https://poc-cf-image.cjenm.com/public/share/menumng/%EB%88%88%EB%AC%BC%EC%9D%98%EC%97%AC%EC%99%95%EB%A9%94%EC%9D%B8banner960.jpg?v=1709102043',
    articleTitle: '눈물의 여왕 촬영지 3곳',
  },
  {
    id: 2,
    title: '선재 업고 튀어',
    imageUrl:
      'https://poc-cf-image.cjenm.com/public/share/menumng/%EC%84%A0%EC%9E%AC%EC%97%85%EA%B3%A0%ED%8A%80%EC%96%B4banner960.png?v=1710465873',
    articleTitle: '선재 업고 튀어 촬영지 3곳',
  },
  {
    id: 3,
    title: '도깨비',
    imageUrl:
      'https://poc-cf-image.cjenm.com/public/share/menumng/1675755583417299173177.jpg',
    articleTitle: '도깨비 촬영지 3곳',
  },
];

const RecommendationDiscovery = () => {
  const [selectedRecommendation, setSelectedRecommendation] =
    useState<IDiscoveryRecommendationItem>(_data[0]);
  const navigation = useNavigation<NativeStackNavigationProp<NavigationList>>();

  return (
    <View style={tw`mt-[3.25rem] flex w-full flex-col px-4`}>
      <Text
        style={[
          tw`text-[1.25rem] font-extrabold text-custom-01`,
          {letterSpacing: -0.32},
        ]}>
        솔리님을 위한 추천
      </Text>
      <View style={tw`flex gap-x-[0.375rem] pb-[1.25rem] pt-[1.5rem]`}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={tw`flex-row gap-x-[0.375rem]`}>
          {_data.map((i: IDiscoveryRecommendationItem, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedRecommendation(i)}
              style={tw`h-[2.3125rem] rounded-[1.125rem] px-[1.125rem] py-[0.3125rem] ${
                selectedRecommendation.title === i.title
                  ? 'bg-primary-green border border-primary-green' // active일 때 테두리 색상만 변경
                  : 'bg-white border border-outline-01' // 기본 테두리
              }`}>
              <Text
                style={tw`${
                  selectedRecommendation.title === i.title
                    ? 'text-white'
                    : 'text-custom-01'
                }`}>
                #{i.title}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        <Pressable
          onPress={() =>
            navigation.navigate('DiscoveryStack', {
              screen: 'DiscoveryDetail', // DiscoveryStack 내부의 화면 지정
              params: {recommendation: selectedRecommendation}, // 전달할 파라미터
            })
          }
          style={tw`mt-[1.25rem] w-full`}>
          <Image
            source={{uri: selectedRecommendation.imageUrl}}
            style={tw`h-[249px] w-[343px] rounded-[12px]`}
          />
          <Text style={tw`mt-4 text-[1.25rem] font-semibold text-gray-800`}>
            {selectedRecommendation.articleTitle}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
export default RecommendationDiscovery;
