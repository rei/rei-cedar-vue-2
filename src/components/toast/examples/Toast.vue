<template>
  <div>
    <h2>Toast</h2>
    <cdr-grid class="toast-configurator">
      <div>
        <cdr-form-group label="Toast type">
          <cdr-radio
            name="type"
            custom-value="default"
            v-model="type"
          >
            default
          </cdr-radio>
          <cdr-radio
            name="type"
            custom-value="info"
            v-model="type"
          >
            info
          </cdr-radio>
          <cdr-radio
            name="type"
            custom-value="warning"
            v-model="type"
          >
            warning
          </cdr-radio>
          <cdr-radio
            name="type"
            custom-value="success"
            v-model="type"
          >
            success
          </cdr-radio>
          <cdr-radio
            name="type"
            custom-value="error"
            v-model="type"
          >
            error
          </cdr-radio>
        </cdr-form-group>
      </div>
      <div>
        <cdr-form-group label="Auto dismiss">
          <cdr-radio
            name="autodismiss"
            :custom-value="true"
            v-model="autoDismiss"
          >
            true
          </cdr-radio>
          <cdr-radio
            name="autodismiss"
            :custom-value="false"
            v-model="autoDismiss"
          >
            false
          </cdr-radio>
        </cdr-form-group>
      </div>
      <div>
        <cdr-form-group label="Dismiss delay">
          <cdr-input
            v-model="dismissDelay"
            :numeric="true"
            label="Delay in milliseconds"
          />
        </cdr-form-group>
      </div>
      <div>
        <cdr-form-group label="Content">
          <cdr-input
            v-model="toastMessage"
            label="Message"
          />
          <cdr-input
            v-model="toastIcon"
            label="Icon"
          />
        </cdr-form-group>
      </div>
    </cdr-grid>
    <br><br>
    <cdr-button @click="opened = !opened">
      Toast!
    </cdr-button>
    <div class="toast-container">
      <cdr-toast
        :type="type"
        :open="opened"
        :auto-dismiss="autoDismiss"
        :dismiss-delay="dismissDelay"
        @closed="opened = false"
      >
        <template #icon-left>
          <component
            :is="toastIcon"
            inherit-color
          />
        </template>
        {{ toastMessage }}
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
      type: 'default',
      autoDismiss: true,
      dismissDelay: 5000,
      toastMessage: 'I am toast!',
      toastIcon: 'IconCheckFill',
    };
  },
};
</script>

<style>
.toast-container {
  position: absolute;
  top: 15rem;
  right: 1.5rem;
}
.toast-configurator {
  grid-template-columns: repeat(4, 1fr);
}
</style>
