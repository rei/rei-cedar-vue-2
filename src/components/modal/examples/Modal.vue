<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-600 heading-700@md heading-700@lg"
    >
      Modal
    </cdr-text>

    <cdr-modal
      label="label text is title or aria"
      :opened="opened"
      @closed="closed"
      wrapper-class="wrapper-test-class"
      overlay-class="overlay-test-class"
      :show-title="showTitle"
      :size="size"
      data-backstop="modal-large"
    >
      <template slot="title">
        <cdr-text
          tag="h1"
          modifier="heading-600"
        >
          Added to Cart (is a common label) and let's make this longer so it
        </cdr-text>
      </template>
      <!-- eslint-disable-next-line -->
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dictum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam non urna sit amet dolor euismod consequat vitae non nunc. Nullam vulputate enim ac pharetra sagittis. Curabitur volutpat, metus eu euismod finibus, neque turpis viverra dolor, at ornare justo libero a arcu. Suspendisse nec lectus id leo aliquam posuere id eu mauris. Aenean fermentum justo ex, vel sagittis nulla efficitur nec. Mauris aliquet urna id felis maximus, et molestie erat bibendum. Donec dolor purus, iaculis vitae tellus at, iaculis facilisis nibh. Pellentesque at ex sit amet eros elementum iaculis quis ut justo. Pellentesque consequat in sapien ac blandit. Donec ullamcorper lacus sed interdum auctor.</p>

      <!-- eslint-disable-next-line -->
      <p v-if="contentLength === 'long'">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dictum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam non urna sit amet dolor euismod consequat vitae non nunc. Nullam vulputate enim ac pharetra sagittis. Curabitur volutpat, metus eu euismod finibus, neque turpis viverra dolor, at ornare justo libero a arcu. Suspendisse nec lectus id leo aliquam posuere id eu mauris. Aenean fermentum justo ex, vel sagittis nulla efficitur nec. Mauris aliquet urna id felis maximus, et molestie erat bibendum. Donec dolor purus, iaculis vitae tellus at, iaculis facilisis nibh. Pellentesque at ex sit amet eros elementum iaculis quis ut justo. Pellentesque consequat in sapien ac blandit. Donec ullamcorper lacus sed interdum auctor.</p>

      <!-- eslint-disable-next-line -->
      <p v-if="contentLength === 'long'">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dictum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam non urna sit amet dolor euismod consequat vitae non nunc. Nullam vulputate enim ac pharetra sagittis. Curabitur volutpat, metus eu euismod finibus, neque turpis viverra dolor, at ornare justo libero a arcu. Suspendisse nec lectus id leo aliquam posuere id eu mauris. Aenean fermentum justo ex, vel sagittis nulla efficitur nec. Mauris aliquet urna id felis maximus, et molestie erat bibendum. Donec dolor purus, iaculis vitae tellus at, iaculis facilisis nibh. Pellentesque at ex sit amet eros elementum iaculis quis ut justo. Pellentesque consequat in sapien ac blandit. Donec ullamcorper lacus sed interdum auctor.</p>
    </cdr-modal>

    <cdr-button
      @click="opened = true"
      aria-haspopup="dialog"
    >Open modal
    </cdr-button>

    <cdr-text
      modifier="heading-400"
      class="cdr-pt-space-one-x"
    >
      Size
    </cdr-text>

    <cdr-radio
      name="modal-width"
      custom-value="medium"
      v-model="size"
    >Medium
    </cdr-radio>

    <cdr-radio
      name="modal-width"
      custom-value="large"
      v-model="size"
    >Large
    </cdr-radio>

    <cdr-text
      modifier="heading-400"
      class="cdr-pt-space-one-x"
    >
      Content Length
    </cdr-text>

    <cdr-radio
      name="modal-content-length"
      custom-value="short"
      v-model="contentLength"
    >Short
    </cdr-radio>

    <cdr-radio
      name="modal-content-length"
      custom-value="long"
      v-model="contentLength"
    >Long
    </cdr-radio>

    <cdr-text
      modifier="heading-400"
      class="cdr-pt-space-one-x"
    >
      Show Title
    </cdr-text>

    <cdr-radio
      name="modal-show-title"
      :custom-value="true"
      v-model="showTitle"
    >True
    </cdr-radio>

    <cdr-radio
      name="modal-show-title"
      :custom-value="false"
      v-model="showTitle"
    >False
    </cdr-radio>
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
      size: 'large',
      opened: false, // this.$router.currentRoute.name === 'Modals',
      showLabel: true,
      contentLength: 'long',
      showTitle: true,
    };
  },
  methods: {
    closed(e) {
      console.log('closed', e);
      this.opened = false;
    },
  },
};
</script>

<style>
</style>
