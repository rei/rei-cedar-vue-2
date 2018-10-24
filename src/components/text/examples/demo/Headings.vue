<template>
  <div>
    <cdr-text
      tag="h3"
      modifier="heading-medium">
      Headings
    </cdr-text>

    <cdr-text
      v-for="n in 6"
      :key="`display-${n}`"
      :tag="`h${n}`"
      modifier="display"
    >Display Heading h{{ n }}</cdr-text>

    <cdr-text modifier="display-static">Static display heading as p</cdr-text>

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

    <cdr-text modifier="heading-large-static">Static heading-large as p</cdr-text>

    <cdr-text
      v-for="n in 6"
      :key="`heading-medium-${n}`"
      :tag="`h${n}`"
      modifier="heading-medium"
    >Heading-medium  h{{ n }}</cdr-text>

    <cdr-text modifier="heading-medium-static">Static heading-medium as p</cdr-text>

    <cdr-text
      v-for="n in 6"
      :key="`heading-small-${n}`"
      :tag="`h${n}`"
      modifier="heading-small"
    >Heading-small  h{{ n }}</cdr-text>

    <cdr-text modifier="heading-small-static">Static heading-small as p</cdr-text>
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
