import CdrIcon from '../CdrIcon';
export default {
  name: 'IconPlane',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M8.658 2h.788a1 1 0 01.773.366l.075.104L15 10h5a2 2 0 110 4h-5l-4.706 7.53a1 1 0 01-.848.47h-.788a.5.5 0 01-.482-.634L10.222 14H5.36l-2.416 2.636a.5.5 0 01-.857-.444L3 12l-.912-4.192a.5.5 0 01.79-.505l.067.061L5.362 10h4.86L8.176 2.634a.5.5 0 01-.014-.066L8.158 2.5a.5.5 0 01.41-.492L8.658 2h.788-.788z"></path>
    </cdr-icon>)
  },
};
