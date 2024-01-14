import { twMerge } from 'tailwind-merge';

// helps to merge all duplicates tailwind styles
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
  };