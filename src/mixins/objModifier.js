/**
 * @mixin
 */

export default {
  props: {
    /**
     * Space separated list of modifiers. See above for possible values
     */
    objModifier: {
      type: Object,
      default: {
        baseSize: 'medium',
      },
    },
  },
  computed: {
    modifierObjectClass() {
      const base = this.baseClass;
      const modifierObject = this.objModifier ? this.objModifier : {};
      const final = [];

      if (!this.theme) {
        final.push(`${base}`);

        Object.keys(modifierObject).forEach((key) => {
          if (typeof modifierObject[key] === 'string') {
            final.push(`${base}--${modifierObject[key]}`);
          } else {
            modifierObject[key].forEach((val) => {
              final.push(`${base}--${val}`);
            });
          }
        });
      }

      return final.join(' ');
    },
  },
};
