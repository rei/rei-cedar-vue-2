import CdrIcon from '../CdrIcon';
export default {
  name: 'IconCompass',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm.224-7.776l.487-.937-.937.487-.487.937.937-.487zm-1.751-1.748v-.002l.002-.002v.001l5.366-2.786a.35.35 0 01.472.472l-2.786 5.365v.002l-.002.002v-.001l-5.366 2.786a.35.35 0 01-.472-.472l2.786-5.365z"></path>
    </cdr-icon>)
  },
};
