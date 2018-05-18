<template>
  <cdr-icon-only-button
    v-bind="$props"
  >
    <icon-x-lg modifier="inherit-color" />
  </cdr-icon-only-button>
</template>

<script>
import { IconXLg } from '@rei/cdr-icon';
import CdrIconOnlyButton from 'componentsdir/iconOnlyButton/CdrIconOnlyButton';

export default {
  name: 'CdrCloseButton',
  components: {
    CdrIconOnlyButton,
    IconXLg,
  },
  extends: CdrIconOnlyButton,
};
</script>

<style>
  @import '../../../css/settings/_index.pcss';
  @import '../styles/CdrIconOnlyButton.pcss';
</style>
