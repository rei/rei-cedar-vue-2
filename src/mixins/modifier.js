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
        final = final.concat(modifierArr.map(mod => `${base}--${mod}`));
      }

      return final.join(' ');
    },
  },
};
