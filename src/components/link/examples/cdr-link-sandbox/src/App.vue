<template>
  <div class="cdr-container">
    <cdr-text
        tag="h1"
        modifier="heading-large"
        class="cdr-stack--xl">
        REI-Cedar Link
    </cdr-text>
    <InlineLinkParagraph />
  </div>
</template>

<script>
import * as CdrComps from "./cedar.js";
import InlineLinkParagraph from "./components/InlineLinkParagraphs";
export default {
  name: "App",
  components: {
    InlineLinkParagraph,
    ...CdrComps
  }
};
</script>
