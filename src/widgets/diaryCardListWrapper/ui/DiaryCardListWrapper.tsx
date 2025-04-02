import React, {Suspense, useState} from 'react';
import {DiaryCardListSkeleton} from './DiaryCardListSkeleton';
import {DiaryCardList} from './DiaryCardList';

export const DiaryCardListWrapper = () => {
  const [page, setPage] = useState(0);

  return (
    <Suspense fallback={<DiaryCardListSkeleton page={page} />}>
      <DiaryCardList
        page={page}
        goPreviousPage={() => setPage(value => value - 1)}
        goNextPage={() => setPage(value => value + 1)}
      />
    </Suspense>
  );
};
