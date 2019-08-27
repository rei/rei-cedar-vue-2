<template>
  <div data-backstop="selects">
    <cdr-text
      tag="h2"
      modifier="heading-400 heading-500@md heading-500@lg"
    >
      Selects
    </cdr-text>

    <cdr-select
      label="Disabled select"
      v-model="selected"
      disabled
    >
      <option value="1">
        1
      </option>
    </cdr-select>
    <cdr-text>Selected: {{ selected }}</cdr-text>

    <cdr-select
      label="Prompt"
      v-model="selected"
      prompt="Choose one"
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
    <cdr-text>Selected: {{ selected }}</cdr-text>

    <cdr-select
      label="Prompt Required"
      v-model="selected"
      prompt="Choose one"
      required
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
    <cdr-text>Selected: {{ selected }}</cdr-text>

    <cdr-select
      label="Hidden label text"
      hide-label
      v-model="selected"
      prompt="Hidden label"
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
    <cdr-text>Selected: {{ selected }}</cdr-text>

    <cdr-select
      label="No Prompt"
      v-model="selected2"
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
    <cdr-text>Selected: {{ selected2 }}</cdr-text>

    <cdr-select
      label="Dynamic"
      v-model="dynamic"
      :options="dynamicData"
    />
    <cdr-text>Selected: {{ dynamic }}</cdr-text>

    <cdr-select
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
    <cdr-text>selected: {{ multiple }}</cdr-text>

    <cdr-select
      label="Multiple No Prompt"
      v-model="multiple2"
      multiple
      size="4"
      :options="multiple2Data"
    />
    <cdr-text>selected: {{ multiple2 }}</cdr-text>
  </div>
</template>

<script>
import * as Components from 'componentsdir/_index';

export default {
  name: 'Selects',
  components: Components,
  data() {
    return {
      selected: '',
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
