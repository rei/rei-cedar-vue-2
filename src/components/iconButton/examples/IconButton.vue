<template>
  <div>
    <h2>IconButton</h2>
    <cdr-icon-button>
      <icon-external-link />
    </cdr-icon-button>
    <cdr-close-button />
  </div>
</template>

<script>
import Components from 'componentsdir/_index';
import { CdrCloseButton } from 'componentsdir/iconButton/dist/cdr-icon-button';
import { IconExternalLink } from '@rei/cdr-icon';

export default {
  name: 'IconButton',
  components: {
    Components,
    CdrCloseButton,
    IconExternalLink,
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
