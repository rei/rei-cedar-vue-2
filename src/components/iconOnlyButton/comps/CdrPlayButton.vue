<template>
  <cdr-icon-only-button
    v-bind="$props"
  >
    <icon-play />
  </cdr-icon-only-button>
</template>

<script>
import classModifier from 'mixinsdir/classModifier';
import { IconPlay } from '@rei/cdr-icon';
import CdrIconOnlyButton from 'componentsdir/iconOnlyButton/CdrIconOnlyButton';

export default {
  name: 'CdrPlayButton',
  components: {
    CdrIconOnlyButton,
    IconPlay,
  },
  extends: CdrIconOnlyButton,
  mixins: [classModifier],
};
</script>

<style>
  @import '../../../css/settings/_index.pcss';
  @import '../styles/CdrIconOnlyButton.pcss';
</style>
