<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
      space="cdr-my-space-two-x"
    >
      Selects
    </cdr-text>
    <hr class="icon-hr">

    <div data-backstop="select-target">
      <!-- Default Example -->
      <cdr-select
        label="Default"
        v-model="selectedA"
        prompt="Choose one"
        space="cdr-my-space-two-x"
        @select-change="doExternal"
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
      <cdr-text>Selected Value: {{ selectedA }}</cdr-text>

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
      <cdr-text>Selected Value: {{ selectedB }}</cdr-text>
    </div>
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
    <cdr-text>Selected Value: {{ selectedC }}</cdr-text>
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
      <option value="REALLY REALLY LONG VALUE REALLY REALLY LONG VALUE">
        REALLY REALLY LONG VALUE REALLY REALLY LONG VALUE
      </option>
    </cdr-select>
    <cdr-text>Selected Value: {{ selectedD }}</cdr-text>
    <hr class="icon-hr">

    <!-- Dynamic Data Example -->
    <cdr-select
      label="Dynamic"
      v-model="dynamic"
      :options="dynamicData"
      space="cdr-my-space-two-x"
      prompt="Choose One"
    />
    <cdr-text>Selected: {{ dynamic }}</cdr-text>
    <hr class="icon-hr">

    <!-- Helper Text Example -->
    <cdr-select
      label="Example with Helper Text"
      v-model="helperTextModel"
      :options="dynamicData"
      space="cdr-my-space-two-x"
      prompt="Choose One"
    >
      <template slot="helper-text">
        This is helper text.
      </template>
    </cdr-select>
    <cdr-text>Selected Value: {{ helperTextModel }}</cdr-text>
    <hr class="icon-hr">

    <!-- Info Link Example -->
    <cdr-select
      label="Example with Info Link"
      v-model="infoLinkModel"
      :options="dynamicData"
      space="cdr-my-space-two-x"
      prompt="Choose One"
    >
      <template slot="info">
        <cdr-link
          href="#/selects"
          modifier="standalone"
        >
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
      prompt="Choose One"
    >
      <template slot="info">
        <icon-information-fill size="small" />
      </template>
    </cdr-select>
    <cdr-text>Selected Value: {{ infoIconModel }}</cdr-text>
    <hr class="icon-hr">

    <!-- Large Select Example -->
    <cdr-select
      label="Size = Large"
      v-model="dynamic"
      size="large"
      :options="dynamicData"
      space="cdr-my-space-two-x"
      prompt="Choose One"
    />
    <cdr-text>Selected Value: {{ dynamic }}</cdr-text>
    <hr class="icon-hr">

    <!-- DEPRECATED MULTIPLE SELECT EXAMPLES -->
    <cdr-text class="cdr-my-space-two-x">
      DEPRECATED Multiple Select
    </cdr-text>

    <cdr-select
      label="Multiple Prompt"
      v-model="multiple"
      multiple
      prompt="Choose two"
    >
      <option
        value="1"
      >
        1
      </option>
      <option value="2">
        2
      </option>
      <option
        value="3"
      >
        3
      </option>
      <option value="4">
        4
      </option>
    </cdr-select>
    <cdr-text>Selected Values: {{ multiple }}</cdr-text>
    <hr class="icon-hr">


    <cdr-text class="cdr-my-space-two-x">
      DEPRECATED Multiple Select No Prompt
    </cdr-text>

    <cdr-select
      label="Multiple Prompt"
      v-model="multiple2"
      multiple
      :options="multiple2Data"
    />
    <cdr-text>Selected Values: {{ multiple2 }}</cdr-text>
    <hr class="icon-hr">
  </div>
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
      // DEPRECATED
      multiple: ['1', '2'],
      multiple2: ['-1'],
      multiple2Data: ['a', 'b', 'c', 'd'],
    };
  },
  methods: {
    inputEventHandler(selectedValue, event) {
      console.log('input Event event = ', event, ' selectedValue = ', selectedValue);
    },
    inputChange(selectedValue, event) {
      console.log('change Event event = ', event, ' selectedValue = ', selectedValue);
    },
    doExternal(v, e) {
      console.log('EXTERNAL', v, e);
    },
  },
};
</script>

<style>
  .standard-select {
    width: 25%;
  }
</style>
