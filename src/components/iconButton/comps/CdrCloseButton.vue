<template>
  <cdr-icon-button v-bind="$props">
    <icon-x-lg />
  </cdr-icon-button>
</template>

<script>
import classModifier from 'mixinsdir/classModifier';
import { IconXLg } from '@rei/cdr-icon';
import CdrIconButton from 'componentsdir/iconButton/CdrIconButton';

export default {
  name: 'CdrCloseButton',
  components: {
    CdrIconButton,
    IconXLg,
  },
  extends: {
    CdrIconButton,
  },
  mixins: [classModifier],
};
</script>

<style>
  @import '../../../css/settings/_index.pcss';
  @import '../styles/CdrIconButton.pcss';
</style>
