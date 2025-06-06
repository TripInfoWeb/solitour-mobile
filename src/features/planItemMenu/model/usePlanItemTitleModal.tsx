import {zodResolver} from '@hookform/resolvers/zod';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {updatePlan} from '@src/entities/plan';
import {PlanItemTitleSchema} from './PlanItemTitleSchema';

export const usePlanItemTitleUpdate = (
  planId: number,
  title: string,
  isOpen: boolean,
  closeModal: () => void,
) => {
  const methods = useForm<{title: string}>({
    resolver: zodResolver(PlanItemTitleSchema),
    defaultValues: {title},
    mode: 'onChange',
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => updatePlan(planId, methods.getValues('title')),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['planList']});
      closeModal();
    },
    retry: 1,
    throwOnError: true,
  });

  const handleSubmit = async () => {
    await methods.trigger('title');
    if (!methods.formState.isValid) {
      return;
    }

    mutation.mutate();
  };

  useEffect(() => {
    if (isOpen) {
      methods.setValue('title', title);
    }
  }, [methods, isOpen, title]);

  return {methods, isPending: mutation.isPending, handleSubmit};
};
