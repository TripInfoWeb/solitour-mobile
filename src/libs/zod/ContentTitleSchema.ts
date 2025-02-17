import {z} from 'zod';

export const ContentTitleSchema = z.object({
  title: z
    .string({
      required_error: '제목을 입력해 주세요.',
      invalid_type_error: 'Title must be a string.',
    })
    .min(1, {message: '제목을 입력해 주세요.'})
    .max(30, {message: '제목은 최대 20자입니다.'}),
});
