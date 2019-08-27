<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-400 heading-500@md heading-500@lg"
    >
      Searchbox
    </cdr-text>

    <cdr-search
      v-model="search1"
      :click="search"
    />
    <cdr-text>Searching: {{ search1 }}</cdr-text>

    <cdr-search
      v-model="search1"
      :click="search"
      large
    />
    <cdr-text>Searching: {{ search1 }}</cdr-text>

    <cdr-search
      v-model="search2"
      :click="search"
      bare
    />
    <cdr-text>Searching: {{ search2 }}</cdr-text>

    <cdr-search
      v-model="search2"
      :click="search"
      bare
      large
    />
    <cdr-text>Searching: {{ search2 }}</cdr-text>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';
import CdrSearch from '../CdrSearch';

export default {
  name: 'Searchbox',
  components: { ...Components, CdrSearch },
  data() {
    return {
      search1: '',
      search2: 'bare',
    };
  },
  methods: {
    search() {
      console.log(`Searching ${this.search1}`); // eslint-disable-line
    },
  },
};
</script>

<style>

</style>
