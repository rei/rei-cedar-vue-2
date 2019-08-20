import { IconCaretDown } from 'componentsdir/icon/build/main';
import modifier from 'mixinsdir/modifier';
import cs from 'classnames';
import style from './styles/CdrAccordion.scss';

export default {
  name: 'CdrAccordion',
  components: {
    IconCaretDown,
  },
  mixins: [modifier],
  props: {
    /**
     * The unique id of an accordion.
     */
    id: {
      type: String,
      required: true,
    },
    /**
     * The readable text on the accordion button.
     */
    label: {
      type: String,
      required: false,
    },
    /**
     * Toggle this value to open/close the accordion.
     */
    opened: {
      type: Boolean,
      default: false,
    },
    /**
     * Sets a compact style.
     */
    compact: {
      type: Boolean,
      default: false,
    },
    /**
     * Sets a border-aligned style.
     */
    borderAligned: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      focused: false,
      maxHeight: this.opened ? 'none' : 0, // set maxHeight to none if initialized as open
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-accordion';
    },
    styleClass() {
      const styles = [];

      if (this.compact) {
        styles.push(this.modifyClassName(this.baseClass, 'compact'));
      }

      if (this.borderAligned) {
        styles.push(this.modifyClassName(this.baseClass, 'border-aligned'));
      }

      return styles.join(' ');
    },
    focusedClass() {
      return this.focused ? this.modifyClassName(this.baseClass, 'focused') : null;
    },
    isOpenClass() {
      return this.opened ? 'open' : 'closed';
    },
  },
  watch: {
    opened() {
      this.maxHeight = this.opened ? `${this.$refs['accordion-content'].clientHeight}px` : 0;
    },
  },
  mounted() {
    /*
      The intent here is to give maxHeight an actual pixel value when the accordion
      is initialized as open. This guarantees that the open-to-close animation is
      nice and smooth the first time they click it.
    */
    if (this.opened && this.$refs['accordion-content']) {
      this.maxHeight = `${this.$refs['accordion-content'].clientHeight}px`;
    }
  },
  methods: {
    onClick(event) {
      this.$emit('accordion-toggle', event);
    },
    onFocus() {
      this.focused = true;
    },
    onBlur() {
      this.focused = false;
    },
  },
  render() {
    return (<div
      class={cs(this.modifierClass, this.styleClass, this.focusedClass)}
      id={`${this.id}-accordion`}
      ref="accordion-container"
    >
      <button
        class={style['cdr-accordion__button']}
        id={this.id}
        onClick={this.onClick}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        aria-expanded={`${this.opened}`}
        aria-controls={`${this.id}-collapsible`}
      >
        <span
          class={style['cdr-accordion__label']}
          id={`${this.id}-label`}
        >
          { this.$slots.label || this.label}
        </span>
        <icon-caret-down
          class={cs(style['cdr-accordion__icon'], this.isOpenClass)}
          size={this.compact ? 'small' : null}
        />
      </button>
      <div
        class={cs(style['cdr-accordion__content-container'], this.isOpenClass)}
        style={ { maxHeight: this.maxHeight } }
      >
        <div
          class={cs(style['cdr-accordion__content'], this.isOpenClass)}
          aria-hidden={`${!this.opened}`}
          id={`${this.id}-collapsible`}
          ref="accordion-content"
        >
          {this.$slots.default}
        </div>
      </div>
    </div>);
  },
};
