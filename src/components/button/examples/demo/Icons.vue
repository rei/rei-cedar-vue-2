<template>
  <div>
    <div class="button-example">
      <h2>CdrButton + CdrIcon Comps</h2>
      <cdr-button
        tag="a"
        href="https://rei.com"
        size="large"
      ><icon-check-lg
      />Anchor and Icon</cdr-button
      >
      <cdr-button
        size="medium"
        style-modifiers="secondary"
      ><icon-check-lg
      />Medium and Icon</cdr-button
      >
      <cdr-button
        size="small"
      ><icon-check-lg
        modifier="sm"
      />Icon CSS small</cdr-button
      >
      <cdr-button
        size="small"
      ><icon-check-sm
      />Small (different) icon</cdr-button
      >
    </div>
    <div class="button-example">
      <cdr-button
        size="large"
      ><icon-clock
      />Button and Icon</cdr-button
      >
      <cdr-button
        size="medium"
      ><icon-clock
      />Button and Icon</cdr-button
      >
      <cdr-button
        size="small"
      ><icon-clock
      />Button and Icon</cdr-button
      >
    </div>
    <div class="button-example">
      <cdr-button
        size="small"
        :responsive-size="['large@extra-small', 'medium@small', 'small@large']"
      >Responsive<icon-clock
      />
      </cdr-button>
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';
import { CdrButton } from 'componentsdir/button/dist/cdr-button';
import { IconCheckLg, IconCheckSm, IconClock, CdrIcon } from 'componentsdir/icon/dist/cdr-icon';

export default {
  name: 'ButtonIconComps',
  components: {
    Components,
    CdrButton,
    IconCheckLg,
    IconCheckSm,
    IconClock,
    CdrIcon,
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
