import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  'card-number': yup.string()
    .required('Card number is required')
    .matches(/^\d{16}$/, 'Card number must be 16 digits'),
  'cardholder-name': yup.string()
    .required('Cardholder name is required')
    .min(2, 'Cardholder name must be at least 2 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Cardholder name can only contain letters and spaces'),
  'expiry': yup.string()
    .required('Expiry date is required')
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid MM/YY format (e.g., 01/25)')
    .test('is-future-date', 'Card has expired', function(value) {
      if (!value) return false;
      const [month, year] = value.split('/').map(Number);
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;

      if (year < currentYear) return false;
      if (year === currentYear && month < currentMonth) return false;
      return true;
    }),
  'cvv': yup.string()
    .required('CVV is required')
    .matches(/^\d{3}$/, 'CVV must be 3 digits'),

  'email': yup.string()
    .required('Email address is required')
    .email('Invalid email address'),

  'country-region': yup.string()
    .required('Country / Region is required'),
  'address': yup.string()
    .required('Street address is required')
    .min(5, 'Address must be at least 5 characters'),
  'address2': yup.string()
    .optional(),
  'city': yup.string()
    .required('City is required')
    .min(2, 'City name must be at least 2 characters'),
  'state': yup.string()
    .required('State is required')
    .test('not-empty', 'Please select a state', (value) => value !== '' && value !== undefined),
  'zip': yup.string()
    .required('Zip code is required')
    .matches(/^\d{5}(-\d{4})?$/, 'Invalid Zip Code format (e.g., 12345 or 12345-6789)'),
  
});