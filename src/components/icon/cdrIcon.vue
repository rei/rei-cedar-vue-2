<script>
/**
 * Cedar 2 component for icons
 * **NOTE:** Can only be used with an SVG symbol sprite.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */

import modifier from 'mixinsdir/modifier';
import icons from '@rei/cdr-assets/dist/icons.json';

export default {
  name: 'CdrIcon',
  mixins: [modifier],
  props: {
    /**
     * URL to the svg sprite and icon name. /path/to/svg.svg#icon-name
     */
    url: {
      type: String,
      required: false,
    },
    /**
     * Icon name from the default REI icon set
     */
    name: {
      type: String,
    },
    /**
     * Raw SVG string for using icons outside of the REI icon set
     */
    raw: {
      type: String,
    },
  },
  computed: {
    baseClass() {
      return 'cdr-icon';
    },
  },
  methods: {
    spriteUse() { // <use :href="this.url"/>
      return this.$createElement(
        'use',
        {
          attrs: {
            href: this.url,
          },
        },
      );
    },
    genSpriteSVG() { // <svg {attributes}> <slot/> </svg>
      return this.$createElement(
        'svg',
        {},
        [this.spriteUse()],
      );
    },
    genSvg() { // decide which type it is (sprite vs inline)
      const wrapperOpts = {
        class: this.modifierClass,
        attrs: {
          'aria-hidden': true,
        },
      };

      if (this.name) {
        const iconSetOpts = {
          domProps: {
            innerHTML: icons[`${this.name}`],
          },
        };
        return this.$createElement( // <span classes><svg inlined from icons/></span>
          'span',
          Object.assign(wrapperOpts, iconSetOpts),
        );
      } else if (this.raw) {
        const rawOpts = {
          domProps: {
            innerHTML: this.raw,
          },
        };
        return this.$createElement( // <span classes><svg inlined from raw string></span>
          'span',
          Object.assign(wrapperOpts, rawOpts),
        );
      }

      return this.$createElement( // <span classes><svg><use href="url"></svg></span>
        'span',
        wrapperOpts,
        [this.genSpriteSVG()],
      );
    },
  },
  render() {
    return this.genSvg();
  },
};
</script>

<style>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/vars/cdrIcon.vars.pcss';
  @import './styles/cdrIcon.pcss';
</style>
