<template>
  <cdr-icon-only-button
    v-bind="$props"
  >
    <icon-play modifier="inherit-color" />
  </cdr-icon-only-button>
</template>

<script>
import { IconPlay } from '@rei/cdr-icon';
import CdrIconOnlyButton from 'componentsdir/iconOnlyButton/CdrIconOnlyButton';

export default {
  name: 'CdrPlayButton',
  components: {
    CdrIconOnlyButton,
    IconPlay,
  },
  extends: CdrIconOnlyButton,
};
</script>

<style>
  @import '../../../css/settings/_index.pcss';
  @import '../styles/CdrIconOnlyButton.pcss';
</style>
