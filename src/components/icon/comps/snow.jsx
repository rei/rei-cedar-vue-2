import CdrIcon from '../CdrIcon';
export default {
  name: 'IconSnow',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default && this.$slots.default()}
      <path role="presentation" d="M13.31 12.75h3.28l1.856 1.857a.75.75 0 101.06-1.06l-.795-.797h2.539a.75.75 0 100-1.5h-2.5l.76-.76a.75.75 0 10-1.062-1.06l-1.82 1.82h-3.297l1.638-2.837 2.486-.666a.75.75 0 10-.388-1.45l-1.037.279 1.26-2.184a.75.75 0 10-1.299-.75l-1.28 2.217-.29-1.088a.75.75 0 10-1.45.388l.68 2.537-1.63 2.822-1.66-2.874.667-2.486A.75.75 0 009.58 4.77l-.278 1.037-1.26-2.184a.75.75 0 00-1.3.75l1.28 2.217-1.088-.29a.75.75 0 00-.388 1.449l2.536.68 1.63 2.822H7.393l-1.82-1.82a.75.75 0 00-1.06 1.06l.759.76H2.75a.75.75 0 100 1.5h2.56l-.796.796a.75.75 0 101.06 1.06l1.857-1.856h3.302l-1.661 2.877-2.537.68a.75.75 0 10.389 1.449l1.087-.292-1.27 2.2a.75.75 0 001.3.75l1.25-2.166.277 1.037a.75.75 0 101.45-.388l-.667-2.486 1.67-2.893 1.64 2.84-.68 2.537a.75.75 0 101.45.388l.29-1.087 1.27 2.199a.75.75 0 101.3-.75l-1.25-2.165 1.037.278a.75.75 0 00.388-1.45l-2.486-.665-1.67-2.893z"></path>
    </cdr-icon>)
  },
};
