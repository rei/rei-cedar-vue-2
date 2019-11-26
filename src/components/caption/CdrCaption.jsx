import clsx from 'clsx';
import style from './styles/CdrCaption.scss';
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
      style,
    };
  },
  render() {
    return (
      <div class={this.style['cdr-caption']}>
        {this.summary
          ? <p
            class={this.style['cdr-caption__summary']}
          >
            { this.summary }
          </p> : ''
        }
        {this.credit ? <cite
            class={this.style['cdr-caption__cite']}
          >
            { this.credit }
          </cite> : ''
        }
      </div>
    );
  },
};
