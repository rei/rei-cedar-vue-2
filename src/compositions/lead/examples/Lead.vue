<template>
  <div>
    <h2>Lead example</h2>
    <cdr-lead
      :rating-props="{
        'rating':'5',
        'count':'2',
        'href':'https://www.rei.com',
      }"
      label="someplace"
      heading="this is a title"
      heading-level="4"
      :snapshot="['7.5 mi', 'out & back', '286 ft Ele Gain']"
      url="https://rei.com"
    />
  </div>
</template>

<script>
import CdrLead from '../CdrLead';

export default {
  name: 'LeadExample',
  components: {
    CdrLead,
  },
};
</script>

<style>
</style>
