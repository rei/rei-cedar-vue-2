<template>
  <div>
    <div class="button-example cdr-space-inset-one-x">
      <cdr-text
        tag="h3"
        modifier="heading-400 heading-500@md heading-500@lg"
      >
        CdrButton + CdrIcon Comps
      </cdr-text>
      <cdr-button
        tag="a"
        href="https://rei.com"
        size="large"
        space="cdr-mb-space-one-x@xs cdr-mb-space-one-x@sm cdr-mr-space-one-x"
        data-backstop="cdr-button--icon"
      >
        <cdr-icon
          use="#check-lg"
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
        Anchor and Icon
      </cdr-button>

      <cdr-button
        size="medium"
        space="cdr-mb-space-one-x@xs cdr-mb-space-one-x@sm cdr-mr-space-one-x"
      >
        <cdr-icon
          use="#check-lg"
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
        Medium and Icon
      </cdr-button>
      <cdr-button
        size="small"
        space="cdr-mr-space-one-x"
      >
        <cdr-icon
          use="#check-lg"
          inherit-color
          slot="icon"
          size="small"
          class="cdr-button__icon"
        />
        Icon CSS small
      </cdr-button>
      <cdr-button
        size="small"
      >
        <cdr-icon
          use="#check-sm"
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
        Small (different) icon
      </cdr-button>
    </div>
    <div class="button-example cdr-space-inset-one-x">
      <cdr-text
        tag="h3"
        modifier="heading-400 heading-500@md heading-500@lg"
      >
        Using a sprite
      </cdr-text>
      <cdr-button
        size="large"
        space="cdr-mr-space-one-x"
        modifier="secondary"
      >
        <cdr-icon
          inherit-color
          slot="icon"
          class="cdr-button__icon"
          use="#download"
        />
        Button and Icon
      </cdr-button>
      <cdr-button
        size="large"
        space="cdr-mr-space-one-x"
        modifier="secondary"
        disabled
      >
        <cdr-icon
          inherit-color
          slot="icon"
          class="cdr-button__icon"
          use="#download"
        />
        Button and Icon
      </cdr-button>
      <cdr-button
        size="medium"
        space="cdr-mr-space-one-x"
        modifier="secondary"
      >
        <cdr-icon
          inherit-color
          slot="icon"
          class="cdr-button__icon"
          use="#twitter"
        />
        Twitter
      </cdr-button>
      <cdr-button
        size="small"
        modifier="secondary"
      >
        <cdr-icon
          inherit-color
          slot="icon"
          class="cdr-button__icon"
          use="#instagram"
        />
        Instagram
      </cdr-button>
    </div>
    <div class="button-example cdr-space-inset-one-x">
      <cdr-button
        size="large large@xs medium@sm small@lg"
      >
        <cdr-icon
          use="#clock"
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
        Responsive
      </cdr-button>
    </div>
    <div class="button-example cdr-space-inset-one-x">
      <cdr-button
        size="large"
        :full-width="true"
      >
        <cdr-icon
          use="#clock"
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
        Full Width
      </cdr-button>
    </div>
    <div class="button-example cdr-space-inset-one-x">
      <div
        class="button-text-wrap"
        style="max-width: 300px;"
      >
        <cdr-button
          size="medium"
          modifier="secondary"
        >
          <cdr-icon
            inherit-color
            slot="icon"
            class="cdr-button__icon"
            use="#twitter"
          />
          <!-- eslint-disable-next-line -->
          The text of this button will wrap onto two lines!
        </cdr-button>
      </div>
    </div>
    <div class="button-example cdr-space-inset-one-x">
      <cdr-text
        tag="h3"
        modifier="heading-400 heading-500@md heading-500@lg"
      >
        Icon only button
      </cdr-text>
      <cdr-button
        :icon-only="true"
        :full-width="true"
        size="small"
        aria-label="Check our Twitter feed"
      >
        <cdr-icon
          use="#twitter"
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
      </cdr-button>
      <cdr-button
        icon-only
        aria-label="Close"
      >
        <cdr-icon
          use="#x-lg"
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
      </cdr-button>
      <cdr-button
        tag="a"
        href="https://rei.com"
        :icon-only="true"
        aria-label="This link goes elsewhere"
      >
        <cdr-icon
          use="#external-link"
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
      </cdr-button>
      <cdr-button
        :icon-only="true"
        aria-label="Play"
      >
        <cdr-icon
          use="#play"
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
      </cdr-button>
    </div>
    <div class="button-example cdr-space-inset-one-x dark">
      <cdr-button
        :icon-only="true"
        :on-dark="true"
        aria-label="A Twitter button"
      >
        <cdr-icon
          use="#twitter"
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
      </cdr-button>
      <cdr-button
        icon-only
        on-dark
        aria-label="Close"
      >
        <cdr-icon
          use="#x-lg"
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
      </cdr-button>
      <cdr-button
        tag="a"
        href="https://rei.com"
        :icon-only="true"
        :on-dark="true"
        aria-label="An external link"
      >
        <cdr-icon
          use="#external-link"
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
      </cdr-button>
      <cdr-button
        icon-only
        on-dark
        aria-label="Play"
      >
        <cdr-icon
          use="#play"
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
      </cdr-button>
    </div>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'ButtonIconComps',
  components: {
    ...Components,
  },
};
</script>

<style>

  .dark {
    background: #434343;
  }
</style>
