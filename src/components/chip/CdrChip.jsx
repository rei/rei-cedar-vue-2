import style from './styles/CdrChip.scss';

export default {
  name: 'CdrChip',
  data() {
    return {
      style,
      baseClass: 'cdr-chip',
    };
  },
  render() {
    return (
      <button
        class={this.style[this.baseClass]}
        {...{ on: this.$listeners }}
      >
        { this.$slots['icon-left'] && (
          <span class={this.style['cdr-chip__icon-left']}>
            { this.$slots['icon-left'] }
          </span>
        )}
        { this.$slots.default }
        { this.$slots['icon-right'] && (
          <span class={this.style['cdr-chip__icon-right']}>
            { this.$slots['icon-right'] }
          </span>
        )}
      </button>
    );
  },
};
