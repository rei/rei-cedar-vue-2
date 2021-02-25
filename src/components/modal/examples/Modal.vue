<template>
  <div class="modal-example">
    <cdr-text
      tag="h2"
      modifier="heading-serif-600 heading-serif-700@md heading-serif-700@lg"
    >
      Modal
    </cdr-text>

    <cdr-modal
      label="label text is title or aria"
      :opened="opened"
      @closed="closed"
      wrapper-class="wrapper-test-class"
      overlay-class="overlay-test-class"
      data-backstop="modal"
    >
      <template slot="title">
        <cdr-text
          tag="h2"
          modifier="heading-serif-600"
          class="modal-title"
        >
          Terms & Conditions
        </cdr-text>
      </template>

      <template
        slot="modal"
        v-if="override"
      >
        Wow i can just take over the whole modal, huh?
      </template>

      <!-- eslint-disable-next-line -->
      <cdr-text modifier="body-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dictum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam non urna sit amet dolor euismod consequat vitae non nunc. Nullam vulputate enim ac pharetra sagittis. Curabitur volutpat, metus eu euismod finibus, neque turpis viverra dolor, at ornare justo libero a arcu. Suspendisse nec lectus id leo aliquam posuere id eu mauris. Aenean fermentum justo ex, vel sagittis nulla efficitur nec. Mauris aliquet urna id felis maximus, et molestie erat bibendum. Donec dolor purus, iaculis vitae tellus at, iaculis facilisis nibh. Pellentesque at ex sit amet eros elementum iaculis quis ut justo. Pellentesque consequat in sapien ac blandit. Donec ullamcorper lacus sed interdum auctor.</cdr-text>

      <!-- eslint-disable-next-line -->
      <cdr-text modifier="body-300" v-if="overflowContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dictum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam non urna sit amet dolor euismod consequat vitae non nunc. Nullam vulputate enim ac pharetra sagittis. Curabitur volutpat, metus eu euismod finibus, neque turpis viverra dolor, at ornare justo libero a arcu. Suspendisse nec lectus id leo aliquam posuere id eu mauris. Aenean fermentum justo ex, vel sagittis nulla efficitur nec. Mauris aliquet urna id felis maximus, et molestie erat bibendum. Donec dolor purus, iaculis vitae tellus at, iaculis facilisis nibh. Pellentesque at ex sit amet eros elementum iaculis quis ut justo. Pellentesque consequat in sapien ac blandit. Donec ullamcorper lacus sed interdum auctor.</cdr-text>

      <!-- eslint-disable-next-line -->
      <cdr-text modifier="body-300" v-if="overflowContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dictum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam non urna sit amet dolor euismod consequat vitae non nunc. Nullam vulputate enim ac pharetra sagittis. Curabitur volutpat, metus eu euismod finibus, neque turpis viverra dolor, at ornare justo libero a arcu. Suspendisse nec lectus id leo aliquam posuere id eu mauris. Aenean fermentum justo ex, vel sagittis nulla efficitur nec. Mauris aliquet urna id felis maximus, et molestie erat bibendum. Donec dolor purus, iaculis vitae tellus at, iaculis facilisis nibh. Pellentesque at ex sit amet eros elementum iaculis quis ut justo. Pellentesque consequat in sapien ac blandit. Donec ullamcorper lacus sed interdum auctor.</cdr-text>
    </cdr-modal>

    <cdr-button
      @click="opened = true"
      aria-haspopup="dialog"
    >Launch modal
    </cdr-button>

    <cdr-text
      modifier="heading-sans-400"
      class="cdr-pt-space-one-x"
    >
      Content Options
    </cdr-text>

    <cdr-checkbox v-model="overflowContent">
      Overflow Content
    </cdr-checkbox>

    <cdr-checkbox v-model="override">
      Override Content
    </cdr-checkbox>
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
      opened: this.$router.currentRoute.name === 'Modals',
      overflowContent: false,
      override: false,
    };
  },
  methods: {
    closed() {
      this.opened = false;
    },
  },
};
</script>

<style>
@media (min-width: 672px) {
  .modal-example {
    min-height: 80vh; /* fixes a safari display bug */
  }
}
</style>
