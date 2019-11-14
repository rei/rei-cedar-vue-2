import CdrIcon from '../CdrIcon';
export default {
  name: 'IconBrandSketch',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12 18.352L14.993 10H9.006L12 18.352zm-1.942-2.362L7.946 10H5.13l4.928 5.99zM16.054 10l-2.116 5.995L18.87 10h-2.816zM9.16 9h5.68l-2.836-5L9.16 9zm4.133-4.735L16 9V4.721l-2.707-.456zM8 4.727V9l2.695-4.718L8 4.727zM17 9h2.693L17 5.12V9zM4.306 8.998L7 9V5.12L4.306 8.998zm7.592-6.941a1 1 0 01.33 0l5.338.9a1 1 0 01.655.415l3.547 5.107a1 1 0 01-.049 1.205l-8.947 10.877a1 1 0 01-1.544 0L2.28 9.684a1 1 0 01-.05-1.205l3.547-5.105a1 1 0 01.658-.416l5.462-.901z"></path>
    </cdr-icon>)
  },
};
