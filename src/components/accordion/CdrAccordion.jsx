import clsx from 'clsx';
import IconCaretDown from '../icon/comps/caret-down';
import modifier from '../../mixins/modifier';
import style from './styles/CdrAccordion.scss';

export default {
  name: 'CdrAccordion',
  components: {
    IconCaretDown,
  },
  mixins: [modifier],
  inject: ['unwrap'],
  props: {
    /**
     * The unique id of an accordion.
     */
    id: {
      type: String,
      required: true,
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
    // Sets the heading level
    level: {
      type: [String, Number],
      required: true,
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
      // reset maxHeight before animating
      this.maxHeight = !this.opened ? `${this.$refs['accordion-content'].clientHeight}px` : 0;
      // nextTick is not sufficient here, must wait for CSS to re-paint
      setTimeout(() => {
        // on next frame, set maxHeight to new value
        this.maxHeight = this.opened ? `${this.$refs['accordion-content'].clientHeight}px` : 0;
        setTimeout(() => {
          // after animation is complete, remove max-height so content can reflow
          this.maxHeight = this.opened ? 'none' : 0;
        }, 350); // cdr-duration-3x + 50ms
      }, 50);
    },
  },
  mounted() {
    /*
      The intent here is to give maxHeight an actual pixel value when the accordion
      is initialized as open. This guarantees that the open-to-close animation is
      nice and smooth the first time they click it.
    */
    if (this.opened && this.$refs['accordion-content']) {
      this.maxHeight = 'none';
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
    const Heading = `h${this.level}`;
    console.log(this.unwrap)
    const HeadingContent = this.unwrap ? 'div' : 'button'

// WHY does accordion group wrap this in a li rather than just chilling here?!?!?!
// TODO: remove header/button class when unwrapped.
// TODO: but...hmmmi guess theey can style text via the slot
    return (<li
      class={!this.unwrap && clsx(this.style[this.baseClass],
        this.modifierClass,
        this.styleClass,
        this.focusedClass)}
      id={`${this.id}-accordion`}
      ref="accordion-container"
    >
      <Heading class={!this.unwrap && this.style['cdr-accordion__header']}>
        <HeadingContent
          class={!this.unwrap && [this.style['cdr-accordion__button'], 'js-cdr-accordion-button']}
          id={this.id}
          onClick={this.unwrap || this.onClick}
          onFocus={this.unwrap || this.onFocus}
          onBlur={this.unwrap || this.onBlur}
          aria-expanded={`${this.opened}`}
          aria-controls={`${this.id}-collapsible`}
          >
          <span
            class={this.style['cdr-accordion__label']}
            id={`${this.id}-label`}
            >
            { this.$slots.label }
          </span>
          { !this.unwrap && <icon-caret-down
            class={clsx(this.style['cdr-accordion__icon'], this.isOpenClass)}
            size={this.compact ? 'small' : null}
          /> }
        </HeadingContent>
      </Heading>
      <div
        class={clsx(this.style['cdr-accordion__content-container'], this.isOpenClass)}
        style={ { maxHeight: this.unwrap ? 'auto' : this.maxHeight } }
      >
        <div
          class={clsx(this.style['cdr-accordion__content'], this.isOpenClass)}
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
