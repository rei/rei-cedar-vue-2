<script>
import AutocompleteInput from '../.';
export default {
  components: {
    AutocompleteInput,
  },
  data() {
    return {
      musicians: null,
      suggestions: [
        'John',
        'Peter',
        'Paul',
        'Mary',
        'Ringo',
        'Bob',
        'Kurt',
        'Madonna',
        'Ottis',
        'Ben',
      ],
    };
  },
  methods: {
    onAutocompleteSelectedData(selectedObj) {
      console.log(selectedObj);
    },
    onClearAutocompleteSelection() {
      this.autocompleteData = null;
    },
    onAutocompleteChange(inputValue) {
      this.musicians = inputValue;
    },
  },
};
</script>
<template>
  <autocomplete-input
    :value="musicians"
    :suggestions="suggestions"
    label="Find a Musician"
    placeholder="Enter your name"
    @autocomplete-change="onAutocompleteChange"
    @autocomplete-selected-data="onAutocompleteSelectedData"
    @clear-autocomplete-selection="onClearAutocompleteSelection"
  />
</template>
