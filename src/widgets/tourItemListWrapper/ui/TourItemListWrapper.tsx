import React, {Suspense} from 'react';
import {TourItemListSkeleton} from './TourItemListSkeleton';
import {TourItemList} from './TourItemList';

export const TourItemListWrapper = () => {
  return (
    <Suspense fallback={<TourItemListSkeleton />}>
      <TourItemList />
    </Suspense>
  );
};
