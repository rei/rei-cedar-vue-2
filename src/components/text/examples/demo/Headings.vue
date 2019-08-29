<template>
  <div>
    <cdr-text
      modifier="display-600"
    >Display-600</cdr-text>
    <cdr-text
      modifier="display-700"
    >Display-700</cdr-text>
    <cdr-text
      modifier="display-800"
    >Display-800</cdr-text>
    <cdr-text
      modifier="display-900"
    >Display-900</cdr-text>
    <cdr-text
      modifier="display-1000"
    >Display-1000</cdr-text>
    <cdr-text
      modifier="display-1100"
    >Display-1100</cdr-text>
    <cdr-text
      modifier="display-1200"
    >Display-1200</cdr-text>

    <cdr-text
      v-for="n in 6"
      :key="`headingBreakpoint1-${n}`"
      :tag="`h${n}`"
      modifier="display-600 display-700@sm display-800@md display-900@lg"
    >Display @breakpoints 1000-1200  h{{ n }}</cdr-text>
    <cdr-text
      v-for="n in 6"
      :key="`headingBreakpoint4-${n}`"
      :tag="`h${n}`"
      modifier="display-1000 display-1100@md display-1200@lg"
    >Display @breakpoints 1000-1200  h{{ n }}</cdr-text>

    <cdr-text
      modifier="heading-300"
    >Heading-300</cdr-text>
    <cdr-text
      modifier="heading-400"
    >Heading-400</cdr-text>
    <cdr-text
      modifier="heading-500"
    >Heading-500</cdr-text>
    <cdr-text
      modifier="heading-600"
    >Heading-600</cdr-text>
    <cdr-text
      modifier="heading-700"
    >Heading-700</cdr-text>
    <cdr-text
      modifier="heading-800"
    >Heading-800</cdr-text>

    <cdr-text
      v-for="n in 6"
      :key="`headingBreakpoint2-${n}`"
      :tag="`h${n}`"
      modifier="heading-300 heading-400@sm heading-500@md heading-500@lg"
    >Heading @breakpoints 300-500  h{{ n }}</cdr-text>
    <cdr-text
      v-for="n in 6"
      :key="`headingBreakpoint3-${n}`"
      :tag="`h${n}`"
      modifier="heading-600 heading-700@md heading-700@lg heading-800@lg"
    >Heading @breakpoints 500-800  h{{ n }}</cdr-text>

    <cdr-text
      modifier="subheading-300"
    >Subheading-300</cdr-text>
    <cdr-text
      modifier="subheading-400"
    >Subheading-400</cdr-text>
    <cdr-text
      modifier="subheading-500"
    >Subheading-500</cdr-text>
    <cdr-text
      modifier="subheading-600"
    >Subheading-600</cdr-text>

    <cdr-text
      modifier="subheading-300 subheading-400@sm subheading-500@md subheading-600@lg"
    >Subheading @breakpoints</cdr-text>

    <cdr-text
      modifier="heading-700 display-900@md display-1100@lg"
    >Display: Legacy mapping with new @breakpoints
      <cdr-text modifier="subheading-300">
        display-700 display-900@md display-1100@lg
      </cdr-text>
    </cdr-text>

    <cdr-text modifier="display-900">
      Display static: legacy
      <cdr-text
        modifier="subheading-300"
      >
        display-900
      </cdr-text>
    </cdr-text>

    <cdr-text
      modifier="display-600 display-700@md display-900@lg"
    >Heading large: legacy mapping with new @breakpoints
      <cdr-text
        modifier="subheading-300"
      >
        display-600 display-700@md display-900@lg
      </cdr-text>
    </cdr-text>

    <cdr-text
      modifier="display-700"
    >Heading large static: legacy
      <cdr-text
        modifier="subheading-300"
      >
        heading-700
      </cdr-text>
    </cdr-text>

    <cdr-text
      modifier="heading-600 heading-700@md heading-700@lg"
    >Legacy heading Medium with new @breakpoints
      <cdr-text
        modifier="subheading-300 subheading-500@md subheading-500@lg"
      >
        heading-600 heading-700@md heading-700@lg
      </cdr-text>
    </cdr-text>

    <cdr-text
      modifier="heading-400 heading-500@md heading-500@lg"
    >Legacy heading small with new @breakpoints
      <cdr-text
        modifier="subheading-300 subheading-500@md subheading-500@lg"
      >
        heading-400  heading-500@md
      </cdr-text>
    </cdr-text>
  </div>
</template>

<script>
import { CdrText } from 'srcdir/index';

export default {
  name: 'HeadingsDemo',
  components: {
    CdrText,
  },
};
</script>

<style>

</style>
