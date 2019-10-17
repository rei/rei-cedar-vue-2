<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-600 heading-700@md heading-700@lg"
    >
      Modal
    </cdr-text>
    <cdr-modal
      label="my modal"
      :opened="opened"
      :close-modal="closeModal"
    >
      Modal text, bro.
    </cdr-modal>

    <cdr-button
      @click="opened = !opened"
    >Toggle
    </cdr-button>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Modal',
  components: {
    ...Components,
  },
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    closeModal() {
      this.opened = !this.opened;
    },
  },
};
</script>

<style>
</style>
