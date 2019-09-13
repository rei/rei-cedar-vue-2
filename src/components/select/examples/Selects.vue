<template>
  <div data-backstop="selects">
    <cdr-text
      tag="h2"
      modifier="heading-400 heading-500@md heading-500@lg"
      space="cdr-my-space-two-x"
    >
      Selects
    </cdr-text>

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
    <!-- <cdr-text>Selected: {{ selectedDisabled }}</cdr-text> -->

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
    <!-- <cdr-text>Selected: {{ selectedA }}</cdr-text> -->

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
    <!-- <cdr-text>Selected: {{ selectedB }}</cdr-text> -->

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
    <!-- <cdr-text>Selected: {{ selectedC }}</cdr-text> -->

    <cdr-select
      label="No Prompt"
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
    <!-- <cdr-text>Selected: {{ selected2 }}</cdr-text> -->

    <cdr-select
      label="Dynamic"
      v-model="dynamic"
      :options="dynamicData"
      space="cdr-my-space-two-x"
    />
    <!-- <cdr-text>Selected: {{ dynamic }}</cdr-text> -->

    <cdr-select
      label="Example with Helper Text"
      v-model="dynamic"
      :options="dynamicData"
      space="cdr-my-space-two-x"
    >
      <template slot="helper-text">
        This is helper text.
      </template>
    </cdr-select>

    <cdr-select
      label="Example with Info Link"
      v-model="dynamic"
      :options="dynamicData"
      space="cdr-my-space-two-x"
    >
      <template slot="info">
        <cdr-link href="#/selects">
          Info Link/Icon
        </cdr-link>
      </template>
    </cdr-select>

    <cdr-select
      label="Example with Info Icon"
      v-model="dynamic"
      :options="dynamicData"
      space="cdr-my-space-two-x"
    >
      <template slot="info">
        <icon-information-fill />
      </template>
    </cdr-select>

    <cdr-select
      label="Size = Medium"
      v-model="dynamic"
      :options="dynamicData"
      space="cdr-my-space-two-x"
    />

    <cdr-select
      label="Size = Large"
      v-model="dynamic"
      size="large"
      :options="dynamicData"
      space="cdr-my-space-two-x"
    />

    <cdr-text class="cdr-my-space-two-x">
      UNMODIFIED SELECT ELEMENT FOR COMPARISON
    </cdr-text>
    <select class="cdr-mb-space-four-x">
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
      <select>

      <!-- <cdr-select
      label="Multiple Prompt"
      v-model="multiple"
      multiple
      size="4"
      prompt="Choose two"
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
    <cdr-text>selected: {{ multiple }}</cdr-text> -->

      <!-- <cdr-select
      label="Multiple No Prompt"
      v-model="multiple2"
      multiple
      size="4"
      :options="multiple2Data"
    />
    <cdr-text>selected: {{ multiple2 }}</cdr-text> -->
      </select></select></div>
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
      selected2: '1',
      dynamic: '',
      dynamicData: [{ value: 'a', text: 'a' }, { value: 'b', text: 'b' }],
      multiple: ['1', '2'],
      multiple2: [],
      multiple2Data: ['a', 'b', 'c', 'd'],
    };
  },
};
</script>

<style>

</style>
