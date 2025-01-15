import React, {Suspense, useState} from 'react';
import {DiaryListViewer} from '@src/components/diary/list/DiaryListViewer';
import {DiaryListViewerSkeleton} from '@src/components/skeleton/diary/DiaryListViewerSkeleton';

export const DiaryScreen = () => {
  const [page, setPage] = useState(0);

  return (
    <Suspense fallback={<DiaryListViewerSkeleton page={page} />}>
      <DiaryListViewer
        page={page}
        goPreviousPage={() => setPage(value => value - 1)}
        goNextPage={() => setPage(value => value + 1)}
      />
    </Suspense>
  );
};
