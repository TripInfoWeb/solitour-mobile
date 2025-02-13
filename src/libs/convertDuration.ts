/**
 * @param duration 이동 시간(초)
 * @returns 이동 시간을 나타내는 문자열
 */
export const convertDuration = (duration: number) => {
  if (duration < 60) {
    return `${duration}초`;
  } else if (duration < 3600) {
    return `${Math.floor(duration / 60)}분 ${duration % 60}초`;
  } else {
    return `${Math.floor(duration / 3600)}시간 ${Math.floor((duration % 3600) / 60)}분 ${duration % 60}초`;
  }
};
