<template>
  <button :class="[modifierClass, themeClass]" :type="type" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
  import theme from '../../mixins/theme';
  import modifier from '../../mixins/modifier';

  export default {
    name: 'cdr-button',
    mixins: [theme, modifier],
    props: {
      /**
       * {button, submit, reset}. Defines the button type.
       */
      type: {
        type: String,
        default: 'button',
        validator: value => (['button', 'submit', 'reset'].indexOf(value) >= 0) || false,
      },
      /**
       * Add custom click actions.
       */
      onClick: {
        type: Function,
        default: () => () => null,
      },
    },
    computed: {
      baseClass() {
        const modifiers = this.modifier ? this.modifier.split(' ') : [];
        return modifiers.indexOf('link') >= 0 ? 'cdr-link' : 'cdr-button';
      },
    },
  };
</script>
