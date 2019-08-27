<template>
  <div
    class="list-examples"
    data-backstop="lists"
  >

    <cdr-text
      tag="h2"
      modifier="display-600 display-700@md display-900@lg"
    >
      List
    </cdr-text>

    <unordered-list class="cdr-mb-space-four-x" />
    <ordered-list class="cdr-mb-space-four-x" />
    <bare-list class="cdr-mb-space-four-x" />
  </div>
</template>

<script>
import CdrText from 'componentsdir/text/CdrText';
import unorderedList from 'componentsdir/list/examples/demo/Unordered';
import orderedList from 'componentsdir/list/examples/demo/Ordered';
import bareList from 'componentsdir/list/examples/demo/Bare';


export default {
  name: 'Lists',
  components: {
    unorderedList,
    orderedList,
    bareList,
    CdrText,
  },
};
</script>

<style>
/** normalize line-height for consistent testing because lists inherit it */

.list-examples {
  line-height: 1;
}
</style>
