import clsx from 'clsx';
import style from './styles/CdrLabelWrapper.scss';
import modifier from '../../mixins/modifier';
import space from '../../mixins/space';
import size from '../../mixins/size';

export default {
  name: 'CdrLabelWrapper',
  mixins: [modifier, space, size],
  props: {
    labelClass: String,
    contentClass: String,
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
  },
  render() {
    return (
      <div class={this.style['cdr-label-wrapper__container']}>
        <label class={clsx(
          this.style['cdr-label-wrapper'],
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
