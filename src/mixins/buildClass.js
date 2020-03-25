/**
 * @mixin
 */
export default {
  methods: {
    /**
     *
     * @param {String} prop -- the prop to build classes from
     */
    buildClass(prop, propNamePrefix = false) {
      let checkBase = 'cdr';
      if (this.baseClass) {
        checkBase = this.baseClass;
      }
      const base = checkBase;
      let propArgsArr = this[prop] ? this[prop].split(' ') : [];
      let builtClasses = [];

      if (propNamePrefix) {
        /*
          prefix class names with prop name
        */
        propArgsArr = propArgsArr.map(mod => `${prop}${mod}`);
      }

      if (!this.style) {
        builtClasses = builtClasses.concat(propArgsArr.map(mod => this.modifyClassName(base, mod)));
      } else {
        builtClasses = builtClasses.concat(propArgsArr.map(mod => this.modifyClassName(base, mod)));
      }

      return builtClasses.join(' ');
    },
    /**
     * Returns a css module class
     */
    moduleClass(className) {
      return this.style[`${className}`];
    },
    /**
     * Returns a modified base class
     */
    modifyClassName(base, modifier) {
      return this.style
        ? this.moduleClass(`${base}--${modifier}`)
        : `${base}--${modifier}`;
    },
    /**
     * supports pattern to have props that are boolean or breakpoint strings
     *
     * @param {String} modifierName
     * @param {String|Boolean} propVal
     *
     * given these conditions:
     * baseClass is 'cdr-table'
     * prop would be full-width="@sm"
     *
     * This takes that and returns classes of "cdr-table--full-width@sm"
     */
    responsiveModifyClass(modifierName, propVal) {
      if (typeof propVal === 'string') {
        return propVal.split(' ')
          .map(bp => this.modifyClassName(this.baseClass, `${modifierName}${bp}`))
          .join(' ');
      }
      return this.modifyClassName(this.baseClass, modifierName);
    },
  },
};
