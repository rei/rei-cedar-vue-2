import CdrIcon from '../CdrIcon';
export default {
  name: 'IconWater',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M20.218 16.384a1 1 0 011.576 1.23c-1.334 1.71-3.301 2.349-5.306 2.349-.75 0-1.504-.131-2.232-.405-.954-.36-1.821-.83-2.81-1.53-.01-.006-.015-.017-.024-.023-.846-.596-1.547-.98-2.338-1.276-1.855-.697-4.005-.071-5.297 1.587a.995.995 0 01-1.402.173.999.999 0 01-.173-1.403c1.833-2.35 4.899-3.235 7.575-2.23.953.359 1.82.83 2.81 1.53.01.007.014.017.023.024.846.595 1.547.978 2.339 1.276 1.853.695 3.967.355 5.26-1.302h-.001zm0-10.447a1 1 0 011.576 1.23c-1.334 1.71-3.301 2.35-5.306 2.35-.75 0-1.504-.132-2.232-.406-.954-.36-1.821-.83-2.81-1.53-.01-.006-.015-.017-.024-.023-.846-.596-1.547-.98-2.338-1.276-1.855-.697-4.005-.07-5.297 1.587a.995.995 0 01-1.402.173.999.999 0 01-.173-1.403c1.833-2.35 4.899-3.235 7.575-2.23.953.359 1.82.83 2.81 1.53.01.007.014.017.023.024.846.595 1.547.978 2.339 1.276 1.853.695 3.967.355 5.26-1.302h-.001zm0 5.223a1 1 0 011.576 1.23c-1.334 1.71-3.301 2.35-5.306 2.35-.75 0-1.504-.132-2.232-.406-.954-.36-1.821-.83-2.81-1.53-.01-.006-.015-.017-.024-.023-.846-.596-1.547-.98-2.338-1.276-1.855-.697-4.005-.07-5.297 1.588a.995.995 0 01-1.402.173.999.999 0 01-.173-1.403c1.833-2.35 4.899-3.236 7.575-2.23.953.358 1.82.83 2.81 1.53.01.006.014.016.023.023.846.595 1.547.978 2.339 1.276 1.853.695 3.967.355 5.26-1.302h-.001z"></path>
    </cdr-icon>)
  },
};