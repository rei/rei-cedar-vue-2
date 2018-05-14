<template>
  <div>
    <h2>Icon Only Buttons</h2>
    <div class="button-example">
      <cdr-icon-only-button>
        <icon-twitter />
      </cdr-icon-only-button>
      <cdr-close-button :on-click="close" />
      <cdr-icon-only-button
        tag="a"
        href="https://rei.com"
      >
        <icon-external-link />
      </cdr-icon-only-button>
      <cdr-play-button />
    </div>
    <div class="button-example dark">
      <cdr-icon-only-button
        :on-dark="true"
      >
        <icon-twitter />
      </cdr-icon-only-button>
      <cdr-close-button
        :on-dark="true"
        :on-click="close"
      />
      <cdr-icon-only-button
        tag="a"
        href="https://rei.com"
        :on-dark="true"
      >
        <icon-external-link />
      </cdr-icon-only-button>
      <cdr-play-button
        :on-dark="true"
        :on-click="play"
      />
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';
import { CdrCloseButton, CdrPlayButton } from 'componentsdir/iconOnlyButton/dist/cdr-icon-only-button'; // eslint-disable-line
import { IconExternalLink, IconTwitter } from '@rei/cdr-icon';

export default {
  name: 'IconOnlyButton',
  components: {
    ...Components,
    CdrCloseButton,
    CdrPlayButton,
    IconTwitter,
    IconExternalLink,
  },
  methods: {
    close() {
      console.log('Close button clicked.');
    },
    play() {
      console.log('Play button clicked');
    },
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
