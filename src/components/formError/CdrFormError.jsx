import style from './styles/CdrFormError.scss';
import IconErrorStroke from '../icon/comps/error-stroke';

export default {
  name: 'CdrFormError',
  components: { IconErrorStroke },
  props: {
    error: [Boolean, String],
  },
  data() {
    return {
      style,
    };
  },
  render() {
    return (
      <div class={this.style['cdr-form-error']} role="status" tabindex="0">
        <span class={this.style['cdr-form-error__icon']}>
          <icon-error-stroke
            size="small"
            inherit-color />
        </span>
        {this.$slots.error || this.error}
      </div>
    );
  },
};
