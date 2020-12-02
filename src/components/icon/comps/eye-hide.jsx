import CdrIcon from '../CdrIcon';
export default {
  name: 'IconEyeHide',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default && this.$slots.default()}
      <path role="presentation" d="M18.293 4.293a1 1 0 011.414 1.414l-14 14a1 1 0 11-1.414-1.414l1.866-1.866c-1.617-.941-3-2.272-4.008-3.899a1 1 0 010-1.053A11.566 11.566 0 0112 6c1.36 0 2.678.235 3.91.675l2.383-2.382zm.544 3.93a11.558 11.558 0 013.013 3.25 1 1 0 010 1.054A11.57 11.57 0 0112 18a11.65 11.65 0 01-2.638-.302l1.83-1.831-.089.092c.296.027.595.041.897.041a9.57 9.57 0 007.799-4 9.556 9.556 0 00-2.397-2.342l1.435-1.435zM12 8a9.567 9.567 0 00-7.798 4 9.558 9.558 0 003.43 2.954l1.66-1.66a3 3 0 014.001-4.001l1.014-1.014A9.646 9.646 0 0012 8z"></path>
    </cdr-icon>)
  },
};
