import {create, StateCreator} from 'zustand';

interface SurveyState {
  contentTitles: string[];
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
  initialize: () => void;
  setSurveyState: (data: Partial<SurveyState>) => void;
}

const initialState: SurveyState = {
  contentTitles: [],
  days: 0,
  preferredTrips: [],
};

type SurveyStoreType = SurveyState & SurveyAction;

const surveyStore: StateCreator<SurveyStoreType> = set => ({
  ...initialState,
  initialize: () => set({...initialState}),
  setSurveyState: (data: Partial<SurveyState>) => set({...data}),
});

export const useSurveyStore = create<SurveyStoreType>(surveyStore);
