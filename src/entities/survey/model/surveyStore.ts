import {create, StateCreator} from 'zustand';

interface SurveyState {
  contentTitles: string[];
  contentCategory: 'DRAMA' | 'ARTIST' | 'MOVIE' | 'ENTERTAINMENT' | null;
  days: number;
  preferredTrips: (
    | 'CULTURAL_FACILITY'
    | 'NOVELTY_EXPERIENCE'
    | 'NATURAL_PLACE'
    | 'HISTORICAL_PLACE'
    | 'MARKET'
  )[];
}

interface SurveyAction {
  initializeSurveyState: () => void;
  setSurveyState: (data: Partial<SurveyState>) => void;
}

const initialState: SurveyState = {
  contentTitles: [],
  contentCategory: null,
  days: 0,
  preferredTrips: [],
};

type SurveyStoreType = SurveyState & SurveyAction;

const surveyStore: StateCreator<SurveyStoreType> = set => ({
  ...initialState,
  initializeSurveyState: () => set({...initialState}),
  setSurveyState: (data: Partial<SurveyState>) => set({...data}),
});

export const useSurveyStore = create<SurveyStoreType>(surveyStore);
