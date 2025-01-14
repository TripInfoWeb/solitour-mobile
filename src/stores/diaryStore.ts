import {create, StateCreator} from 'zustand';

interface DiaryState {
  startDate: Date | null;
  endDate: Date | null;
  feeling: string | null;
  location: string | null;
}

interface DiaryAction {
  initialize: () => void;
  setDiaryState: (date: Partial<DiaryState>) => void;
}

const initialState: DiaryState = {
  startDate: null,
  endDate: null,
  feeling: null,
  location: null,
};

type DiaryStoreType = DiaryState & DiaryAction;

const diaryStore: StateCreator<DiaryStoreType> = set => ({
  ...initialState,
  initialize: () => set({...initialState}),
  setDiaryState: data => set({...data}),
});

export const useDiaryStore = create<DiaryStoreType>(diaryStore);
