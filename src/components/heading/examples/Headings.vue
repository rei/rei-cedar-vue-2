<template>
  <div>
    <div data-backstop="headings">
      <div data-backstop="heading-group-display">
        <displayHeadings/>
      </div>
      <div data-backstop="heading-group-simple">
        <simpleHeadings/>
      </div>
      <div data-backstop="heading-group-subhead">
        <subheading/>
      </div>
    </div>
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
