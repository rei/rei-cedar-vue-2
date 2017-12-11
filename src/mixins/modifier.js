/**
 * @mixin
 */
export default {
  props: {
    /**
     * Space separated list of modifiers. See below for possible values
     */
    modifier: String,
  },
  computed: {
    modifierClass() {
      const base = this.baseClass;
      const modifierArr = this.modifier ? this.modifier.split(' ') : [];
      let final = '';

      if (!this.theme) {
        final += `${base} `;

        final += modifierArr.map(mod => `${base}--${mod}`).join(' ');
      }

      return final;
    },
  },
};
