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
      let final = [];

      if (!this.$style) {
        final.push(`${base}`);
        final = final.concat(propArgsArr.map(mod => this.modifyClassName(base, mod)));
      } else {
        final.push(this.moduleClass(base));
        final = final.concat(propArgsArr.map(mod => this.modifyClassName(base, mod)));
      }

      return final.join(' ');
    },
    /**
     * Returns a css module class
     */
    moduleClass(className) {
      return this.$style[`${className}`];
    },
    /**
     * Returns a modified base class
     */
    modifyClassName(base, modifier) {
      return this.$style
        ? this.moduleClass(`${base}--${modifier}`)
        : `${base}--${modifier}`;
    },
  },
};
