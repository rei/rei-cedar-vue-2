<template>
  <div class="list-examples">

    <cdr-text
      tag="h2"
      modifier="heading-large"
    >
      List
    </cdr-text>

    <unordered-list class="cdr-stack--xl" />
    <ordered-list class="cdr-stack--xl" />
    <bare-list class="cdr-stack--xl" />
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
