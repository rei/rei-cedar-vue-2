import CdrIcon from '../CdrIcon';
export default {
  name: 'IconBirding',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M14.56 8.828L9.936 13H12a1 1 0 001-1 1 1 0 012 0 3 3 0 01-3 3H7.718L6.61 16H14a3 3 0 003-3V6a1 1 0 10-2 0l.001 2a.997.997 0 01-.235.642l-.205.186zM19 6v.517l1.172.498A1 1 0 0121 8v1h-1.233l-.005.013L19.73 9H19v4a5 5 0 01-5 5v1a1 1 0 110 2h-1a1 1 0 01-1-1v-2H4a1 1 0 01-.592-1.806L13 7.542V6a3 3 0 016 0z"></path>
    </cdr-icon>)
  },
};
