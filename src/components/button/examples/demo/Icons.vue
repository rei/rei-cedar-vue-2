<template>
  <div>
    <div class="button-example">
      <cdr-text
        tag="h3"
        modifier="heading-small"
      >
        CdrButton + CdrIcon Comps
      </cdr-text>
      <cdr-button
        tag="a"
        href="https://rei.com"
        size="large"
        data-backstop="cdr-button--icon"
      >
        <icon-check-lg
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
        Anchor and Icon
      </cdr-button>

      <cdr-button
        tag="a"
        href="https://rei.com"
        size="large"
        data-backstop="cdr-button--icon"
        disabled
      >
        <icon-check-lg
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
        Anchor and Icon
      </cdr-button>

      <cdr-button
        size="medium"
      >
        <icon-check-lg
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
        Medium and Icon
      </cdr-button>
      <cdr-button
        size="small"
      >
        <icon-check-lg
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
        <icon-check-sm
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
        Small (different) icon
      </cdr-button>
    </div>
    <div class="button-example">
      <cdr-text
        tag="h3"
        modifier="heading-small"
      >
        Using a sprite
      </cdr-text>
      <cdr-button
        size="large"
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
    <div class="button-example">
      <cdr-button
        size="large large@xs medium@sm small@lg"
      >
        <icon-clock
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
        Responsive
      </cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        size="large"
        full-width
      >
        <icon-clock
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
        Full Width
      </cdr-button>
    </div>
    <div class="button-example">
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
    <div class="button-example">
      <cdr-text
        tag="h3"
        modifier="heading-small"
      >
        Icon only button
      </cdr-text>
      <cdr-button
        :icon-only="true"
        :full-width="true"
        size="small"
        aria-label="Check our Twitter feed"
      >
        <icon-twitter
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
      </cdr-button>
      <cdr-button
        icon-only
        aria-label="Close"
      >
        <icon-x-lg
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
        <icon-external-link
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
      </cdr-button>
      <cdr-button
        :icon-only="true"
        aria-label="Play"
      >
        <icon-play
          inherit-color
          slot="icon"
          class="cdr-button__icon"
        />
      </cdr-button>
    </div>
    <div class="button-example dark">
      <cdr-button
        :icon-only="true"
        :on-dark="true"
        aria-label="A Twitter button"
      >
        <icon-twitter
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
        <icon-x-lg
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
        <icon-external-link
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
        <icon-play
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
  .button-example {
    padding: 10px;
  }

  .dark {
    background: #434343;
  }
</style>
