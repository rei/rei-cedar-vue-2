import CdrIcon from '../CdrIcon';
export default {
  name: 'IconBrandLinkedin',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M18.338 18.338H15.67v-4.177c0-.996-.018-2.278-1.387-2.278-1.39 0-1.603 1.086-1.603 2.206v4.25h-2.667v-8.59h2.56v1.173h.036c.357-.675 1.228-1.387 2.527-1.387 2.703 0 3.202 1.779 3.202 4.092v4.711zM7.004 8.574a1.548 1.548 0 110-3.096 1.548 1.548 0 010 3.096zM5.67 18.338h2.67v-8.59H5.67v8.59zM19.668 3H4.328C3.597 3 3 3.581 3 4.297v15.404C3 20.418 3.596 21 4.329 21h15.339c.734 0 1.332-.582 1.332-1.3V4.297C21 3.581 20.402 3 19.668 3z"></path>
    </cdr-icon>)
  },
};
