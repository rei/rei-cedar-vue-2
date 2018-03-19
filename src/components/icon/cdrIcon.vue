<script>
/**
 * Cedar 2 component for icons
 * **NOTE:** Can only be used with an SVG symbol sprite.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */

import modifier from 'Mixins/modifier';

// TODO: see size impact of including all of them
// TODO: require-all?
const account = require('Assets/icons/rei/cdr-account.svg');
const newAccount = require('Assets/icons/Icon313/account-profile.svg');
const chain = require('Assets/icons/rei/cdr-chainlink.svg');
const newChain = require('Assets/icons/Icon313/chain-link.svg');
const chat = require('Assets/icons/rei/cdr-chat.svg');
const newChat = require('Assets/icons/Icon313/chat.svg');
const info = require('Assets/icons/rei/cdr-info-circ-stroke.svg');
const newInfo = require('Assets/icons/Icon313/information-stroke.svg');
const loc = require('Assets/icons/rei/cdr-loc-pin.svg');
const newLoc = require('Assets/icons/Icon313/location-pin-fill.svg');

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
    name: {
      type: String,
    },
  },
  data() {
    return {
      icons: {
        account,
        newAccount,
        chain,
        newChain,
        chat,
        newChat,
        info,
        newInfo,
        loc,
        newLoc,
      },
    };
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
        const inlineOpts = {
          domProps: {
            innerHTML: this.icons[`${this.name}`],
          },
        };
        return this.$createElement(
          'span',
          Object.assign(wrapperOpts, inlineOpts),
        );
      }

      return this.$createElement(
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
