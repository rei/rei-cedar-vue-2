<template>
  <!-- eslint-disable max-len -->
  <div
    class="link-examples"
    data-backstop="all-links"
  >
    <cdr-text
      tag="h2"
      modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
    >
      Links
    </cdr-text>

    <cdr-text
      tag="h3"
      modifier="subheading-sans-300"
    >
      Default Link, No props
    </cdr-text>
    <div class="anchor-example">
      <cdr-link data-backstop="cdr-link">
        REI.com
      </cdr-link>
    </div>
    <div class="anchor-example">
      <cdr-link />
    </div>

    <cdr-text
      tag="h3"
      modifier="subheading-sans-300"
    >Link, href set, spacing class applied</cdr-text>
    <cdr-link
      href="https://www.rei.com/"
      space="cdr-space-inset-one-x"
    >
      REI.com
    </cdr-link>

    <cdr-text
      tag="h3"
      modifier="subheading-sans-300"
    >Link, href set</cdr-text>
    <cdr-link
      href="https://www.example.com/"
    >
      example.com
    </cdr-link>
    <cdr-text
      tag="h3"
      modifier="subheading-sans-300"
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
      modifier="subheading-sans-300"
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


    <cdr-text
      tag="h3"
      modifier="subheading-sans-300"
    >Links, with inherited color</cdr-text>
    <div style="color: darkgreen; fill: darkgreen;">
      <cdr-link
        inherit-color
        href="rei.com"
      >
        inherit-color plain example
      </cdr-link>
      <br>
      <cdr-link inherit-color>
        <cdr-icon
          inherit-color
          use="#mail"
          modifier="inherit-color"
          space="cdr-mr-space-half-x"
        />
        cdr-link icon inherit
      </cdr-link>
    </div>
    <br><br>
    <cdr-text
      tag="h3"
      modifier="subheading-sans-500"
    >Button Links</cdr-text>

    <cdr-text
      tag="h4"
      modifier="subheading-sans-300"
    >Link using a &lt;button&gt; element inline</cdr-text>
    <div class="anchor-example cdr-py-space-one-x">
      hey there <cdr-link
        tag="button"
        data-backstop="cdr-link--button"
        @click="clicked"
      >I'm a button!</cdr-link> wow!
    </div>

    <cdr-text
      tag="h4"
      modifier="subheading-sans-300"
    >Link using a &lt;button&gt; element and size prop</cdr-text>
    <div class="anchor-example">

      <cdr-link
        tag="button"
        size="large@xs medium@sm small@md large@lg"
        :inset="true"
        @click="clicked"
      >I'm a responsive button!</cdr-link>
      <br>
      <cdr-link
        tag="button"
        size="small"
        :inset="true"
        @click="clicked"
      >I'm a small button!</cdr-link>

      <cdr-link
        tag="button"
        size="medium"
        :inset="true"
        @click="clicked"
      >I'm a medium button!</cdr-link>

      <cdr-link
        tag="button"
        size="large"
        :inset="true"
        @click="clicked"
      >I'm a large button!</cdr-link>
    </div>

    <cdr-text
      tag="h4"
      modifier="subheading-sans-300"
    >Link using a &lt;button&gt; element and size prop with left/right padding removed</cdr-text>
    <div class="anchor-example">

      <cdr-link
        tag="button"
        size="large@xs medium@sm small@md large@lg"
        :inset="true"
        class="button-padding-override"
        @click="clicked"
      >I'm a responsive button!</cdr-link>
      <br>
      <cdr-link
        tag="button"
        size="small"
        :inset="true"
        class="button-padding-override"
        @click="clicked"
      >I'm a small button!</cdr-link>
      <br>
      <cdr-link
        tag="button"
        size="medium"
        :inset="true"
        class="button-padding-override"
        @click="clicked"
      >I'm a medium button!</cdr-link>
      <br>
      <cdr-link
        tag="button"
        size="large"
        :inset="true"
        class="button-padding-override"
        @click="clicked"
      >I'm a large button!</cdr-link>
    </div>

    <cdr-text
      tag="h4"
      modifier="subheading-sans-300"
    >Link using a &lt;button&gt; element and size prop w/ buttons</cdr-text>
    <div class="anchor-example">

      <cdr-link
        tag="button"
        size="small"
        :inset="true"
        @click="clicked"
      >I'm a small button!</cdr-link>
      <cdr-button size="small">I'm a small button!</cdr-button>

      <cdr-link
        tag="button"
        size="medium"
        :inset="true"
        @click="clicked"
      >I'm a medium button!</cdr-link>
      <cdr-button size="medium">I'm a medium button!</cdr-button>

      <cdr-link
        tag="button"
        size="large"
        :inset="true"
        @click="clicked"
      >I'm a large button!</cdr-link>
      <cdr-button size="large">I'm a large button!</cdr-button>
    </div>
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

.button-padding-override {
  padding-left: 0;
  padding-right: 0;
}

</style>
