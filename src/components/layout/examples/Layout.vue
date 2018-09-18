<template>
  <div>
    <h2>layout</h2>

    <h3>inline</h3>
    <cdr-layout
      spacing="1-x"
    >
      <cdr-button>button1</cdr-button>
      <cdr-button>button2</cdr-button>
      <cdr-button>button3</cdr-button>
    </cdr-layout>

    <h3>stack</h3>
    <cdr-layout
      direction="stack"
      spacing="1-x"
    >
      <cdr-button>button1</cdr-button>
      <cdr-button>button2</cdr-button>
      <cdr-button>button3</cdr-button>
    </cdr-layout>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Layout',
  components: {
    ...Components,
  },
};
</script>

<style>
</style>
