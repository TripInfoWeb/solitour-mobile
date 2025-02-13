import { tw } from '@src/libs/tailwind';
import { Pressable, Text, View } from 'react-native';

interface IData {
  title: string;
  tags: string[]
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

interface ITopDiscoveryKeywordList {

}
const TopDiscoveryKeywordList = (props: ITopDiscoveryKeywordList) => {
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
        {_data.map((i: IData, index) => (
          <Pressable style={tw`border-[#E9EBED] w-full border-b pb-1`}>
            <View style={tw`flex flex-row px-3 py-[0.625rem]`}>
              <View style={tw`flex w-[2.625rem] justify-center`}>
                <Text style={tw`text-[1.25rem] font-bold`}>{index + 1}</Text>
              </View>
              <View style={tw`mr-[0.375rem] flex justify-center`}>
                <Text style={tw`text-md font-semibold`}> {i.title} </Text>
              </View>
              <View style={tw`flex flex-row items-center gap-x-1`}>
                {i.tags.map(j => (
                  <Text
                    style={[
                      tw`text-sm text-custom-03`,
                      {letterSpacing: -0.16},
                    ]}>
                    #{j}
                  </Text>
                ))}
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};
export default TopDiscoveryKeywordList;
