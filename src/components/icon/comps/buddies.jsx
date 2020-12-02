import CdrIcon from '../CdrIcon';
export default {
  name: 'IconBuddies',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default && this.$slots.default()}
      <path role="presentation" d="M8 3a4 4 0 012.536 7.094c.568.278 1.09.65 1.547 1.095a4 4 0 116.453 3.905c1.726.849 3.016 2.542 3.41 4.585l.042.242A.935.935 0 0121.064 21h-10.13a.933.933 0 01-.933-.933l.002-.072.009-.072A6.607 6.607 0 0112.122 16H2.933A.933.933 0 012 15.067l.002-.072.009-.072c.335-2.152 1.658-3.946 3.452-4.83A4 4 0 018 3zm8 13c-2.025 0-3.797 1.462-4.369 3.5h8.731C19.771 17.436 18.006 16 16 16zm0-6.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM8 11c-2.025 0-3.797 1.462-4.369 3.5h8.731C11.771 12.436 10.006 11 8 11zm0-6.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"></path>
    </cdr-icon>)
  },
};
