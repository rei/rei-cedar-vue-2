<template>
  <div>
    <h2>toast</h2>
    <div>
      <cdr-button @click="cheers">
        Cheers!
      </cdr-button>
      <cdr-button @click="prost">
        Prost!
      </cdr-button>
      <cdr-button @click="salut">
        Salut!
      </cdr-button>
      <cdr-button @click="bread">
        Bread
      </cdr-button>
    </div>
    <br><br>
    <div class="toast-container">
      <cdr-toast
        :open="opened"
        type="warning"
      >
        <template #icon-left>
          <icon-information-fill inherit-color />
        </template>
        I am toast, don't burn me.
      </cdr-toast>
      <cdr-toast
        :open="opened1"
        type="error"
      >
        <template #icon-left>
          <icon-warning-fill inherit-color />
        </template>
        Don't burn the toast
      </cdr-toast>
      <cdr-toast
        :open="opened2"
        type="success"
      >
        <template #icon-left>
          <icon-check-fill inherit-color />
        </template>
        Successfully toasted
      </cdr-toast>
      <cdr-toast
        :open="opened3"
        :delay="15000"
      >
        <template #icon-left>
          <icon-heart-fill inherit-color />
        </template>
        I am bread and stay twice as long
      </cdr-toast>
    </div>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Toast',
  components: {
    ...Components,
  },
  data() {
    return {
      opened: false,
      opened1: false,
      opened2: false,
      opened3: false,
    };
  },
  methods: {
    cheers() {
      this.opened = !this.opened;
    },
    prost() {
      this.opened1 = !this.opened1;
    },
    salut() {
      this.opened2 = !this.opened2;
    },
    bread() {
      this.opened3 = !this.opened3;
    },
  },
};
</script>

<style>
.toast-container {
  position: absolute;
  top: 150px;
  right: 15px;
}
</style>
