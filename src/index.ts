const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
} as const;

const LOCALE = 'ko-KR';

const formatDate = (date: Date): string => {
  return date.toLocaleDateString(LOCALE, DATE_FORMAT_OPTIONS);
};

const printFullDate = (date: string | Date): string => {
  const dateObj = date instanceof Date ? date : new Date(date);
  return formatDate(dateObj);
};