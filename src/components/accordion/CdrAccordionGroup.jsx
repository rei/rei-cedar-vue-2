import debounce from 'lodash-es/debounce';
import clsx from 'clsx';
import propValidator from '../../utils/propValidator';
import breakpoints from '../../mixins/breakpoints';
import style from './styles/CdrAccordionGroup.scss';

export default {
  name: 'CdrAccordionGroup',
  mixins: [breakpoints],
  props: {
    unwrap: {
      type: [String, Boolean],
      default: false,
      validator: (value) => {
        if (typeof value === 'string') {
          return propValidator(
            value,
            ['@xs', '@sm', '@md', '@lg'],
            false,
          );
        }
        return typeof value === 'boolean';
      },
    },
  },
  data() {
    return {
      style,
      accordionButtons: [],
      currentIdx: 0,
      isUnwrapped: {
        value: this.unwrap,
      },
    };
  },
  provide() {
    return {
      unwrap: this.isUnwrapped,
    };
  },
  computed: {
    nextIdx() {
      const idx = this.currentIdx + 1;
      return idx >= this.accordionButtons.length ? 0 : idx; // if at the last, go to first
    },
    prevIdx() {
      const idx = this.currentIdx - 1;
      return idx <= -1 ? (this.accordionButtons.length - 1) : idx; // if at first, go to last
    },
  },
  mounted() {
    // get all of the buttons in the group
    this.accordionButtons = this.$el.querySelectorAll('.js-cdr-accordion-button');
    if (typeof this.unwrap === 'string') {
      this.isUnwrapped.value = this.unwrap.indexOf(this.getCurrentBreakpoint()) !== -1;
      window.addEventListener('resize', debounce(() => {
        this.isUnwrapped.value = this.unwrap.indexOf(this.getCurrentBreakpoint()) !== -1;
      }, 300));
    }
  },
  methods: {
    handleKeyDown(e) {
      // something besides the button is focused
      if (this.currentIdx === -1) return;

      const { key } = e;
      switch (key) {
        case 'Home':
          e.preventDefault();
          this.accordionButtons[0].focus();
          break;
        case 'End':
          e.preventDefault();
          this.accordionButtons[this.accordionButtons.length - 1].focus();
          break;
        case 'ArrowDown':
        case 'Down':
          e.preventDefault();
          this.accordionButtons[this.nextIdx].focus();
          break;
        case 'ArrowUp':
        case 'Up':
          e.preventDefault();
          this.accordionButtons[this.prevIdx].focus();
          break;
        default: break;
      }
    },
    focusin(e) {
      // find out which, if any, button is focused
      this.currentIdx = Array.prototype.indexOf.call(this.accordionButtons, e.target);
    },
  },
  render(h) {
    return (<ul
      class={clsx(this.style['cdr-accordion-group'])}
      onFocusin={this.focusin}
      onKeydown={this.handleKeyDown}
    >
        {
          this.$slots.default.map((vNode) => (vNode.tag !== undefined
            ? h('li', vNode, [vNode]) : ''))
        }
    </ul>);
  },
};
