import * as yup from 'yup';

export const userRegisterSchema = yup.object({
  firstName: yup.string().min(2, 'First name must be at least two letter').required('First name is required'),
  lastName: yup.string().min(2, 'Last name must be at least two letters').required(),
  email: yup.string().required('Email is required'),
  phoneNumber: yup.string().max(15, 'Phone number must not be greater than 15').required('Valid phone number is required'),
  address: yup.string().required('Full address is required'),
  dob: yup.string().required('Date of birth is required'),
  interestedCourse: yup.string().required('Interested course is required'),
});

export const contactUsSchema = yup.object({
  Name: yup.string().min(2, 'Full name must be at least two letter').required('Full name is required'),
  Email: yup.string().required('Email is required'),
  Reasons: yup.string().required('Question is required'),
});
