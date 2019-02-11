<template>
  <div
    v-show="isOpen || !toggleButtonSelector"
    :class="[$style['cdr-popover__container'], defaultStylesClass]"
    :aria-labelledby="ariaLabelledBy"
    :aria-describedby="ariaDescribedBy"
    role="dialog"
  >
    <slot />
  </div>
</template>

<script>

export default {
  name: 'CdrPopover',
  props: {
    /**
     * The full selector for the toggle button/link that opens and closes the popover.
     */
    toggleButtonSelector: {
      type: String,
      required: false,
      default: null,
    },

    /**
     * There are cases where default styling shouldnt apply.
     * Like a nav popover on mobile. In this case, this prop can be
     * set to false.
    */
    hasDefaultStyling: {
      type: Boolean,
      required: false,
      default: true,
    },

    /**
     * Aria label - the popover title.
     */
    ariaLabelledBy: {
      type: String,
      required: false,
      default: '',
    },

    /**
     * Aria description - the popover description.
     */
    ariaDescribedBy: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    defaultStylesClass() {
      return this.hasDefaultStyling ? this.$style['cdr-popover__container--default'] : '';
    },
  },
  mounted() {
    document.addEventListener('click', this.delegateClickMethod);
  },

  destroyed() {
    document.removeEventListener('click', this.delegateClickMethod);
  },

  methods: {
    /**
    * Checks click conditions and determines whether to open or close the popover.
    */
    delegateClickMethod(event) {
      const clickTarget = event.target;
      const toggleButton = document.querySelector(this.toggleButtonSelector);
      const popover = this.$el;

      if (!toggleButton) return;

      // Store some information about what was clicked.
      const toggleButtonWasClicked = (clickTarget === toggleButton || toggleButton.contains(clickTarget)); /* eslint-disable-line */
      const anywhereButPopoverWasClicked = (clickTarget !== popover && !popover.contains(clickTarget)); /* eslint-disable-line */

      // Delegate to the correct methods based on the conditions.
      if (!this.isOpen && toggleButtonWasClicked) {
        this.open();
      } else if (this.isOpen && anywhereButPopoverWasClicked) {
        this.close();
      }
    },

    /**
     * Opens popover
     */
    open() {
      this.isOpen = true;
    },

    /**
     * Closes popover
     */
    close() {
      this.isOpen = false;
    },
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrPopover.pcss';
</style>
