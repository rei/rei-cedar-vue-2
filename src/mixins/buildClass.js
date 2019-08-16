/**
 * @mixin
 */
export default {
  methods: {
    /**
     *
     * @param {String} prop -- the prop to build classes from
     */
    buildClass(prop) {
      let checkBase = 'cdr';
      if (this.baseClass) {
        checkBase = this.baseClass;
      }
      const base = checkBase;
      const propArgsArr = this[prop] ? this[prop].split(' ') : [];
      let builtClasses = [];

      if (!this.style) {
        builtClasses.push(`${base}`);
        builtClasses = builtClasses.concat(propArgsArr.map(mod => this.modifyClassName(base, mod)));
      } else {
        builtClasses.push(this.moduleClass(base));
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
  },
};
