import {z} from 'zod';

export const DiarySchema = z.object({
  title: z
    .string({
      required_error: '제목을 입력해 주세요.',
      invalid_type_error: 'Title must be a string.',
    })
    .min(1, {message: '제목을 입력해 주세요.'})
    .max(50, {message: '제목 길이는 50자 이하여야 합니다.'}),
  startDate: z
    .date({
      required_error: '날짜를 입력해 주세요.',
      invalid_type_error: '날짜를 입력해 주세요.',
    })
    .min(new Date('1970-01-01'), {
      message: '1970년 이후의 날짜만 입력할 수 있습니다.',
    }),
  endDate: z
    .date({
      required_error: '날짜를 입력해 주세요.',
      invalid_type_error: '날짜를 입력해 주세요.',
    })
    .max(new Date(new Date().getTime() + 1000 * 60 * 60 * 24), {
      message: '미래에 해당하는 날짜는 입력할 수 없습니다.',
    }),
  location: z
    .string({
      required_error: '장소를 선택해 주세요.',
      invalid_type_error: '장소를 선택해 주세요.',
    })
    .min(1, {message: '장소를 선택해 주세요.'}),
  feeling: z
    .string({
      required_error: '기분을 선택해 주세요.',
      invalid_type_error: '기분을 선택해 주세요.',
    })
    .min(1, {message: '기분을 선택해 주세요.'}),
  image: z.string({
    required_error: '이미지 1장을 등록해 주세요.',
    invalid_type_error: '이미지 1장을 등록해 주세요.',
  }),
});
