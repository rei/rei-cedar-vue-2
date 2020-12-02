import CdrIcon from '../CdrIcon';
export default {
  name: 'IconSizeChart',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default && this.$slots.default()}
      <path role="presentation" d="M14.828 18.364l.927.926 3.535-3.535L8.245 4.71 4.71 8.245l.926.927 1.237-1.238a.75.75 0 111.061 1.06l-1.237 1.238 1.06 1.06.53-.53a.75.75 0 011.061 1.061l-.53.53.884.884L10.939 12A.75.75 0 1112 13.06l-1.237 1.238.883.884.53-.53a.75.75 0 011.061 1.06l-.53.53 1.06 1.061 1.238-1.237a.75.75 0 111.06 1.06l-1.237 1.238zM8.962 3.296l11.752 11.752a1 1 0 010 1.414l-4.252 4.243a1 1 0 01-1.414 0L3.296 8.952a1 1 0 010-1.414l4.242-4.242a1.011 1.011 0 011.424 0z"></path>
    </cdr-icon>)
  },
};
