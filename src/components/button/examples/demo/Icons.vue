<template>
  <div>
    <div class="button-example">
      <cdr-text
        tag="h3"
        modifier="heading-small">
        CdrButton + CdrIcon Comps
      </cdr-text>
      <cdr-button
        tag="a"
        href="https://rei.com"
        size="large"
        data-backstop="cdr-button--icon">
        <icon-check-lg
          slot="icon"
          class="cdr-button__icon"
        />
        Anchor and Icon
      </cdr-button>

      <!-- <cdr-button
        tag="a"
        href="https://rei.com"
        size="large"
        data-backstop="cdr-button--icon"
        disabled
      >
        <icon-check-lg
          slot="icon"
          class="cdr-button__icon"
        />
        Anchor and Icon
      </cdr-button> -->

      <cdr-button
        size="medium"
      >
        <icon-check-lg
          slot="icon"
          class="cdr-button__icon"
        />
        Medium and Icon
      </cdr-button>
      <cdr-button
        size="small"
      >
        <icon-check-lg
          slot="icon"
          size="small"
          class="cdr-button__icon"
        />
        Icon CSS small
      </cdr-button>
      <cdr-button
        size="small">
        <icon-check-sm
          slot="icon"
          class="cdr-button__icon"
        />
        Small (different) icon
      </cdr-button>
    </div>
    <div class="button-example">
      <cdr-text
        tag="h3"
        modifier="heading-small">
        Using a sprite
      </cdr-text>
      <cdr-button
        size="large"
        modifier="secondary"
      >
        <cdr-icon
          slot="icon"
          class="cdr-button__icon"
          use="#download"/>
        Button and Icon
      </cdr-button>
      <cdr-button
        size="large"
        modifier="secondary"
        disabled
      >
        <cdr-icon
          slot="icon"
          class="cdr-button__icon"
          use="#download"/>
        Button and Icon
      </cdr-button>
      <cdr-button
        size="medium"
        modifier="secondary"
      >
        <cdr-icon
          slot="icon"
          class="cdr-button__icon"
          use="#twitter" />
        Twitter
      </cdr-button>
      <cdr-button
        size="small"
        modifier="secondary"
      >
        <cdr-icon
          slot="icon"
          class="cdr-button__icon"
          use="#instagram"
        />
        Instagram
      </cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        size="large large@xs medium@sm small@lg"
      >
        <icon-clock
          slot="icon"
          class="cdr-button__icon" />
        Responsive
      </cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        size="large"
        full-width
      >
        <icon-clock
          slot="icon"
          class="cdr-button__icon" />
        Full Width
      </cdr-button>
    </div>
    <div class="button-example">
      <div
        class="button-text-wrap"
        style="max-width: 300px;">
        <cdr-button
          size="medium"
          modifier="secondary"
        >
          <cdr-icon
            slot="icon"
            class="cdr-button__icon"
            use="#twitter" />
          <!-- eslint-disable-next-line -->
          The text of this button will wrap onto two lines!
        </cdr-button>
      </div>
    </div>
    <div class="button-example">
      <cdr-text
        tag="h3"
        modifier="heading-small">
        Icon only button
      </cdr-text>
      <cdr-button
        :icon-only="true"
        :full-width="true"
        size="small"
        aria-label="Check our Twitter feed">
        <icon-twitter
          slot="icon"
          class="cdr-button__icon" />
      </cdr-button>
      <cdr-close-button />
      <cdr-button
        tag="a"
        href="https://rei.com"
        :icon-only="true"
        aria-label="This link goes elsewhere">
        <icon-external-link
          slot="icon"
          class="cdr-button__icon" />
      </cdr-button>
      <cdr-play-button />
    </div>
    <div class="button-example dark">
      <cdr-button
        :icon-only="true"
        :on-dark="true"
        aria-label="A Twitter button">
        <icon-twitter
          slot="icon"
          class="cdr-button__icon" />
      </cdr-button>
      <cdr-close-button :on-dark="true" />
      <cdr-button
        tag="a"
        href="https://rei.com"
        :icon-only="true"
        :on-dark="true"
        aria-label="An external link">
        <icon-external-link
          slot="icon"
          class="cdr-button__icon" />
      </cdr-button>
      <cdr-play-button :on-dark="true" />
    </div>
  </div>
</template>

<script>
import CdrText from 'componentsdir/text/CdrText';
import CdrButton from 'componentsdir/button/CdrButton';
/* eslint-disable-next-line */
import { IconCheckLg, IconCheckSm, IconClock, IconTwitter, IconExternalLink } from 'componentsdir/icon/dist/cdr-icon';
import { CdrCloseButton, CdrPlayButton } from 'componentsdir/button/dist/cdr-button';
import CdrIcon from 'componentsdir/icon/CdrIcon';

export default {
  name: 'ButtonIconComps',
  components: {
    CdrText,
    CdrButton,
    IconCheckLg,
    IconCheckSm,
    IconClock,
    CdrIcon,
    IconTwitter,
    IconExternalLink,
    CdrCloseButton,
    CdrPlayButton,
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }

  .dark {
    background: #434343;
  }
</style>
