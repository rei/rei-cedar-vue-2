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
      console.log('Build Class Start prop = ', prop);
      console.log('this.baseClass = ', this.baseClass);
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
      console.log('this.style = ', this.style);
      console.log('base = ', base);
      // console.log('this.moduleClass(base) = ', this.moduleClass(base));
      if (!this.style) {
        builtClasses.push(`${base}`);
        builtClasses = builtClasses.concat(propArgsArr.map(mod => this.modifyClassName(base, mod)));
      } else {
        console.log('builtClasses 0 = ', builtClasses);
        builtClasses.push(this.moduleClass(base));
        console.log('builtClasses 1 = ', builtClasses);
        builtClasses = builtClasses.concat(propArgsArr.map(mod => this.modifyClassName(base, mod)));
        console.log('builtClasses 2 = ', builtClasses);
      }
      return builtClasses.join(' ');
    },
    /**
     * Returns a css module class
     */
    moduleClass(className) {
      console.log('moduleClass className = ', className);
      return this.style[`${className}`];
    },
    /**
     * Returns a modified base class
     */
    modifyClassName(base, modifier) {
      console.log('modifyClassName base = ', base, ' , mod = ', modifier);
      return this.style
        ? this.moduleClass(`${base}--${modifier}`)
        : `${base}--${modifier}`;
    },
  },
};
