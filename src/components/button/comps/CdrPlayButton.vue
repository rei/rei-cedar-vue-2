<template>
  <cdr-button
    :icon-only="true"
    :on-dark="onDark"
    aria-label="Play">
    <template name="icon">
      <icon-play class="cdr-button__icon" />
    </template>
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
