import {
  CodeBridge,
  RichText,
  TenTapStartKit,
  useEditorBridge,
} from '@10play/tentap-editor';
import {FEELING_IMAGE} from '@src/constants/feelingImage';
import {useCardFlipAnimation} from '@src/hooks/diary/list/useCardFlipAnimation';
import {tw} from '@src/libs/tailwind';
import React from 'react';
import {Animated, Image, ImageBackground, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {DiaryCardMenu} from './DiaryCardMenu';
import {DiaryDetail} from '@src/types/diary';

interface DiaryCardProps {
  diary: DiaryDetail;
}

export const DiaryCard = ({diary}: DiaryCardProps) => {
  const {interpolate, isTail, flipCard} = useCardFlipAnimation();
  const editor = useEditorBridge({
    avoidIosKeyboard: true,
    initialContent:
      diary.diaryDayContentResponses.diaryDayContentDetail[0].content,
    editable: false,
    bridgeExtensions: [
      ...TenTapStartKit,
      CodeBridge.configureCSS(
        'p { font-size: 0.875rem; line-height: 0.5rem; }',
      ),
    ],
  });

  // 뒷면
  if (isTail) {
    return (
      <View style={tw`px-3 pb-5`}>
        <Animated.View
          style={tw.style(
            'h-[26rem] w-[17.75rem] rounded-xl border border-gray-200 bg-custom-lightGray p-6',
            {
              transform: [{rotateY: interpolate}, {perspective: 1000}],
            },
          )}
          onTouchEnd={() => flipCard()}>
          <View style={tw`flex flex-row items-center justify-between`}>
            <View style={tw`flex flex-row items-center gap-2`}>
              <Image
                style={tw`h-[1.1875rem] w-4`}
                source={require('@src/assets/diary/location-active.png')}
              />
              <Text style={tw`text-gray-500`}>
                {diary.diaryDayContentResponses.diaryDayContentDetail[0].place}
              </Text>
            </View>
            <DiaryCardMenu diary={diary} />
          </View>
          <Image
            style={tw`mt-10 h-[4.375rem] w-14`}
            source={
              FEELING_IMAGE[
                diary.diaryDayContentResponses.diaryDayContentDetail[0]
                  .feelingStatus
              ]
            }
          />
          <Text style={tw`pt-5 text-lg font-bold`}>{diary.title}</Text>
          <Text
            style={tw`text-gray-500`}>{`${new Date(`${diary.startDatetime}.0Z`).toLocaleDateString()} - ${new Date(`${diary.endDatetime}.0Z`).toLocaleDateString()}`}</Text>
          <RichText style={tw`mt-2`} editor={editor} />
        </Animated.View>
      </View>
    );
  }

  // 앞면
  return (
    <View style={tw`px-3 pb-5`}>
      <Animated.View
        style={tw.style(
          'relative h-[26rem] w-[17.75rem] rounded-xl border border-gray-200',
          {
            transform: [{rotateY: interpolate}, {perspective: 1000}],
          },
        )}
        onTouchEnd={() => flipCard()}>
        <ImageBackground
          style={tw`flex-1`}
          imageStyle={tw`rounded-xl`}
          source={{uri: diary.titleImage}}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['rgba(17, 17, 17, 0)', 'rgba(17, 17, 17, 0.5)']}
          style={tw`absolute bottom-0 flex h-[11.5rem] w-full rounded-b-xl`}
        />
        <View style={tw`absolute bottom-[1.875rem] flex flex-col gap-1 px-8`}>
          <Text style={tw`text-xl font-semibold text-white`}>
            {diary.title}
          </Text>
          <Text
            style={tw`text-sm text-white`}>{`${new Date(`${diary.startDatetime}.0Z`).toLocaleDateString()} - ${new Date(`${diary.endDatetime}.0Z`).toLocaleDateString()}`}</Text>
        </View>
      </Animated.View>
    </View>
  );
};
