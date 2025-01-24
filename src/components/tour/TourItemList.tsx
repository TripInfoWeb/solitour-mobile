import {useSuspenseQuery} from '@tanstack/react-query';

export const TourItemList = () => {
  const {} = useSuspenseQuery({
    queryKey: ['tourItemList'],
  });
};
