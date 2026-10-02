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

class User {
  constructor(public fullName: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company): string {
  if (entity instanceof User) {
    return entity.fullName;
  } else if (entity instanceof Company) {
    return entity.name;
  } else {
    throw new Error('Unknown entity type');
  }
}
console.log(printName(new User('홍길동'))); // Returns '홍길동'
console.log(printName(new Company('헤어타임.'))); // Returns '헤어타임.'