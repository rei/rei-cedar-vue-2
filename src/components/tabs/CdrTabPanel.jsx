import modifier from 'mixinsdir/modifier';
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
        beforeEnter: this.setEnterStart,
        afterEnter: this.setEnterEnd,
        beforeLeave: this.setLeaveStart,
        afterLeave: this.setLeaveEnd,
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
    setAnimationDirection(direction) {
      this.animationDirection = direction;
    },
    setOffsetX(x) {
      this.offsetX = x;
    },
    setEnterStart(element) {
      const el = element;
      el.style.animationDirection = 'reverse';
      el.style.animationTimingFunction = 'cubic-bezier(0.4, 0, 0.68, .06)';
      el.classList.add(this.style[this.animationDirection]);
    },
    setEnterEnd(element) {
      const el = element;
      el.style.animationDirection = '';
      el.classList.remove(this.style[this.animationDirection]);
    },
    setLeaveStart(element) {
      const el = element;
      el.classList.add(this.style[this.animationDirection]);
      el.style.animationTimingFunction = 'cubic-bezier(0.32, 0.94, 0.6, 1)';
    },
    setLeaveEnd(element) {
      const el = element;
      el.classList.remove(this.style[this.animationDirection]);
    },
    handleUpArrowNav() {
      this.$parent.setFocusToActiveTabHeader();
    },
  },
  render() {
    return (
      <transition
        name="fly"
        {...{ on: this.animationHooks }}
      >
        <div
          v-show={this.active}
          aria-hidden={!this.active}
          class={this.modifierClass}
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
