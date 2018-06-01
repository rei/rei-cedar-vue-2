<template>
   <cdr-row class="cdr-stack--lg">
    <cdr-col span="4">
      <cdr-text
        tag="h2"
        modifier="heading-small"
        class="cdr-text-right">
       Inline link - paragraph 
      </cdr-text>
    </cdr-col>
    <cdr-col span="8">
      <cdr-text>
        Intentionally comprehensive so you don't forget anything. our checklist for day hikers starts with the required
        <cdr-link href="rei.com">Ten Essentials.</cdr-link> Adapt those and the remaining items on the list based on weather and the remoteness of
        destination, as well as the hiking experience and preferences of your group.
      </cdr-text>
    </cdr-col>
  </cdr-row>
</template>

<script>
import * as CdrComps from "../cedar.js";
export default {
  name: "InlineLinkParagraph",
  components: {
    ...CdrComps
  }
};
</script>


<style scoped>

</style>
