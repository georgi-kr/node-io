import { isValid, parse } from 'date-fns';

export const parseDate = (date: string | undefined, format: string, currentDate: Date): Date | undefined => {
  if (date) {
    const parsed = parse(date, format, currentDate);
    return isValid(parsed) ? parsed : undefined;
  }
  return undefined;
};
