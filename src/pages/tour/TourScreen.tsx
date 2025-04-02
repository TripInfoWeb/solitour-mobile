import {TourItemListSkeleton} from '@src/components/skeleton/tour/TourItemListSkeleton';
import {TourItemList} from '@src/components/tour/TourItemList';
import React, {Suspense} from 'react';

export const TourScreen = () => {
  return (
    <Suspense fallback={<TourItemListSkeleton />}>
      <TourItemList />
    </Suspense>
  );
};
