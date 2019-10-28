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
      wrapper-class="wrapper-test-class"
      overlay-class="overlay-test-class"
      :label-is-title="true"
      width="large"
    >
      <!-- eslint-disable-next-line -->
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dictum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam non urna sit amet dolor euismod consequat vitae non nunc. Nullam vulputate enim ac pharetra sagittis. Curabitur volutpat, metus eu euismod finibus, neque turpis viverra dolor, at ornare justo libero a arcu. Suspendisse nec lectus id leo aliquam posuere id eu mauris. Aenean fermentum justo ex, vel sagittis nulla efficitur nec. Mauris aliquet urna id felis maximus, et molestie erat bibendum. Donec dolor purus, iaculis vitae tellus at, iaculis facilisis nibh. Pellentesque at ex sit amet eros elementum iaculis quis ut justo. Pellentesque consequat in sapien ac blandit. Donec ullamcorper lacus sed interdum auctor.</p>

      <!-- eslint-disable-next-line -->
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dictum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam non urna sit amet dolor euismod consequat vitae non nunc. Nullam vulputate enim ac pharetra sagittis. Curabitur volutpat, metus eu euismod finibus, neque turpis viverra dolor, at ornare justo libero a arcu. Suspendisse nec lectus id leo aliquam posuere id eu mauris. Aenean fermentum justo ex, vel sagittis nulla efficitur nec. Mauris aliquet urna id felis maximus, et molestie erat bibendum. Donec dolor purus, iaculis vitae tellus at, iaculis facilisis nibh. Pellentesque at ex sit amet eros elementum iaculis quis ut justo. Pellentesque consequat in sapien ac blandit. Donec ullamcorper lacus sed interdum auctor.</p>
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
