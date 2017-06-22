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
      let final = '';

      if (this.theme) {
        final += `${this[this.theme][base]} `;

        modifierArr.forEach((mod) => {
          final += `${this[this.theme][`${base}--${mod}`]} `;
        });
      }

      return final;
    },
  },
};
