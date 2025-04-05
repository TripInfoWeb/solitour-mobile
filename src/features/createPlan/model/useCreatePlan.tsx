import {useNavigation} from '@react-navigation/native';
import {createPlan} from '@src/entities/plan';
import {useSurveyStore} from '@src/entities/survey';
import {NavigationProps} from '@src/shared/model';
import {useMutation} from '@tanstack/react-query';
import {useEffect} from 'react';
import {Alert} from 'react-native';

export const useCreatePlan = () => {
  const navigation = useNavigation<NavigationProps>();
  const {days, contentCategory, contentTitles, preferredTrips} =
    useSurveyStore();

  const mutation = useMutation({
    mutationFn: () =>
      createPlan({
        days,
        contentCategory: contentCategory!,
        contentTitles,
        preferredTrips,
      }),
    onSuccess: ({plans}) => {
      navigation.reset({
        index: 1,
        routes: [
          {name: 'BottomTabs'},
          {name: 'SurveyResultList', params: {plans}},
        ],
      });
    },
    onError: () => {
      Alert.alert(
        '알림',
        '여행을 추천하기에 데이터가 부족합니다. 여러 콘텐츠를 선택해 주세요.',
        [{text: '확인'}],
      );
      return navigation.pop(2);
    },
    retry: 1,
  });

  useEffect(() => {
    mutation.mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
