<template>
  <div>
    <h3>Headings</h3>

    <cdr-text
      v-for="n in 6"
      :key="`display-${n}`"
      :tag="`h${n}`"
      modifier="display"
    >Display Heading h{{ n }}</cdr-text>

    <cdr-text
      v-for="n in 6"
      :key="`subheading-${n}`"
      :tag="`h${n}`"
      modifier="subheading"
    >Subheading  h{{ n }}</cdr-text>

    <cdr-text
      v-for="n in 6"
      :key="`heading-large-${n}`"
      :tag="`h${n}`"
      modifier="heading-large"
    >Heading-large  h{{ n }}</cdr-text>

    <cdr-text
      v-for="n in 6"
      :key="`heading-medium-${n}`"
      :tag="`h${n}`"
      modifier="heading-medium"
    >Heading-medium  h{{ n }}</cdr-text>

    <cdr-text
      v-for="n in 6"
      :key="`heading-small-${n}`"
      :tag="`h${n}`"
      modifier="heading-small"
    >Heading-small  h{{ n }}</cdr-text>
  </div>
</template>

<script>
import CdrText from 'componentsdir/text/CdrText';

export default {
  name: 'HeadingsDemo',
  components: {
    CdrText,
  },
};
</script>

<style>

</style>
