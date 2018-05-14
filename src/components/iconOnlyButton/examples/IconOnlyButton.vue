<template>
  <div class="button-example">
    <h2>IconButton</h2>
    <cdr-icon-only-button>
      <icon-external-link />
    </cdr-icon-only-button>
    <cdr-close-button />
  </div>
</template>

<script>
import Components from 'componentsdir/_index';
import { CdrCloseButton } from 'componentsdir/iconOnlyButton/dist/cdr-icon-only-button';
import { IconExternalLink } from '@rei/cdr-icon';

export default {
  name: 'IconOnlyButton',
  components: {
    ...Components,
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
