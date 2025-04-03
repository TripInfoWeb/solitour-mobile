import React, {Suspense} from 'react';
import {SurveyContentItemList} from './SurveyContentItemList';
import {SurveyContentItemListSkeleton} from './SurveyContentItemListSkeleton';

export const SurveyContentItemListWrapper = () => {
  return (
    <Suspense fallback={<SurveyContentItemListSkeleton />}>
      <SurveyContentItemList />
    </Suspense>
  );
};
