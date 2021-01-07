// TODO: make arg order consistent

/**
 * Returns a modified base class
 */
const modifyClassName = (base, modifier, style) => {
  return style
    ? style[`${base}--${modifier}`]
    : `${base}--${modifier}`;
};

/**
 *
 * @param {String} prop -- the prop to build classes from
 */
const buildClass = (baseClass, prop, style, propNamePrefix = false) => {
  let propArgsArr = prop.split(' ').filter((x) => x);
  let builtClasses = [];

  if (propNamePrefix) {
    /*
      prefix class names with prop name
    */
    propArgsArr = propArgsArr.map((mod) => `${prop}${mod}`);
  }

  builtClasses = builtClasses
    .concat(propArgsArr.map((mod) => modifyClassName(baseClass, mod, style)));

  return builtClasses.join(' ');
};

/**
 * supports pattern to have props that are boolean or breakpoint strings
 *
 * @param {String} base
 * @param {String} modifier
 * @param {String|Boolean} propVal
 *
 * given these conditions:
 * base is 'cdr-table'
 * modifier is 'full-width'
 * prop would be full-width="@sm @lg"
 *
 * This takes that and returns classes of "cdr-table--full-width@sm cdr-table--full-width@lg"
 */
const responsiveModifyClass = (base, modifier, prop, style) => {
  if (typeof prop === 'string') {
    return prop.split(' ')
      .map((bp) => modifyClassName(base, `${modifier}${bp}`, style))
      .join(' ');
  }
  return modifyClassName(base, modifier, style);
};


export {
  buildClass,
  modifyClassName,
  responsiveModifyClass,
}
