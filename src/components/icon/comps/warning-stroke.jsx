import CdrIcon from '../CdrIcon';
export default {
  name: 'IconWarningStroke',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default && this.$slots.default()}
      <path role="presentation" d="M11.106 3.558a1 1 0 011.788 0l8.002 15.995A1 1 0 0120.002 21H3.998a1 1 0 01-.894-1.447zM12 6.24L5.617 19h12.766L12 6.24zM12 16a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm.199-6a1 1 0 01.998 1.05l-.15 3a1 1 0 01-.998.95h-.098a1 1 0 01-.998-.95l-.15-3A1 1 0 0111.8 10h.398z"></path>
    </cdr-icon>)
  },
};
