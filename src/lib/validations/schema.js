import * as yup from 'yup';

export const userRegisterSchema = yup.object({
  firstName: yup.string().min(3).required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  phoneNumber: yup.string().required(),
  address: yup.string().required(),
  dob: yup.string().required(),
  interestedCourse: yup.string().required(),
});
