<template>
  <cdr-button
    :icon-only="true"
    :on-dark="onDark"
    aria-label="Close">
    <template slot="icon">
      <icon-x-lg class="cdr-button__icon" />
    </template>
  </cdr-button>
</template>

<script>
import { IconXLg } from '@rei/cdr-icon';
import '@rei/cdr-icon/dist/cdr-icon.css';
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

<style>
  @import '../../../css/settings/_index.pcss';
  @import '../styles/CdrButton.pcss';
</style>
