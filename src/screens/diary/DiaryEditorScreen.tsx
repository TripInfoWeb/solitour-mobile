import React, {useCallback, useRef, useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {tw} from '../../libs/tailwind';
import {COLOR} from '../../constants/color';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

export const DiaryEditorScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
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
          android_ripple={{color: COLOR.GRAY_RIPPLE}}
          onPress={handlePresentModalPress}>
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
          android_ripple={{color: COLOR.GRAY_RIPPLE}}>
          <Image
            style={tw`h-[1.15625rem] w-4`}
            source={require('../../assets/diary/location.png')}
          />
          <Text style={tw`text-gray-500`}>장소</Text>
        </Pressable>
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
            source={require('../../assets/diary/feeling.png')}
          />
          <Text style={tw`text-gray-500`}>기분</Text>
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
      <BottomSheetModal
        ref={bottomSheetModalRef}
        style={tw`rounded-2xl shadow-2xl`}
        snapPoints={[340]}>
        <BottomSheetView style={tw`h-80 px-5`}>
          <View style={tw`flex flex-row items-center justify-between`}>
            <Text style={tw`text-[1.375rem] font-semibold`}>기분</Text>
            <Pressable
              style={({pressed}) =>
                tw.style([pressed ? 'ios:bg-slate-100' : '', 'rounded-2xl p-2'])
              }
              android_ripple={{color: COLOR.GRAY_RIPPLE}}>
              <Image
                style={tw`h-4 w-4`}
                source={require('../../assets/common/close.png')}
              />
            </Pressable>
          </View>
          <View style={tw`flex flex-row items-center pt-6`}>
            <Pressable
              style={({pressed}) =>
                tw.style([
                  pressed ? 'ios:bg-green-100' : '',
                  'flex w-[6.5rem] flex-col items-center gap-1 py-1',
                ])
              }
              android_ripple={{color: COLOR.GREEN_RIPPLE}}>
              <Image
                style={tw`h-10 w-8`}
                source={require('../../assets/diary/feeling1.png')}
              />
              <Text style={tw`text-gray-500`}>최고</Text>
            </Pressable>
            <Pressable
              style={({pressed}) =>
                tw.style([
                  pressed ? 'ios:bg-green-100' : '',
                  'flex w-[6.5rem] flex-col items-center gap-1 py-1',
                ])
              }
              android_ripple={{color: COLOR.GREEN_RIPPLE}}>
              <Image
                style={tw`h-10 w-8`}
                source={require('../../assets/diary/feeling2.png')}
              />
              <Text style={tw`text-gray-500`}>좋아</Text>
            </Pressable>
            <Pressable
              style={({pressed}) =>
                tw.style([
                  pressed ? 'ios:bg-green-100' : '',
                  'flex w-[6.5rem] flex-col items-center gap-1 py-1',
                ])
              }
              android_ripple={{color: COLOR.GREEN_RIPPLE}}>
              <Image
                style={tw`h-10 w-8`}
                source={require('../../assets/diary/feeling3.png')}
              />
              <Text style={tw`text-gray-500`}>무난</Text>
            </Pressable>
          </View>
          <View style={tw`flex flex-row items-center pt-6`}>
            <Pressable
              style={({pressed}) =>
                tw.style([
                  pressed ? 'ios:bg-green-100' : '',
                  'flex w-[6.5rem] flex-col items-center gap-1 py-1',
                ])
              }
              android_ripple={{color: COLOR.GREEN_RIPPLE}}>
              <Image
                style={tw`h-10 w-8`}
                source={require('../../assets/diary/feeling4.png')}
              />
              <Text style={tw`text-gray-500`}>슬퍼</Text>
            </Pressable>
            <Pressable
              style={({pressed}) =>
                tw.style([
                  pressed ? 'ios:bg-green-100' : '',
                  'flex w-[6.5rem] flex-col items-center gap-1 py-1',
                ])
              }
              android_ripple={{color: COLOR.GREEN_RIPPLE}}>
              <Image
                style={tw`h-10 w-8`}
                source={require('../../assets/diary/feeling5.png')}
              />
              <Text style={tw`text-gray-500`}>화나</Text>
            </Pressable>
          </View>
          <Pressable
            style={({pressed}) => {
              return tw.style([
                pressed
                  ? 'android:bg-primary-green ios:bg-primary-green-ripple'
                  : 'bg-primary-green',
                'absolute bottom-6 left-4 right-4 flex h-12 items-center justify-center rounded-lg',
              ]);
            }}
            android_ripple={{color: COLOR.PRIMARY_GREEN_RIPPLE}}>
            <Text style={tw`text-lg font-semibold text-white`}>선택하기</Text>
          </Pressable>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};
