/**
 * @mixin
 */
export default {
  props: {
    /**
     * Space separated list of modifiers. See above for possible values
     */
    modifier: String,
  },
  computed: {
    modifierClass() {
      const base = this.baseClass;
      const modifierArr = this.modifier ? this.modifier.split(' ') : [];
      let final = [];

      if (!this.theme) {
        final.push(`${base}`);
        final = final.concat(modifierArr.map(mod => this.modifyClassName(base, mod)));
      }

      return final.join(' ');
    },
  },
  methods: {
    /**
     * Returns a modified base class
     */
    modifyClassName(base, modifier) {
      return `${base}--${modifier}`;
    },
  },
};
