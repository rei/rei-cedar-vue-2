import clsx from 'clsx';
import style from './styles/CdrLabelWrapper.scss';
import modifier from '../../mixins/modifier';
import space from '../../mixins/space';
import size from '../../mixins/size';
import propValidator from '../../utils/propValidator';

export default {
  name: 'CdrLabelWrapper',
  mixins: [modifier, space, size],
  inheritAttrs: false,
  props: {
    labelClass: String,
    contentClass: String,
    background: {
      type: [String],
      default: 'primary',
      validator: (value) => propValidator(
        value,
        ['primary', 'secondary'],
      ),
    },
    disabled: Boolean,
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-label-wrapper';
    },
    disabledClass() {
      return this.disabled ? this.style['cdr-label-wrapper--disabled'] : '';
    },
  },
  render() {
    return (
      <div class={this.style['cdr-label-wrapper__container']}>
        <label class={clsx(
          this.style['cdr-label-wrapper'],
          this.style[`cdr-label-wrapper--${this.background}`],
          this.disabledClass,
          this.modifierClass,
          this.sizeClass,
          this.labelClass,
        )}>
          {this.$slots.input}
          <span class={this.style['cdr-label-wrapper__figure']}/>
          <div class={clsx(this.style['cdr-label-wrapper__content'], this.contentClass)}>
            {this.$slots.default}
          </div>
        </label>
      </div>
    );
  },
};
