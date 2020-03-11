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
    ariaLabelledby: {
      type: String,
      required: true,
    },
    /**
     * Optional extra reference value to be set on the tab, otherwise
     * the tab name will be used for reference.
     */
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      active: false,
      hidden: true,
      offsetX: 0,
      animationDirection: null,
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
    activeClass() {
      return this.active ? this.style['cdr-tab-panel-active-fly-right'] : this.style['cdr-tab-panel-inactive-fly-left']; // eslint-disable-line
    },
    animationDirectionClass() {
      return this.animationDirection ? `cdr-tab-panel-${this.animationDirection}` : null;
    },
  },
  methods: {
    setActive(state) {
      if (state) this.hidden = false;
      this.active = state;
      this.$emit('tab-change', state, this.id);
      this.$emit('tabChange', state, this.id);
    },
    setAnimationDirection(direction) {
      this.animationDirection = direction;
    },
    setOffsetX(x) {
      this.offsetX = x;
    },
    setEnterStart(element) {
      console.log('setEnterStart');
      const el = element;
      el.style.animationDirection = 'reverse';
      el.style.animationTimingFunction = 'cubic-bezier(0.4, 0, 0.68, .06)';
      el.classList.add(this.style[this.animationDirection]);
    },
    setEnterEnd(element) {
      console.log('setEnterEnd');
      const el = element;
      el.style.animationDirection = '';
      el.classList.remove(this.style[this.animationDirection]);
    },
    setLeaveStart(element) {
      console.log('setLeaveStart');
      const el = element;
      el.classList.add(this.style[this.animationDirection]);
      el.style.animationTimingFunction = 'cubic-bezier(0.32, 0.94, 0.6, 1)';
    },
    setLeaveEnd(element) {
      console.log('setLeaveEnd'); 
      const el = element;
      el.classList.remove(this.style[this.animationDirection]);
    },
    handleUpArrowNav() {
      this.$parent.setFocusToActiveTabHeader();
    },
    animationEnd(event) {
      if (event.animationName.split('-')[0] === 'exit') {
        // console.log('setting hidden true', this.name);
        this.hidden = true;
      }
    },
  },
  render() {
    return (
      <div
        aria-hidden={!this.active}
        aria-labelledby={this.ariaLabelledby}
        class={clsx(this.style[this.baseClass], this.modifierClass, this.activeClass)}
        hidden={this.hidden}
        id={this.id}
        ref="cdrTabPanelContainer"
        tabindex="0"
        role="tabpanel"
        vOn:keydown_up_prevent={this.handleUpArrowNav}
        vOn:animationend={this.animationEnd}
        key={this.name}
      >
        {this.$slots.default}
      </div>
    );
  },
};
