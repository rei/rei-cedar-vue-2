<template>
  <div>
    <h2>banner</h2>
    <cdr-banner type="warning">
      <icon-warning-fill inherit-color /> This is the legacy banner API example
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
    <cdr-banner type="error">
      <template #icon-left>
        <icon-atv />
      </template>
      This is the main messaging content
    </cdr-banner>

    <br>

    <cdr-banner type="warning">
      <template #icon-left>
        <icon-atv />
      </template>
      <strong>Warning!</strong> watch for reckless ATV drivers
      <template #message-body>
        They ATV's go vrooom vrooom!
      </template>
    </cdr-banner>
    <br>
    <cdr-banner type="error">
      <strong>Oops:</strong> something went wrong
      <template #message-body>
        It was probably your fault.
      </template>
    </cdr-banner>
    <br>
    <cdr-banner type="info">
      <template #icon-left>
        <icon-warning-stroke />
      </template>
      information banner information banner information banner
      information banner information banner information banner information banner information banner
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
      <template #info-action>
        <cdr-button
          :icon-only="true"
          aria-label="More information about icon"
        >
          <template #icon>
            <icon-information-stroke inherit-color />
          </template>
        </cdr-button>
      </template>
      <template #message-body>
        This is some additional messaging about the status.
      </template>
    </cdr-banner>
    <br>
    <cdr-banner type="success">
      <template #icon-left>
        <icon-check-fill />
      </template>
      success banner
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
    </cdr-banner>
    <br>
    <cdr-banner type="warning">
      <template #icon-left>
        <icon-warning-stroke />
      </template>
      warning banner
      <template #icon-right>
        <cdr-button
          :icon-only="true"
          aria-label="More information about icon"
        >
          <template #icon>
            <icon-brand-rei-ice-axes inherit-color />
          </template>
        </cdr-button>
      </template>
      <template #info-action>
        <cdr-button
          :icon-only="true"
          aria-label="More information about icon"
        >
          <template #icon>
            <icon-information-stroke inherit-color />
          </template>
        </cdr-button>
      </template>
      <template #message-body>
        This is some additional messaging about the status.
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
