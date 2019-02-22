/**
 * Validates space separated string against an array of accepted values.
 * @param {String} propValue -- Space separated string (provided by the user)
 * @param {Array} validArr -- Array of values that are considered "valid"
 * @param {Boolean} responsive -- Enables validation of validArr values with '@sm', '@md', '@lg' added to them
 */
function validateProp(propValue, validArr, responsive = true) {
  const strArr = propValue.split(' ');
  return strArr.every((mod) => {
    const modValid = validArr.some((validStr) => {
      if (responsive) {
        return (mod === validStr)
        || (mod === `${validStr}@xs`)
        || (mod === `${validStr}@sm`)
        || (mod === `${validStr}@md`)
        || (mod === `${validStr}@lg`);
      }

      return (mod === validStr);
    });
    if (!modValid) {
      console.error(`Invalid prop value: ${mod}`); // eslint-disable-line no-console
    }
    return modValid;
  });
}

export default validateProp;
