import {Diary} from '@src/entities/diary';
import {uploadImage} from '@src/shared/api';
import {useMutation} from '@tanstack/react-query';
import {useFormContext} from 'react-hook-form';
import {launchImageLibrary} from 'react-native-image-picker';

export const useImageUploader = () => {
  const formContext = useFormContext<Diary>();

  const imageMutation = useMutation({
    mutationFn: uploadImage,
    onSuccess: (data: {fileUrl: string}) => {
      formContext.setValue('image', data.fileUrl);
      formContext.trigger('image');
    },
    retry: 1,
    throwOnError: true,
  });

  const handleImageUpload = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets) {
        imageMutation.mutate({
          fileName: response.assets[0].fileName!,
          type: response.assets[0].type!,
          uri: response.assets[0].uri!,
        });
      }
    });
  };

  return {imageMutation, handleImageUpload};
};
