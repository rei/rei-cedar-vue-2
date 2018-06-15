<template>
  <div>
    <div class="button-example">
      <h2>CdrButton + CdrIcon Comps</h2>
      <cdr-button
        tag="a"
        href="https://rei.com"
        size="large"
        data-backstop="cdr-button--large icon">
        <template name="icon">
          <icon-check-lg class="cdr-button__icon" />
        </template>
        Anchor and Icon
      </cdr-button>
      <cdr-button
        size="medium"
        data-backstop="cdr-button--medium icon">
        <template name="icon">
          <icon-check-lg class="cdr-button__icon" />
        </template>
        Medium and Icon
      </cdr-button>
      <cdr-button
        size="small"
        data-backstop="cdr-button--small icon">
        <template name="icon">
          <icon-check-lg
            modifier="sm"
            class="cdr-button__icon" />
        </template>
        Icon CSS small
      </cdr-button>
      <cdr-button
        size="small">
        <template name="icon">
          <icon-check-sm class="cdr-button__icon"/>
        </template>
        Small (different) icon
      </cdr-button>
    </div>
    <div class="button-example">
      <h2>Using a sprite</h2>
      <cdr-button
        size="large"
        modifier="secondary"
        data-backstop="cdr-button--large secondary icon">
        <template name="icon">
          <cdr-icon
            class="cdr-button__icon"
            use="#download"/>
        </template>
        Button and Icon
      </cdr-button>
      <cdr-button
        size="medium"
        modifier="secondary"
        data-backstop="cdr-button--medium secondary icon">
        <template name="icon">
          <cdr-icon
            class="cdr-button__icon"
            use="#twitter" />
        </template>
        Twitter
      </cdr-button>
      <cdr-button
        size="small"
        modifier="secondary"
        data-backstop="cdr-button-small secondary icon">
        <template name="icon">
          <cdr-icon
            class="cdr-button__icon"
            use="#instagram" />
        </template>
        Instagram
      </cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        size="small"
        :responsive-size="['large@xs', 'medium@sm', 'small@lg']">
        <template name="icon">
          <icon-clock class="cdr-button__icon" />
        </template>
        Responsive
      </cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        size="large"
        full-width
        data-backstop="cdr-button--large full-width icon">
        <template name="icon">
          <icon-clock class="cdr-button__icon" />
        </template>
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
          data-backstop="cdr-button--medium secondary icon">
          <template name="icon">
            <cdr-icon
              class="cdr-button__icon"
              use="#twitter" />
          </template>
          <!-- eslint-disable-next-line -->
          The text of this button will wrap onto two lines!
        </cdr-button>
      </div>
    </div>
    <div class="button-example">
      <h2>Icon only button</h2>
      <cdr-button
        :icon-only="true"
        :full-width="true"
        size="small"
        aria-label="Check our Twitter feed">
        <template name="icon">
          <icon-twitter
            class="cdr-button__icon" />
        </template>
      </cdr-button>
      <cdr-close-button />
      <cdr-button
        tag="a"
        href="https://rei.com"
        :icon-only="true"
        aria-label="This link goes elsewhere">
        <template name="icon">
          <icon-external-link class="cdr-button__icon" />
        </template>
      </cdr-button>
      <cdr-play-button />
    </div>
    <div class="button-example dark">
      <cdr-button
        :icon-only="true"
        :on-dark="true"
        aria-label="A Twitter button">
        <template name="icon">
          <icon-twitter
            class="cdr-button__icon" />
        </template>
      </cdr-button>
      <cdr-close-button :on-dark="true" />
      <cdr-button
        tag="a"
        href="https://rei.com"
        :icon-only="true"
        :on-dark="true"
        aria-label="An external link">
        <template name="icon">
          <icon-external-link class="cdr-button__icon" />
        </template>
      </cdr-button>
      <cdr-play-button :on-dark="true" />
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';
import CdrButton from 'componentsdir/button/CdrButton';
/* eslint-disable-next-line */
import { IconCheckLg, IconCheckSm, IconClock, IconTwitter, IconExternalLink } from 'componentsdir/icon/dist/cdr-icon';
import { CdrCloseButton, CdrPlayButton } from 'componentsdir/button/dist/cdr-button';
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
