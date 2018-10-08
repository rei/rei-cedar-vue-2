/**
 * @mixin
 */
export default {
  props: {
    /**
     * Size state
     */
    size: String,
  },
  computed: {
    sizeClass() {
      const base = this.baseClass;
      const sizeParam = this.modifier ? this.modifier.split(' ') : [];
      let final = [];

      if (!this.$style) {
        final.push(`${base}`);
        final = final.concat(modifierArr.map(mod => this.modifyClassName(base, mod)));
      } else {
        final.push(this.moduleClass(base));
        final = final.concat(modifierArr.map(mod => this.modifyClassName(base, mod)));
      }

      return final.join(' ');
    },
  },
  methods: {
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
      return this.$style ? this.moduleClass(`${base}--${modifier}`) : `${base}--${modifier}`;
    },
    /**
     * Changes the component Size Prop
     */
    setSize(newSize) {
      this.size = newSize;
    },
    /**
     * Changes the component Size Prop
     */
    getSize() {
      return this.size;
    },
  },
};
