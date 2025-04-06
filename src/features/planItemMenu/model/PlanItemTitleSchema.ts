import {z} from 'zod';

export const PlanItemTitleSchema = z.object({
  title: z
    .string({
      required_error: '여행 계획 제목을 입력해 주세요.',
      invalid_type_error: 'Title must be a string.',
    })
    .min(1, {message: '여행 계획 제목을 입력해 주세요.'})
    .max(30, {message: '여행 계획 제목을 입력해 주세요.'}),
});
