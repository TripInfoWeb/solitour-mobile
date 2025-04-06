import React, {Suspense} from 'react';
import {PlanItemListSkeleton} from './PlanItemListSkeleton';
import {PlanItemList} from './PlanItemList';

export const PlanItemListWrapper = () => {
  return (
    <Suspense fallback={<PlanItemListSkeleton />}>
      <PlanItemList />
    </Suspense>
  );
};
