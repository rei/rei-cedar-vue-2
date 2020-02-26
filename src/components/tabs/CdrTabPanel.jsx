import clsx from 'clsx';
import modifier from '../../mixins/modifier';
import style from './styles/CdrTabPanel.scss';

export default {
  name: 'CdrTabPanel',
  mixins: [modifier],
  props: {
    /**
     * Required string value that shows up on tab header
     */
    name: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Optional extra reference value to be set on the tab, otherwise
     * the tab name will be used for reference.
     */
    id: String,
  },
  data() {
    return {
      active: false,
      offsetX: 0,
      tabId: this.id || this.name,
      animationDirection: 'default',
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-tab-panel';
    },
    animationHooks() {
      return {
        ...this.$listeners,
      };
    },
  },
  methods: {
    setActive(state) {
      this.active = state;
      this.$emit('tab-change', state, this.tabId);
      this.$emit('tabChange', state, this.tabId);
    },
    setOffsetX(x) {
      this.offsetX = x;
    },
    handleUpArrowNav() {
      this.$parent.setFocusToActiveTabHeader();
    },
  },
  render() {
    return (
      <transition
        name="slide-fade"
        mode="out-in"
        {...{ on: this.animationHooks }}
      >
        <div
          v-show={this.active}
          aria-hidden={!this.active}
          class={clsx(this.style[this.baseClass], this.modifierClass)}
          id={this.tabId}
          ref="cdrTabPanelContainer"
          tabindex="0"
          role="tabpanel"
          vOn:keydown_up_prevent={this.handleUpArrowNav}
          key={this.name}
        >
          {this.$slots.default}
        </div>
      </transition>
    );
  },
};
