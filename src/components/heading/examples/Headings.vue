<template>
  <div>
    <displayHeadings/>
    <simpleHeadings/>
    <subheading/>
  </div>
</template>

<script>
import simpleHeadings from './demo/simpleHeadings';
import subheading from './demo/subheading';
import displayHeadings from './demo/displayHeadings';

export default {
  name: 'Headings',
  components: {
    simpleHeadings,
    subheading,
    displayHeadings,
  },
};
</script>
