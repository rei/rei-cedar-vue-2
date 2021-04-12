import style from './styles/CdrFormError.scss';

export default {
  name: 'CdrFormError',
  props: {
    error: [Boolean, String],
  },
  data() {
    return {
      style,
    };
  },
  render() {
    // static/icon-error.svg
    return (
      <div class={this.style['cdr-form-error']} role="status" tabindex="0">
        <span class={this.style['cdr-form-error__icon']}/> {this.$slots.error || this.error}
      </div>
    );
  },
};
