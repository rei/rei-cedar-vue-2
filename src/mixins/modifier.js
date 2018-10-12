/**
 * @mixin
 */
export default {
  props: {
    /**
     * Space separated list of modifiers. See above for possible values
     */
    modifier: String,
    contentPriority: {
      type: String,
      default: 'primary',
      validator: value =>
        ['primary', 'secondary', 'tertiary'].indexOf(value) >= 0 || false,
    },
  },
  computed: {
    contentPriorityClass() {
      return this.buildClass('contentPriority');
    },
    modifierClass() {
      return this.buildClass('modifier');
    },
  },
  methods: {
    /**
     *
     * @param {String} prop -- the prop to build classes from
     */
    buildClass(prop) {
      const base = this.baseClass;
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
