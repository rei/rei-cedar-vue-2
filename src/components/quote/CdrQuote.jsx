import clsx from 'clsx';
import CdrText from '../text/CdrText';
import modifier from '../../mixins/modifier';
import space from '../../mixins/space';
import style from './styles/CdrQuote.scss';

export default {
  name: 'CdrQuote',
  components: {
    CdrText,
  },
  mixins: [modifier, space],
  props: {
    tag: {
      type: String,
      default: 'blockquote',
      validator: value => (['blockquote', 'aside', 'q', 'div'].indexOf(value) >= 0) || false,

    },
    /** Caption summary text */
    summary: String,
    /** Caption credit text */
    citation: String,
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-quote';
    },
    summaryBlock() {
      return this.summary ? (
        <p
          class={this.style['cdr-quote__summary']}
        >
          { this.summary }
        </p>
      ) : '';
    },
    citationBlock() {
      return this.citation ? (
        <cdr-text
          tag="cite"
          modifier="citation"
          class={this.style['cdr-quote__citation']}
        >
          { this.citation }
        </cdr-text>
      ) : '';
    },
  },
  render() {
    const Component = this.tag;
    return (<Component
      class={clsx(this.style[this.baseClass], this.modifierClass, this.space)}
    >
      {this.summaryBlock}
      {this.$slots.default}
      {this.citationBlock}
    </Component>);
  },
};
