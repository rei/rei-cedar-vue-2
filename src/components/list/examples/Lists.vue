<template>
  <div class="list-examples">

    <cdr-text
      tag="h2"
      modifier="heading-large"
    >
      List
    </cdr-text>

    <unordered-list class="cdr-space-stack-4-x" />
    <ordered-list class="cdr-space-stack-4-x" />
    <bare-list class="cdr-space-stack-4-x" />
  </div>
</template>

<script>
import CdrText from 'componentsdir/text/CdrText';
import unorderedList from './demo/Unordered';
import orderedList from './demo/Ordered';
import bareList from './demo/Bare';


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
