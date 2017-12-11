/**
 * Use of this mixin requires adding either a data value or computed property
 * of 'baseClass' that is a string of the base class value
 */
/**
 * @mixin
 */
export default {
  props: {
    /**
     * Name of the css module theme
     */
    theme: String,
  },
  computed: {
    themeClass() {
      const base = this.baseClass;
      const modifierArr = this.modifier ? this.modifier.split(' ') : [];
      const newBase = `theme-${this.theme}-${base}`;
      let final = '';

      if (this.theme) {
        final += `${newBase} `;

        final += modifierArr.map(mod => `${newBase}--${mod}`).join(' ');
      }

      return final;
    },
  },
};
