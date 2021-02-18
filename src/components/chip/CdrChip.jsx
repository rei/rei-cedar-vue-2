import clsx from 'clsx';
import style from './styles/CdrChip.scss';
import modifier from '../../mixins/modifier';
import propValidator from '../../utils/propValidator';

export default {
  name: 'CdrChip',
  mixins: [modifier],
  props: {
    modifier: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['default', 'emphasis'],
      ),
      default: 'default',
    },
  },
  data() {
    return {
      style,
      baseClass: 'cdr-chip',
    };
  },
  render() {
    return (
      <button
        class={clsx(this.style[this.baseClass], this.modifierClass)}
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
