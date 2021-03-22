import style from './styles/CdrInputMasked.scss';
// TODO: load v-mask and just bind everything
export default {
  name: 'CdrInputMasked',
  props: {
    mask: '',
  },
  // https://github.com/probil/v-mask/pull/278/files
  computed: {
    rawValue: '', //hrmmmm OH iterate tthru possible charswhile stepping thru mask i guess?
  },
  data() {
    return {
      style,
    };
  },
  render() {
    return (
      <div>hello world</div>
    );
  },
};
