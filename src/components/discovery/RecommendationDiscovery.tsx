import { tw } from '@src/libs/tailwind';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

interface IRecommendationDiscovery {}

interface I_data {
  title: string;
  imageUrl: string;
  description: string;
}

const _data = [
  {
    title: '눈물의 여왕',
    imageUrl: 'https://poc-cf-image.cjenm.com/public/share/menumng/%EB%88%88%EB%AC%BC%EC%9D%98%EC%97%AC%EC%99%95%EB%A9%94%EC%9D%B8banner960.jpg?v=1709102043',
    description: '운명처럼 다시 만난 사랑',
  },
  {
    title: '선재 업고 튀어',
    imageUrl: 'https://poc-cf-image.cjenm.com/public/share/menumng/%EC%84%A0%EC%9E%AC%EC%97%85%EA%B3%A0%ED%8A%80%EC%96%B4banner960.png?v=1710465873',
    description: '위험 속에서 피어난 로맨스',
  },
  {
    title: '도깨비',
    imageUrl: 'https://poc-cf-image.cjenm.com/public/share/menumng/1675755583417299173177.jpg',
    description: '불멸의 삶과 애절한 사랑',
  },
];

const RecommendationDiscovery = (props: IRecommendationDiscovery) => {
  const [selectedRecommendation, setSelectedRecommendation] = useState<I_data>(
    _data[0],
  );

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
          {_data.map((i: I_data, index) => (
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
        <View style={tw`mt-[1.25rem] w-full`}>
          <Image
            source={{uri: selectedRecommendation.imageUrl}}
            style={tw`h-[249px] w-[343px] rounded-[12px]`}
          />
          <Text style={tw`mt-4 text-[1.25rem] font-semibold text-gray-800`}>
            {selectedRecommendation.description}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default RecommendationDiscovery;
