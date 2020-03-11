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
    activeClass() {
      return this.active ? this.style['cdr-tab-panel-active-fly-right'] : this.style['cdr-tab-panel-inactive-fly-left']; // eslint-disable-line
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
