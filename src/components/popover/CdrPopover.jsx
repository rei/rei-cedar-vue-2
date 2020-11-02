import tabbable from 'tabbable';
import style from './styles/CdrPopover.scss';
import propValidator from '../../utils/propValidator';
import IconXSm from '../icon/comps/x-sm';
import CdrButton from '../button/CdrButton';
import CdrPopup from '../popup/CdrPopup';

export default {
  name: 'CdrPopover',
  components: {
    CdrPopup,
    CdrButton,
    IconXSm,
  },
  props: {
    position: {
      type: String,
      required: false,
      default: 'top',
      validator: (value) => propValidator(
        value,
        ['top', 'bottom', 'left', 'right'],
      ),
    },
    autoPosition: {
      type: Boolean,
      required: false,
      default: true,
    },
    label: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: true,
    },
    contentClass: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      style,
      open: false,
      openHandler: undefined,
      lastActive: undefined,
    };
  },
  mounted() {
    this.addHandlers();

    const trigger = this.$refs.trigger.children[0];
    if (trigger) {
      trigger.setAttribute('aria-controls', this.id);
      trigger.setAttribute('aria-haspopup', 'dialog');
    }
  },
  methods: {
    openPopover(e) {
      const { activeElement } = document;

      this.lastActive = activeElement;
      this.open = true;
      this.$emit('opened', e);
      this.$nextTick(() => {
        const tabbables = tabbable(this.$refs.popup.$el);
        if (tabbables[0]) tabbables[0].focus();
      });
    },
    closePopover(e) {
      this.open = false;
      this.$emit('closed', e);
      if (this.lastActive) this.lastActive.focus();
    },
    addHandlers() {
      this.openHandler = this.openPopover.bind(this);
      const triggerElement = this.$refs.trigger.children[0];
      if (triggerElement) {
        triggerElement.addEventListener('click', this.openHandler);
      }
    },
  },
  render() {
    return (
      <div class={this.style['cdr-popover--wrapper']}>
        <div ref="trigger">
          { this.$slots.trigger }
        </div>
        <cdr-popup
          class={this.style['cdr-popover']}
          role="dialog"
          ref="popup"
          position={ this.position }
          autoPosition={ this.autoPosition }
          opened={ this.open }
          onClosed={ this.closePopover }
          aria-expanded={ `${this.open}` }
          id={ this.id }
          contentClass={ this.contentClass }
        >
          <div class={this.style['cdr-popover__container']}>
            <div class={this.style['cdr-popover__content']}>
              {
                (this.$slots.title || this.label) && (
                  <div class={this.style['cdr-popover__title']}>
                    {
                      this.$slots.title
                    }
                    {
                      !this.$slots.title && this.label && (
                        <span>
                          {this.label}
                        </span>
                      )
                    }
                  </div>
                )
              }
              { this.$slots.default }
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
        </cdr-popup>
      </div>
    );
  },
};
