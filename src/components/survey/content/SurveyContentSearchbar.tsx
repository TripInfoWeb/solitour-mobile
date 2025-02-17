import {COLOR} from '@src/constants/color';
import {tw} from '@src/libs/tailwind';
import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {Image, TextInput, View} from 'react-native';

export const SurveyContentSearchbar = () => {
  const formContext = useFormContext<{title: string}>();

  return (
    <Controller
      name="title"
      control={formContext.control}
      rules={{required: true}}
      render={({field: {onChange, value}}) => (
        <View style={tw`relative`}>
          <Image
            style={tw`absolute left-4 top-[1.125rem] h-4 w-4`}
            source={require('@src/assets/common/search-icon.png')}
          />
          <TextInput
            style={tw.style(
              formContext.formState.errors.title
                ? 'border-blue-500'
                : 'border-custom-04',
              'mb-4 h-[3.25rem] rounded-full border pl-10 pr-4',
            )}
            placeholderTextColor={
              formContext.formState.errors.title && COLOR.BLUE
            }
            placeholder="제목으로 검색하기"
            onChangeText={onChange}
            value={value}
            maxLength={20}
          />
        </View>
      )}
    />
  );
};
