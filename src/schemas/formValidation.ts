import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  'card-number': yup.string()
    .required('Card number is required')
    .matches(/^\d{16}$/, 'Card number must be 16 digits')
});