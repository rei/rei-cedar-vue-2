import CdrIcon from '../CdrIcon';
export default {
  name: 'IconShipping',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M3.594 6.729l8-3.643a1 1 0 01.812 0l8 3.643a1 1 0 01.594.914v8.7a1 1 0 01-.594.914l-8 3.653a1 1 0 01-.812 0l-8-3.653A1 1 0 013 16.343v-8.7a1 1 0 01.594-.914zM5 9.2v6.5l6 2.68v-6.53L5 9.2zm8 9.18l6-2.65V9.2l-6 2.68v6.5zM6.475 7.648l2.042.924 5.51-2.47L12 5.177l-5.525 2.47zm3.48 1.548l2.043.924 5.51-2.471-2.027-.923-5.526 2.47zM6 13l2 .862v2L6 15v-2z"></path>
    </cdr-icon>)
  },
};
