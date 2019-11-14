import CdrIcon from '../CdrIcon';
export default {
  name: 'IconPlayground',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M13 11a5 5 0 014 4.821h.002v.143h.001v.043a3 3 0 002.902 2.998c.064-.006.127-.006.191 0 .022 0 .043 0 .064-.002v.01a1 1 0 010 1.975v.017a5 5 0 01-5.157-4.998v-.065H15v-.043a3 3 0 00-2-2.829v6.931a1 1 0 01-2 0v-4H5v4a1 1 0 01-2 0v-10c0-.223.073-.429.196-.595l3.93-5.892a1 1 0 011.756.015l3.907 5.857c.132.17.211.383.211.615v1zm-8 .001v3h6v-3H5zm5.128-2L7.999 5.81 5.87 9.001h4.258z"></path>
    </cdr-icon>)
  },
};
