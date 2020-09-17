import style from './styles/CdrTooltip.scss';
import CdrPopup from '../popup/CdrPopup';
import propValidator from '../../utils/propValidator';

export default {
  name: 'CdrTooltip',
  components: {
    CdrPopup,
  },
  props: {
    position: {
      type: String,
      required: false,
      default: 'up',
      validator: (value) => propValidator(
        value,
        ['up', 'down', 'left', 'right'],
      ),
    },
    autoPosition: {
      type: Boolean,
      default: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      style,
      open: false,
      openHandler: undefined,
      closeHandler: undefined,
      timeout: undefined,
    };
  },
  mounted() {
    this.addHandlers();
    const trigger = this.$refs.trigger.children[0];
    if (trigger) this.$refs.trigger.children[0].setAttribute('aria-describedby', this.id);
  },
  methods: {
    openTooltip() {
      if (this.timeout) clearTimeout(this.timeout);
      this.open = true;
    },
    closeTooltip() {
      this.timeout = setTimeout(() => {
        this.open = false;
      }, 250);
    },
    addHandlers() {
      this.openHandler = this.openTooltip.bind(this);
      this.closeHandler = this.closeTooltip.bind(this);

      const triggerElement = this.$refs.trigger.children[0];
      const popupElement = this.$refs.popup.$el;
      if (triggerElement) {
        triggerElement.addEventListener('mouseover', this.openHandler);
        triggerElement.addEventListener('focus', this.openHandler);

        triggerElement.addEventListener('mouseleave', this.closeHandler);
        triggerElement.addEventListener('blur', this.closeHandler);

        popupElement.addEventListener('mouseover', this.openHandler);
        popupElement.addEventListener('mouseleave', this.closeHandler);
      }
    },
  },
  render() {
    return (
      <div
        class={this.style['cdr-tooltip--wrapper']}
      >
        <div ref="trigger">
          { this.$slots.trigger }
        </div>
        <cdr-popup
          class={this.style['cdr-tooltip']}
          role="tooltip"
          ref="popup"
          position={ this.position }
          autoPosition={ this.autoPosition }
          opened={ this.open }
          id={this.id}
        >
          { this.$slots.default }
        </cdr-popup>
      </div>
    );
  },
};
