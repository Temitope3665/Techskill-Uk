import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { addDays, format } from "date-fns";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// format date filter
export const formatDate = (date) => {
  return date && date.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' });
};

export function formatDateToISO(dateString) {
  const date = new Date(dateString);
  const nextDay = addDays(date, 1);
  return format(nextDay, 'yyyy-MM-dd');
}

export function formatDatee(dateString) {
  const date = new Date(dateString);
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

export function convertToWAT(dateTimeString) {
  // Parse the date-time string
  const dateTime = new Date(dateTimeString);
  
  // Adjust the time to WAT time zone (add 10 hours)
  dateTime.setHours(dateTime.getHours() + 10);
  
  // Format the time component
  const time = dateTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: false // Use 24-hour format
  });
  
  return `${time} WAT`;
}

export const paymentPlans = [
  {
    paymentLink: `${process.env.REACT_STRIPES_PREMIUM_PACKAGE}`,
    price: '£1000',
    title: 'Premium Package (Training, Mentorship, Practical, Career Support) - £1000.00'
  },
  {
    paymentLink: `${process.env.REACT_STRIPES_PREMIUM_PACKAGE_TRAINING_ONLY}`,
    price: '£600',
    title: 'Training - £600.00'
  },
  {
    paymentLink: `${process.env.REACT_STRIPES_GLOBAL_TALENT_CONSULTATION}`,
    price: '£150',
    title: 'Mentorship - £150.00'
  },
  {
    paymentLink: `${process.env.REACT_STRIPES_GLOBAL_TALENT_CONSULTATION}`,
    price: '£250',
    title: 'Practical - £250.00'
  },
  {
    paymentLink: `${process.env.REACT_STRIPES_CAREER_SUPPORT_SERVICES}`,
    price: '£250',
    title: 'Career Support - £250.00'
  },
]