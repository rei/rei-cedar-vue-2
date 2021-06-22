import {
  CdrBreakpointSm,
  CdrBreakpointMd,
  CdrBreakpointLg,
} from '@rei/cdr-tokens/dist/js/cdr-tokens.esm';

export default function getCurrentBreakpoint() {
  const screenWidth = (window && window.innerWidth) || 0;
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
}
