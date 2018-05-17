<template>
  <div>
    <div class="button-example">
      <h2>CdrButton + CdrIcon Comps</h2>
      <cdr-button
        tag="a"
        href="https://rei.com"
        size="large"
      ><icon-check-lg
        class="cdr-button__icon"
      />Anchor and Icon</cdr-button
      >
      <cdr-button
        size="medium"
        style-modifiers="secondary"
      ><icon-check-lg
        class="cdr-button__icon"
      />Medium and Icon</cdr-button
      >
      <cdr-button
        size="small"
      ><icon-check-lg
        modifier="sm"
        class="cdr-button__icon"
      />Icon CSS small</cdr-button
      >
      <cdr-button
        size="small"
      ><icon-check-sm
        class="cdr-button__icon"
      />Small (different) icon</cdr-button
      >
    </div>
    <div class="button-example">
      <h2>Using a sprite</h2>
      <cdr-button
        size="large"
      ><cdr-icon
        class="cdr-button__icon"
        use="#download"
        modifier="inherit-color"
      />Button and Icon</cdr-button
      >
      <cdr-button
        size="medium"
        style-modifiers="secondary"
      ><cdr-icon
        class="cdr-button__icon"
        use="#twitter"
        modifier="inherit-color"
      />Button and Icon</cdr-button
      >
      <cdr-button
        size="small"
      ><cdr-icon
        class="cdr-button__icon"
        use="#instagram"
        modifier="inherit-color"
      />Button and Icon</cdr-button
      >
    </div>
    <div class="button-example">
      <cdr-button
        size="small"
        :responsive-size="['large@extra-small', 'medium@small', 'small@large']"
      >Responsive<icon-clock
        class="cdr-button__icon"
      />
      </cdr-button>
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';
import CdrButton from 'componentsdir/button/CdrButton';
import { IconCheckLg, IconCheckSm, IconClock } from 'componentsdir/icon/dist/cdr-icon';
import CdrIcon from 'componentsdir/icon/CdrIcon';

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
