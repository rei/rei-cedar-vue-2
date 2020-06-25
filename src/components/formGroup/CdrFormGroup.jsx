import style from './styles/CdrFormGroup.scss';

export default {
  name: 'CdrFormGroup',
  props: {
    label: {
      type: String,
      default: '',
      required: false,
    },
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-form-group';
    },
  },
  render() {
    return (<fieldset class={this.style[this.baseClass]}>
      <legend>{this.$slots.label || this.label}</legend>
      {this.$slots.default}
    </fieldset>);
  },
};
