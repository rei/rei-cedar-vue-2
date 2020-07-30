import clsx from 'clsx';
import style from './styles/CdrPopover.scss';
import propValidator from '../../utils/propValidator';
import IconXSm from  '../icon/comps/x-sm';
import CdrText from '../text/CdrText';
import CdrButton from '../button/CdrButton';

export default {
  name: 'CdrPopover',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    arrowDirection: {
      type: String,
      required: false,
      default: 'up',
      validator: (value) => propValidator(
        value,
        ['up', 'down', 'left', 'right'],
      ),
    },
    title: {
      type: String,
      default: ''
    }
  },
  components: {
    IconXSm,
    CdrText,
    CdrButton,
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    arrowDirectionClass() {
      return this.arrowDirection ? this.style[`cdr-popover__arrow--${this.arrowDirection}`] : '';
    },
  },
  methods: {
    closePopover(e) {
      this.$emit('closed', e);
    },
    handleKeyDown({ key }) {
      switch (key) {
        case 'Escape':
        case 'Esc':
          this.closePopover();
          break;
        default: break;
      }
    },
  },
  // TODO: add watcher for opened, focus the popover?
  // TODO: esc key closes popover (emits closed? i guess?)
  render() {
    // TODO: make props/events match whatever modal does?
    // TODO: what should title tag be????
    return this.open ? (
      <div
        class={clsx(this.style['cdr-popover'], this.arrowDirectionClass)}
        role="dialog"
      >
        <div class={this.style['cdr-popover__header']}>
          <div class={this.style['cdr-popover__title']}>
            {
              this.$slots.title
            }
            {
              !this.$slots.title && (
                <cdr-text
                  tag="h1"
                  modifier="heading-serif-400"
                >
                  {this.title}
                </cdr-text>
              )
            }
          </div>
          <cdr-button
            class={this.style['cdr-popover__close-button']}
            icon-only
            on-click={this.closePopover}
            aria-label="Close"
            size="small"
          >
            <icon-x-sm
              slot="icon"
              inherit-color
            />
          </cdr-button>
        </div>
        {this.$slots.default}
      </div>
    ) : undefined;
  }
};
