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
      <div class={this.style['cdr-form-error']}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="9" r="8" stroke="#FFF5F5" stroke-width="2" opacity="0.75"/>
          <circle cx="9" cy="9" r="6.25" fill="white" stroke="#B33322" stroke-width="1.5"/>
          <rect
            x="5.6416"
            y="6.70215"
            width="1.5"
            height="8"
            rx="0.75"
            transform="rotate(-45 5.6416 6.70215)"
            fill="#B33322"
          />
        </svg> {this.$slots.error || this.error}
      </div>
    );
  },
};
