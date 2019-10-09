/**
 * Provides methods for working with screen size breakpoints
 *   XS < 768px
 *   SM >= 768px < 992px
 *   MD >= 992px < 1232px
 *   LG >= 1232px
 */
/**
 * @mixin
 */
import {
  CdrBreakpointSm,
  CdrBreakpointMd,
  CdrBreakpointLg,
} from '@rei/cdr-tokens/dist/js/cdr-tokens.esm';

// TODO: is this the most optimal way to drop the units for use in JS?
const SMBreakpoint = CdrBreakpointSm.replace(/px/, '');
const MDBreakpoint = CdrBreakpointMd.replace(/px/, '');
const LGBreakpoint = CdrBreakpointLg.replace(/px/, '');

export default {
  methods: {
    /**
     * Returns true if width within XS size range
     */
    isXS() {
      const screenWidth = window.outerWidth || 0;
      return screenWidth < SMBreakpoint;
    },
    /**
     * Returns true if width within SM size range
     */
    isSM() {
      const screenWidth = window.outerWidth || 0;
      return (screenWidth >= SMBreakpoint && screenWidth < MDBreakpoint);
    },
    /**
     * Returns true if width within MD size range
     */
    isMD() {
      const screenWidth = window.outerWidth || 0;
      return (screenWidth >= MDBreakpoint && screenWidth < LGBreakpoint);
    },
    /**
     * Returns true if width within LG size range
     */
    isLG() {
      const screenWidth = window.outerWidth || 0;
      return screenWidth >= LGBreakpoint;
    },
    /**
     * Returns string representation for current breakpoint
     * XS, SM, MD, or LG
     */
    getCurrentBreakpoint() {
      if (this.isSM()) {
        return 'SM';
      }
      if (this.isMD()) {
        return 'MD';
      }
      if (this.isLG()) {
        return 'LG';
      }
      return 'XS';
    },
  },
};
