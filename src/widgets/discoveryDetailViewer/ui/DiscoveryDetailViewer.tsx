import React from 'react';
import {useRoute} from '@react-navigation/native';
import {tw} from '@src/shared/lib/utils';
import {useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';

// NOTE: 나중에 데이터 타입하고 아래 임시 데이터 삭제 필요
interface IDiscoveryItemPlaces {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  xAxis?: string | number;
  yAxis?: string | number;
}

const _places: IDiscoveryItemPlaces[] = [
  {
    id: 1,
    name: '오동근린공원',
    imageUrl:
      'https://poc-cf-image.cjenm.com/public/share/menumng/%EB%88%88%EB%AC%BC%EC%9D%98%EC%97%AC%EC%99%95%EB%A9%94%EC%9D%B8banner960.jpg?v=1709102043',
    description:
      '가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사',
  },
  {
    id: 2,
    name: '오동근린공원1',
    imageUrl:
      'https://poc-cf-image.cjenm.com/public/share/menumng/%EB%88%88%EB%AC%BC%EC%9D%98%EC%97%AC%EC%99%95%EB%A9%94%EC%9D%B8banner960.jpg?v=1709102043',
    description: '가나다라마바사',
  },
  {
    id: 3,
    name: '오동근린공원2',
    imageUrl:
      'https://poc-cf-image.cjenm.com/public/share/menumng/%EB%88%88%EB%AC%BC%EC%9D%98%EC%97%AC%EC%99%95%EB%A9%94%EC%9D%B8banner960.jpg?v=1709102043',
    description: '가나다라마바사',
  },
];

export const DiscoveryDetailViewer = () => {
  const route = useRoute();
  // TODO: 데이터를 API를 보내서 받아오는 작업 추가
  const {recommendation} = route.params as {recommendation: IDiscoveryItem};
  const [selectedPlace, setSelectedPlace] = useState<IDiscoveryItemPlaces>(
    _places[0],
  );

  // style 관련
  return (
    <View style={tw`flex-1`}>
      <Image
        source={{uri: recommendation.imageUrl}}
        style={tw`absolute z-[-1] aspect-[4/3] w-full`}
        resizeMode="stretch"
      />
      <ScrollView>
        <View
          style={tw.style('w-full opacity-0', {
            height: (Dimensions.get('window').width * 3) / 4 - 16,
          })}
        />
        <View style={tw`rounded-4 bg-white px-4`}>
          <Text style={tw`mt-4 text-[1.25rem] font-semibold text-gray-800`}>
            {recommendation.articleTitle}
          </Text>
          <Text style={tw`mt-5 text-[0.875rem] font-semibold text-gray-800`}>
            {recommendation.articleDescription}
          </Text>
          <View style={tw`flex gap-x-[0.375rem] pb-[1.25rem] pt-[1.5rem]`}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={tw`flex-row gap-x-[0.375rem]`}>
              {_places.map(i => (
                <Pressable
                  key={i.id}
                  onPress={() => setSelectedPlace(i)}
                  style={tw.style(
                    selectedPlace.name === i.name
                      ? 'border border-primary-green bg-primary-green' // active일 때 테두리 색상만 변경
                      : 'border border-outline-01 bg-white', // 기본 테두리
                    'h-[2.3125rem] rounded-[1.125rem] px-[1.125rem] py-[0.3125rem]',
                  )}>
                  <Text
                    style={tw`${
                      selectedPlace.name === i.name
                        ? 'text-white'
                        : 'text-custom-01'
                    }`}>
                    #{i.name}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
            <View style={tw`mt-[1.25rem] w-full`}>
              <Image
                source={{uri: selectedPlace.imageUrl}}
                style={[tw`rounded-3 w-full`, {aspectRatio: 4 / 3}]}
              />
              <Text
                style={tw`mt-4 text-[0.875rem] font-semibold text-gray-800`}>
                {selectedPlace.description}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
