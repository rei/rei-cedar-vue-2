<template>
  <!-- eslint-disable max-len -->
  <div
    class="link-examples"
    data-backstop="all-links"
  >
    <cdr-text
      tag="h2"
      modifier="heading--sans-400 heading--sans-500@md heading--sans-500@lg"
    >
      Links
    </cdr-text>

    <cdr-text
      tag="h3"
      modifier="subheading--sans-300"
    >
      Default Link, No props
    </cdr-text>
    <div class="anchor-example">
      <cdr-link data-backstop="cdr-link">
        REI.com
      </cdr-link>
    </div>

    <cdr-text
      tag="h3"
      modifier="subheading--sans-300"
    >Link, href set, spacing class applied</cdr-text>
    <cdr-link
      href="https://www.rei.com/"
      space="cdr-space-inset-one-x"
    >
      REI.com
    </cdr-link>
    <cdr-text
      tag="h3"
      modifier="subheading"
    >Standalone Link (No underline)</cdr-text>
    <cdr-link
      modifier="standalone"
      space="cdr-space-inset-one-x"
      data-backstop="cdr-link--standalone"
    >
      REI.com
    </cdr-link>

    <cdr-text
      tag="h3"
      modifier="subheading--sans-300"
    >Links, with icon</cdr-text>

    <cdr-list
      space="cdr-space-inset-one-x"
    >
      <li>
        <cdr-link>
          <cdr-icon
            inherit-color
            use="#mail"
            modifier="inherit-color"
            space="cdr-mr-space-half-x"
          />
          Icon on the left
        </cdr-link>
      </li>
      <li>
        <cdr-link>
          Icon on the right
          <cdr-icon
            inherit-color
            use="#download"
            modifier="inherit-color"
            space="cdr-ml-space-half-x"
          />
        </cdr-link>
      </li>
      <li>
        <cdr-link>
          <cdr-icon
            inherit-color
            use="#twitter"
            modifier="inherit-color"
            space="cdr-mr-space-half-x"
          />
          Icons on both sides
          <cdr-icon
            inherit-color
            use="#external-link"
            modifier="inherit-color"
            space="cdr-ml-space-half-x"
          />
        </cdr-link>
      </li>
    </cdr-list>


  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'StandardLinks',
  components: {
    ...Components,
  },
  methods: {
    clicked() {
      // eslint-disable-next-line no-console
      console.log('link clicked!');
    },
  },
};
</script>

<style>
/** normalize line-height for consistent testing because links inherit it */

.link-examples {
  line-height: 1;
}

</style>
