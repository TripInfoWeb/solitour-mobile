/**
 * @param distance 섹션 거리(미터)
 * @returns 거리를 나타내는 문자열
 */
export const convertDistance = (distance: number) => {
  if (distance < 1000) {
    return `${distance}m`;
  } else {
    return `${distance / 1000}km`;
  }
};
