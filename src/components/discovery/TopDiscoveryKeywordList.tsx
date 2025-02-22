import { tw } from '@src/libs/tailwind';
import { useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';

interface IData {
  title: string;
  tags: string[];
}
const _data = [
  {
    title: '기생충',
    tags: ['지하문터널', '아현동우리슈퍼'],
  },
  {
    title: '스물다섯 스물하나',
    tags: ['오동근린공원', '마로니에공원'],
  },
  {
    title: '환승연애3',
    tags: ['서울레코드', '마이페이보릿띵'],
  },
  {
    title: '방탄소년단',
    tags: ['경복궁', '여의도한강공원', '을지로'],
  },
  {
    title: '선재업고튀어',
    tags: ['성산로22길', '성북천'],
  },
];

const AnimatedView = Animated.createAnimatedComponent(View);
const rotateAnims = _data.map(() => useRef(new Animated.Value(0)).current);

const TopDiscoveryKeywordList = () => {

useEffect(() => {
  rotateAnims.forEach((anim, index) => {
    // 🎯 초기 애니메이션 (딱 1회 실행)
    Animated.sequence([
      Animated.delay(index * 200), // 0.2초 간격으로 초기에 다르게 실행되게
      Animated.timing(anim, {
        toValue: 1,
        duration: 2000, // 2초 동안 실행
        useNativeDriver: true,
      }),
      Animated.delay(20000 + index * 1800), // 30초 대기
      Animated.timing(anim, {
        toValue: 0,
        duration: 0, // 즉시 초기화
        useNativeDriver: true,
      }),
    ]).start(() => {
      // 🎯 루프 애니메이션 (초기 딜레이 없이 무한 반복)
      Animated.loop(
        Animated.sequence([
          Animated.timing(anim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.delay(20000),
          Animated.timing(anim, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    });
  });

  return () => rotateAnims.forEach(anim => anim.setValue(0)); // 언마운트 시 초기화

}, []);



  return (
    <View style={tw`flex w-full flex-col px-4`}>
      <Text
        style={[
          tw`text-[1.5rem] font-extrabold text-custom-01`,
          {letterSpacing: -0.32},
        ]}>
        TOP 5 KEYWORD
      </Text>
      <View style={tw`flex w-full flex-col gap-y-1 pt-[0.875rem]`}>
        {_data.map((i: IData, index) => {
          const rotateX = rotateAnims[index].interpolate({
            inputRange: [0, 1],
            outputRange: ['90deg', '0deg'],
          });

          return (
            <AnimatedView
              key={index}
              style={[
                tw`w-full border-b border-[#E9EBED] pb-1`,
                {transform: [{rotateX}]},
              ]}>
              <View style={tw`flex flex-row px-3 py-[0.625rem]`}>
                <View style={tw`flex w-[2.625rem] justify-center`}>
                  <Text style={tw`text-[1.25rem] font-bold`}>{index + 1}</Text>
                </View>
                <View style={tw`mr-[0.375rem] flex justify-center`}>
                  <Text style={tw`text-md font-semibold`}>{i.title}</Text>
                </View>
                <View style={tw`flex flex-row items-center gap-x-1`}>
                  {i.tags.map((j, tagIndex) => (
                    <Text
                      key={tagIndex}
                      style={[
                        tw`text-sm text-custom-03`,
                        {letterSpacing: -0.16},
                      ]}>
                      #{j}
                    </Text>
                  ))}
                </View>
              </View>
            </AnimatedView>
          );
        })}
      </View>
    </View>
  );
};

export default TopDiscoveryKeywordList;
