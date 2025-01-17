import React, {Suspense, useState} from 'react';
import {DiaryCardList} from '@src/components/diary/list/DiaryCardList';
import {DiaryListViewerSkeleton} from '@src/components/skeleton/diary/DiaryListViewerSkeleton';

export const DiaryScreen = () => {
  const [page, setPage] = useState(0);

  return (
    <Suspense fallback={<DiaryListViewerSkeleton page={page} />}>
      <DiaryCardList
        page={page}
        goPreviousPage={() => setPage(value => value - 1)}
        goNextPage={() => setPage(value => value + 1)}
      />
    </Suspense>
  );
};
