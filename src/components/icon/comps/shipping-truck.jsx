import CdrIcon from '../CdrIcon';
export default {
  name: 'IconShippingTruck',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default}
      <path fill-rule="evenodd" d="M4 15V6h10v9H9.236c-.55-.614-1.348-1-2.236-1-.888 0-1.687.386-2.236 1H4zM16 4v4h3.938L22 12v4a1 1 0 01-1 1h-1a3 3 0 11-6 0h-4a3 3 0 11-6 0H2.933C2.418 17 2 16.552 2 16V5c0-.552.418-1 .933-1H16zm0 8v-2h3l1 2h-4zm1 6a1 1 0 110-2 1 1 0 010 2zM6 17a1 1 0 102 0 1 1 0 00-2 0zm.429-8H12V8H6.429C6.192 8 6 8.224 6 8.5s.192.5.429.5zM12 10H7.417c-.23 0-.417.224-.417.5s.187.5.417.5H12v-1zm-3.6 2H12v1H8.4c-.22 0-.4-.224-.4-.5s.18-.5.4-.5z" clip-rule="evenodd"></path>
    </cdr-icon>)
  },
};
