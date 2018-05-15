<template>
  <div class="button-example">
    <h2>CdrButton + CdrIcon Comps</h2>
    <cdr-button
      size="large"
    ><icon-check-lg
    />Button and Icon</cdr-button
    >
    <cdr-button
      size="medium"
      style-modifiers="secondary"
    ><icon-check-lg
    />Button and Icon</cdr-button
    >
    <cdr-button
      size="small"
    ><icon-check-sm
    />Button and Icon</cdr-button
    >
  </div>
</template>

<script>
import { CdrButton } from 'componentsdir/button/dist/cdr-button';
import { IconCheckLg, IconCheckSm } from 'componentsdir/icon/dist/cdr-icon';

export default {
  name: 'ButtonIconComps',
  components: {
    CdrButton,
    IconCheckLg,
    IconCheckSm,
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
