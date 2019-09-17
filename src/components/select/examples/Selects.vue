<template>
  <div data-backstop="selects">
    <cdr-text
      tag="h2"
      modifier="heading-400 heading-500@md heading-500@lg"
      space="cdr-my-space-two-x"
    >
      Selects
    </cdr-text>
    <hr class="icon-hr">

    <!-- Disabled Select -->
    <cdr-select
      label="Disabled select"
      v-model="selectedDisabled"
      disabled
      space="cdr-my-space-two-x"
    >
      <option value="1">
        1
      </option>
    </cdr-select>
    <cdr-text>Selected: {{ selectedDisabled }}</cdr-text>
    <hr class="icon-hr">

    <!-- Prompt Example -->
    <cdr-select
      label="Prompt"
      v-model="selectedA"
      prompt="Choose one"
      space="cdr-my-space-two-x"
    >
      <option value="1">
        1
      </option>
      <option value="2">
        2
      </option>
      <option value="3">
        3
      </option>
      <option value="4">
        4
      </option>
    </cdr-select>
    <cdr-text>Selected: {{ selectedA }}</cdr-text>
    <hr class="icon-hr">

    <!-- Required with Prompt Example -->
    <cdr-select
      label="Required with Prompt"
      v-model="selectedB"
      prompt="Choose one"
      required
      space="cdr-my-space-two-x"
    >
      <option value="1">
        1
      </option>
      <option value="2">
        2
      </option>
      <option value="3">
        3
      </option>
      <option value="4">
        4
      </option>
    </cdr-select>
    <cdr-text>Selected: {{ selectedB }}</cdr-text>
    <hr class="icon-hr">

    <!-- Hidden Label Example -->
    <cdr-select
      label="Hidden label text"
      hide-label
      v-model="selectedC"
      prompt="Hidden label"
      space="cdr-my-space-two-x"
    >
      <option value="1">
        1
      </option>
      <option value="2">
        2
      </option>
      <option value="3">
        3
      </option>
      <option value="4">
        4
      </option>
    </cdr-select>
    <cdr-text>Selected: {{ selectedC }}</cdr-text>
    <hr class="icon-hr">

    <!-- No Prompt Example -->
    <cdr-select
      label="No Prompt"
      space="cdr-my-space-two-x"
      v-model="selectedD"
    >
      <option value="1">
        1
      </option>
      <option value="2">
        2
      </option>
      <option value="3">
        3
      </option>
      <option value="4">
        4
      </option>
    </cdr-select>
    <cdr-text>Selected: {{ selectedD }}</cdr-text>
    <hr class="icon-hr">

    <!-- Dynamic Data Example -->
    <cdr-select
      label="Dynamic"
      v-model="dynamic"
      :options="dynamicData"
      space="cdr-my-space-two-x"
    />
    <cdr-text>Selected: {{ dynamic }}</cdr-text>
    <hr class="icon-hr">

    <!-- Helper Text Example -->
    <cdr-select
      label="Example with Helper Text"
      v-model="helperTextModel"
      :options="dynamicData"
      space="cdr-my-space-two-x"
    >
      <template slot="helper-text">
        This is helper text.
      </template>
    </cdr-select>
    <cdr-text>Selected: {{ helperTextModel }}</cdr-text>
    <hr class="icon-hr">

    <!-- Info Link Example -->
    <cdr-select
      label="Example with Info Link"
      v-model="infoLinkModel"
      :options="dynamicData"
      space="cdr-my-space-two-x"
    >
      <template slot="info">
        <cdr-link href="#/selects">
          Info Link/Icon
        </cdr-link>
      </template>
    </cdr-select>
    <cdr-text>Selected: {{ infoLinkModel }}</cdr-text>
    <hr class="icon-hr">

    <!-- Info Icon Example -->
    <cdr-select
      label="Example with Info Icon"
      v-model="infoIconModel"
      :options="dynamicData"
      space="cdr-my-space-two-x"
    >
      <template slot="info">
        <icon-information-fill />
      </template>
    </cdr-select>
    <cdr-text>Selected: {{ infoIconModel }}</cdr-text>
    <hr class="icon-hr">

    <!-- Large Select Example -->
    <cdr-select
      label="Size = Large"
      v-model="dynamic"
      size="large"
      :options="dynamicData"
      space="cdr-my-space-two-x"
    />
    <hr class="icon-hr">


    <cdr-text class="cdr-my-space-two-x">
      UNMODIFIED SELECT ELEMENT FOR COMPARISON
    </cdr-text>
    <select class="cdr-mb-space-four-x standard-select">
      <option value="1">
        1
      </option>
      <option value="2">
        2
      </option>
      <option value="3">
        3
      </option>
      <option value="4">
        4
      </option>
    </select></div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Selects',
  components: Components,
  data() {
    return {
      selectedDisabled: '',
      selectedA: '',
      selectedB: '2',
      selectedC: '',
      selectedD: '',
      dynamic: '',
      dynamicData: [{ value: 'a', text: 'a' }, { value: 'b', text: 'b' }],
      helperTextModel: '',
      infoLinkModel: '',
      infoIconModel: '',
    };
  },
  methods: {
    inputEventHandler(selectedValue, event) {
      console.log('input Event event = ', event, ' selectedValue = ', selectedValue);
    },
    inputChange(selectedValue, event) {
      console.log('change Event event = ', event, ' selectedValue = ', selectedValue);
    },
  },
};
</script>

<style>
  .standard-select {
    width: 25%;
  }
</style>
