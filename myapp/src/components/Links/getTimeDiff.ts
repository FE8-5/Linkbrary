import dayjs from 'dayjs';
import duration, { Duration } from 'dayjs/plugin/duration';
dayjs.extend(duration);

export function getTimeDiff(timeToCompare: string) {
  const timeDiffDuration: Duration = dayjs.duration(dayjs().diff(timeToCompare));
  const yearDiff: number = parseInt(timeDiffDuration.format('Y'));
  const monthDiff: number = parseInt(timeDiffDuration.format('M'));
  const dateDiff: number = parseInt(timeDiffDuration.format('D'));
  const hourDiff: number = parseInt(timeDiffDuration.format('H'));
  const minuteDiff: number = parseInt(timeDiffDuration.format('m'));
  const secondDiff: number = parseInt(timeDiffDuration.format('s'));

  if (yearDiff > 0) {
    return `${yearDiff} years ago`;
  } else if (monthDiff > 0) {
    return `${monthDiff} months ago`;
  } else if (dateDiff > 0) {
    return `${dateDiff} days ago`;
  } else if (hourDiff > 0) {
    return `${hourDiff} hours ago`;
  } else if (minuteDiff > 0) {
    return `${minuteDiff} minutes ago`;
  } else if (secondDiff > 0) {
    return `${secondDiff} seconds ago`;
  }
}
