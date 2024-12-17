import React, {useCallback, useRef, useState} from 'react';
import {Image, Pressable, ScrollView, Text, TextInput} from 'react-native';
import {tw} from '../../libs/tailwind';
import {COLOR} from '../../constants/color';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {DiaryFeelingBottomSheetModal} from '../../components/diary/DiaryFeelingBottomSheetModal';
import {DiaryLocationBottomSheetModal} from '../../components/diary/DiaryLocationBottomSheetModal';

export const DiaryEditorScreen = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState<string | null>(null);
  const [feeling, setFeeling] = useState<string | null>(null);
  const [content, setContent] = useState('');
  const locationBottomSheetModalRef = useRef<BottomSheetModal>(null);
  const feelingBottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentLocationModalPress = useCallback(() => {
    locationBottomSheetModalRef.current?.present();
  }, []);

  const handlePresentFeelingModalPress = useCallback(() => {
    feelingBottomSheetModalRef.current?.present();
  }, []);

  return (
    <BottomSheetModalProvider>
      <ScrollView style={tw`bg-white px-4 pt-6`}>
        <TextInput
          style={tw`text-lg font-semibold`}
          placeholder="제목을 입력해 주세요."
          value={title}
          onChangeText={setTitle}
        />
        <Pressable
          style={({pressed}) =>
            tw.style([
              pressed ? 'ios:bg-slate-100' : '',
              'flex h-12 flex-row items-center gap-[1.125rem] text-gray-200',
            ])
          }
          android_ripple={{color: COLOR.GRAY_RIPPLE}}>
          <Image
            style={tw`h-4 w-4`}
            source={require('../../assets/diary/date.png')}
          />
          <Text style={tw`text-gray-500`}>날짜</Text>
        </Pressable>
        <Pressable
          style={({pressed}) =>
            tw.style([
              pressed ? 'ios:bg-slate-100' : '',
              'flex h-12 flex-row items-center gap-[1.125rem] text-gray-200',
            ])
          }
          android_ripple={{color: COLOR.GRAY_RIPPLE}}
          onPress={handlePresentLocationModalPress}>
          <Image
            style={tw`h-[1.15625rem] w-4`}
            source={require('../../assets/diary/location.png')}
          />
          <Text
            style={tw.style(location ? 'text-primary-green' : 'text-gray-500')}>
            {location ?? '장소'}
          </Text>
        </Pressable>
        <Pressable
          style={({pressed}) =>
            tw.style([
              pressed ? 'ios:bg-slate-100' : '',
              'flex h-12 flex-row items-center gap-[1.125rem] text-gray-200',
            ])
          }
          android_ripple={{color: COLOR.GRAY_RIPPLE}}
          onPress={handlePresentFeelingModalPress}>
          <Image
            style={tw`h-4 w-4`}
            source={require('../../assets/diary/feeling.png')}
          />
          <Text
            style={tw.style(feeling ? 'text-primary-green' : 'text-gray-500')}>
            {feeling ?? '기분'}
          </Text>
        </Pressable>
        <TextInput
          style={tw`my-11`}
          multiline={true}
          textAlignVertical="top"
          placeholder="여행은 어땠나요? 자유롭게 기록하고 싶은 것들을 작성해보세요."
          value={content}
          onChangeText={setContent}
        />
      </ScrollView>
      <DiaryLocationBottomSheetModal
        ref={locationBottomSheetModalRef}
        location={location}
        setLocation={(value: string) => setLocation(value)}
        closeBottomSheetModal={() =>
          locationBottomSheetModalRef.current?.close({duration: 300})
        }
      />
      <DiaryFeelingBottomSheetModal
        ref={feelingBottomSheetModalRef}
        feeling={feeling}
        setFeeling={(value: string) => setFeeling(value)}
        closeBottomSheetModal={() =>
          feelingBottomSheetModalRef.current?.close({duration: 300})
        }
      />
    </BottomSheetModalProvider>
  );
};
