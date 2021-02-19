import {
  CdrBreakpointSm,
  CdrBreakpointMd,
  CdrBreakpointLg,
} from '@rei/cdr-tokens/dist/js/cdr-tokens.esm';

export default {
  methods: {
    getCurrentBreakpoint() {
      const screenWidth = window.outerWidth || 0;
      if (screenWidth >= CdrBreakpointSm && screenWidth < CdrBreakpointMd) {
        return 'sm';
      }
      if (screenWidth >= CdrBreakpointMd && screenWidth < CdrBreakpointLg) {
        return 'md';
      }
      if (screenWidth >= CdrBreakpointLg) {
        return 'lg';
      }

      return 'xs';
    },
  },
};
