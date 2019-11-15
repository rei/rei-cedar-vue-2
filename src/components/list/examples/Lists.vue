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
    <resilience-test class="cdr-mb-space-four-x" />
  </div>
</template>

<script>
import { CdrText } from 'srcdir/index';
import unorderedList from 'componentsdir/list/examples/demo/Unordered';
import orderedList from 'componentsdir/list/examples/demo/Ordered';
import bareList from 'componentsdir/list/examples/demo/Bare';
import resilienceTest from 'componentsdir/list/examples/demo/Resilience';


export default {
  name: 'Lists',
  components: {
    unorderedList,
    orderedList,
    bareList,
    resilienceTest,
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
