import propValidator from '../utils/propValidator';

export default {
  type: String,
  default: 'top',
  validator: (value) => propValidator(
    value,
    ['top', 'bottom', 'left', 'right'],
  ),
};
