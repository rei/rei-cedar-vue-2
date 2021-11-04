<template>
  <div>
    <h2>banner</h2>
    <cdr-banner type="warning">
      <div><icon-warning-fill inherit-color /> This is the legacy banner API example</div>
    </cdr-banner>
    <br>
    <cdr-banner>
      <template #icon-left>
        <icon-question-fill inherit-color />
      </template>
      Default banner
    </cdr-banner>
    <br>
    <cdr-banner type="info">
      <template #icon-left>
        <icon-information-fill inherit-color />
      </template>
      Information banner
    </cdr-banner>
    <br>
    <cdr-banner type="warning">
      <template #icon-left>
        <icon-warning-fill inherit-color />
      </template>
      Warning banner
    </cdr-banner>
    <br>
    <cdr-banner type="error">
      <template #icon-left>
        <icon-error-fill inherit-color />
      </template>
      Error banner
    </cdr-banner>
    <br>
    <cdr-banner type="success">
      <template #icon-left>
        <icon-check-fill inherit-color />
      </template>
      Success banner
    </cdr-banner>
    <br>

    <cdr-banner type="warning">
      <template #icon-left>
        <icon-warning-fill inherit-color />
      </template>
      Banner with a message body
      <template #message-body>
        This is some extra information about the message.
      </template>
    </cdr-banner>
    <br>

    <cdr-banner type="success">
      <template #icon-left>
        <icon-check-fill />
      </template>
      This is a banner with an icon-right slot, typically used to close the banner.
      <template #icon-right>
        <cdr-button
          :icon-only="true"
          aria-label="More information about icon"
        >
          <template #icon>
            <icon-x-lg inherit-color />
          </template>
        </cdr-button>
      </template>
      <template #message-body>
        Your parent template should handle the close action.
      </template>
    </cdr-banner>
    <br>
    <cdr-banner type="info">
      <template #icon-left>
        <icon-information-fill inherit-color />
      </template>
      Banner with info-action slot
      <template #info-action>
        <cdr-tooltip
          id="tooltip-example"
          position="top"
        >
          <template #trigger>
            <cdr-button
              :icon-only="true"
              aria-label="More information about banner"
            >
              <template #icon>
                <icon-information-stroke />
              </template>
            </cdr-button>
          </template>
          <div>
            The info action slot is used to pair an additional action to the banner.
          </div>
        </cdr-tooltip>
      </template>
    </cdr-banner>
    <br>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Banner',
  components: {
    ...Components,
  },
};
</script>

<style>
</style>
