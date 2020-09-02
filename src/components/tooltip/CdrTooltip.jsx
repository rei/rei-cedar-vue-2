import style from './styles/CdrTooltip.scss';
import CdrPopup from '../popup/CdrPopup';
import propValidator from '../../utils/propValidator';

export default {
  name: 'CdrTooltip',
  components: {
    CdrPopup,
  },
  props: {
    // TODO: popup mixin?
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
  },
  data() {
    return {
      style,
      open: false,
      openHandler: undefined,
      closeHandler: undefined,
    };
  },
  methods: {
    openTooltip() {
      this.open = true
    },
    closeTooltip() {
      this.open = false
    },
    addHandlers() {
      this.openHandler = this.openTooltip.bind(this);
      this.closeHandler = this.closeTooltip.bind(this);

      const triggerElement = this.$refs.trigger.children[0];
      if (triggerElement) {
        triggerElement.addEventListener('mouseover', this.openHandler);
        triggerElement.addEventListener('focus', this.openHandler);

        triggerElement.addEventListener('mouseleave', this.closeHandler);
        triggerElement.addEventListener('blur', this.closeHandler);
      }
    },
  },
  mounted() {
    this.addHandlers();
  },
  destroyed() {
    // TODO: no need to do this since the element listened to gets destroyted with this too?
    // const triggerElement = this.$refs.trigger.children[0];
    // if (triggerElement) {
    //   triggerElement.removeEventListener('mouseover', this.openHandler);
    //   triggerElement.removeEventListener('focus', this.openHandler);
    //
    //
    //   triggerElement.removeEventListener('mouseleave', this.closeHandler);
    //   triggerElement.removeEventListener('blur', this.closeHandler);
    // }
  },
  render() {
    // TODO: aria-opened/expanded logic for tooltip?
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
          position={ this.position }
          autoPosition={ this.autoPosition }
          opened={ this.open }
        >
          { this.$slots.default }
        </cdr-popup>
      </div>
    );
  },
};
