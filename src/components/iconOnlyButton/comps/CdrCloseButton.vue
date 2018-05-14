<template>
  <cdr-icon-only-button v-bind="$props">
    <icon-x-lg />
  </cdr-icon-only-button>
</template>

<script>
import classModifier from 'mixinsdir/classModifier';
import { IconXLg } from '@rei/cdr-icon';
import CdrIconOnlyButton from 'componentsdir/iconOnlyButton/CdrIconOnlyButton';

export default {
  name: 'CdrCloseButton',
  components: {
    CdrIconOnlyButton,
    IconXLg,
  },
  extends: {
    CdrIconOnlyButton,
  },
  mixins: [classModifier],
};
</script>

<style>
  @import '../../../css/settings/_index.pcss';
  @import '../styles/CdrIconOnlyButton.pcss';
</style>
