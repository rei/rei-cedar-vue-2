/**
 * Provides methods for working with screen size breakpoints
 *   XS < 768px
 *   SM >= 768px < 992px
 *   MD >= 992px < 1200px
 *   LG >= 1200px
 */
/**
 * @mixin
 */
import cdrTokens from '@rei/cdr-tokens/dist/js/cdr-tokens.common';

const SMBreakpoint = cdrTokens.CdrBreakpointSm;
const MDBreakpoint = cdrTokens.CdrBreakpointMd;
const LGBreakpoint = cdrTokens.CdrBreakpointLg;

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
