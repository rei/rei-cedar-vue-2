<template>
  <cdr-button
    :icon-only="true"
    :on-dark="onDark"
    aria-label="Play">
    <icon-play
      slot="icon"
      class="cdr-button__icon" />
  </cdr-button>
</template>

<script>
import { IconPlay } from '@rei/cdr-icon';
import '@rei/cdr-icon/dist/cdr-icon.css';
import CdrButton from 'componentsdir/button/CdrButton';

export default {
  name: 'CdrPlayButton',
  components: {
    IconPlay,
    CdrButton,
  },
  extends: CdrButton,
};
</script>

<style>
  @import '../../../css/settings/_index.pcss';
  @import '../styles/CdrButton.pcss';
</style>
