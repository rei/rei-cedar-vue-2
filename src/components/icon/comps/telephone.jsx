import CdrIcon from '../CdrIcon';
export default {
  name: 'IconTelephone',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default}
      <path role="presentation" d="M4.36 5.783l1.848-1.548a1.014 1.014 0 011.663.724l.007.117c.065.738.196 1.458.386 2.153.055.198.14.463.255.796.09.259.072.542-.05.786l-.966 1.931a14.263 14.263 0 005.756 5.757l1.93-.966c.245-.122.528-.14.786-.05.331.114.595.199.792.253a12.126 12.126 0 002.273.395 1.014 1.014 0 01.72 1.667l-1.557 1.846a.997.997 0 01-.936.34c-.57-.1-1.012-.192-1.327-.273A16.25 16.25 0 014.29 8.066a18.567 18.567 0 01-.274-1.336 1.008 1.008 0 01.344-.947z"></path>
    </cdr-icon>)
  },
};
