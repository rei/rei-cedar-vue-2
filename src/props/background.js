import propValidator from '../utils/propValidator';

export default {
  type: [String],
  default: 'primary',
  validator: (value) => propValidator(value, ['primary', 'secondary']),
};
