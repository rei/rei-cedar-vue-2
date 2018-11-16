<template>
  <cdr-button
    :icon-only="true"
    :on-dark="onDark"
    aria-label="Close">
    <icon-x-lg
      slot="icon"
      class="cdr-button__icon" />
  </cdr-button>
</template>

<script>
import { IconXLg } from '@rei/cdr-icon';
import CdrButton from 'componentsdir/button/CdrButton';

export default {
  name: 'CdrCloseButton',
  components: {
    IconXLg,
    CdrButton,
  },
  extends: CdrButton,
};
</script>
