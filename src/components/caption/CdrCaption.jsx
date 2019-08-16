import s from './styles/CdrCaption.scss';
import cs from 'classnames';
/**
 * Cedar 2 component for captions
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrCaption',
  props: {
    /** Caption summary text */
    summary: String,
    /** Caption credit text */
    credit: String,
  },
  data() {
    return {
      style: s,
    };
  },
  render(h){
    return (
      <div class={cs(s['cdr-caption'], 'cdr-space-inset-one-x-squish')}>
        {this.summary ? 
          <p
            class={s['cdr-caption__summary']}
          >
            { this.summary }
          </p> : ''
        }
        {this.credit ? <cite
            class={s['cdr-caption__cite']}
            class="cdr-text cdr-text--citation"
          >
            { this.credit }
          </cite> : ''
        }
      </div>
    )
  }
};
