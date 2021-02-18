import style from './styles/CdrChipGroup.scss';

export default {
  name: 'CdrChipGroup',
  data() {
    return {
      style,
      chips: [],
      currentIdx: 0,
    };
  },
  computed: {
    nextIdx() {
      const idx = this.currentIdx + 1;
      return idx >= this.chips.length ? 0 : idx; // if at last, go to first
    },
    prevIdx() {
      const idx = this.currentIdx - 1;
      return idx <= -1 ? (this.chips.length - 1) : idx; // if at first, go to last
    },
  },
  mounted() {
    // get all of the chips in the group
    this.chips = this.$el.children;
    this.currentIdx = Array.prototype.findIndex.call(this.chips,
      (chip) => chip.getAttribute('aria-checked') === 'true');
  },
  methods: {
    handleKeyDown(e) {
      // something besides the button is focused
      if (this.currentIdx === -1) return;

      const { key } = e;
      switch (key) {
        case 'Home':
          e.preventDefault();
          this.chips[0].focus();
          break;
        case 'End':
          e.preventDefault();
          this.chips[this.chips.length - 1].focus();
          break;
        case 'ArrowDown':
        case 'Down':
          e.preventDefault();
          this.chips[this.nextIdx].focus();
          break;
        case 'ArrowUp':
        case 'Up':
          e.preventDefault();
          this.chips[this.prevIdx].focus();
          break;
        default: break;
      }
    },
    focusin(e) {
      // find out which, if any, button is focused
      this.currentIdx = Array.prototype.indexOf.call(this.chips, e.target);
    },
  },
  render() {
    return (<div
      class={this.style['cdr-chip-group']}
      onFocusin={this.focusin}
      onKeydown={this.handleKeyDown}
      role="radiogroup"
    >
      { this.$slots.default }
    </div>);
  },
};
