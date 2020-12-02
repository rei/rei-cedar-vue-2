import CdrIcon from '../CdrIcon';
export default {
  name: 'IconSkiBoot',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default && this.$slots.default()}
      <path role="presentation" d="M6.16 2.01l.114.022 6.688 1.714.042-.358a.5.5 0 01.46-.44l.095.001a.497.497 0 01.442.46l-.003.09-.174 1.488-.028.335-.011-.003c.692.141 1.194.75 1.2 1.456l-.006.145a1.5 1.5 0 01-1.322 1.36l-.123.009-.147 1.485A63.501 63.501 0 0113 12.94c5.738 1.17 7.907 3.768 7.995 5.054l.003.08v2.87h.505a.499.499 0 01.09.99l-.09.008H14.86l-.114-.007-.112-.02-4.127-.955a1 1 0 00-.817.168l-.096.08-.486.46a1 1 0 01-.561.266l-.127.008H2.5a.499.499 0 01-.09-.99l.09-.008h.512l1.534-13.71.023.02a1.498 1.498 0 01.128-2.42l.125-.073.211-1.873a1 1 0 011.127-.88zm-.65 5.586L4.017 20.943H8.42l.486-.46a2 2 0 011.663-.527l.164.03 4.127.957h5.137v-2.867c0-.325-.415-.982-1.23-1.655l-.181-.144-.131-.097-2.596 2.614a.498.498 0 01-.635.06l-.07-.059a.5.5 0 010-.707l2.46-2.46c-.52-.3-1.106-.58-1.759-.833l-2.996 2.996a.5.5 0 01-.707-.707l2.652-2.654a20.489 20.489 0 00-1.909-.49H8.5a.5.5 0 110-1H12l.003-.077.09-.629.095-.733.067-.56H8.5a.5.5 0 110-1l3.864.001.084-.826.088-.903.818.07c.04.004.08.006.12.006l-.12-.006-7.843-.686zm.048-2.003a.5.5 0 00-.176.98l.089.016 7.97.697a.5.5 0 00.175-.98l-.089-.016-7.97-.697zM6.026 3l-.182 1.614 6.946.608.038-.322.013-.153L6.026 3z"></path>
    </cdr-icon>)
  },
};
