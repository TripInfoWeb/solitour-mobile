import {z} from 'zod';

export const NicknameSchema = z.object({
  nickname: z
    .string({
      required_error: '닉네임을 입력해 주세요.',
      invalid_type_error: 'Nickname must be a string.',
    })
    .min(1, {message: '닉네임을 입력해 주세요.'})
    .max(30, {message: '닉네임은 최대 30자 이하여야 합니다.'}),
});
