<template>
  <!-- eslint-disable max-len -->
  <div class="link-examples">
    <cdr-text
      tag="h2"
      modifier="heading-small"
    >
      Links
    </cdr-text>

    <cdr-text
      tag="h3"
      modifier="subheading"
    >
      Default Link, No props
    </cdr-text>
    <div class="anchor-example">
      <cdr-link :data-backstop="`cdr-link`" />
    </div>

    <cdr-text
      tag="h3"
      modifier="subheading"
    >Link, href set, spacing class applied</cdr-text>
    <cdr-link
      href="https://www.rei.com/"
      spacing-class="cdr-space-inset-one-x"
    >
      REI.com
    </cdr-link>
    <cdr-text
      tag="h3"
      modifier="subheading"
    >Standalone Link (No underline)</cdr-text>
    <cdr-link
      modifier="standalone"
      spacing-class="cdr-space-inset-one-x"
      :data-backstop="`cdr-link--standalone`"
    />

    <cdr-text
      tag="h3"
      modifier="subheading"
    >Links, with icon</cdr-text>

    <cdr-list
      spacing-class="cdr-space-inset-one-x"
    >
      <li>
        <cdr-link>
          <cdr-icon
            use="#mail"
            modifier="inherit-color"
            spacing-class="cdr-space-mr-half-x"
          />
          Icon on the left
        </cdr-link>
      </li>
      <li>
        <cdr-link>
          Icon on the right
          <cdr-icon
            use="#download"
            modifier="inherit-color"
            spacing-class="cdr-space-ml-half-x"
          />
        </cdr-link>
      </li>
      <li>
        <cdr-link>
          <cdr-icon
            use="#twitter"
            modifier="inherit-color"
            spacing-class="cdr-space-mr-half-x"
          />
          Icons on both sides
          <cdr-icon
            use="#external-link"
            modifier="inherit-color"
            spacing-class="cdr-space-ml-half-x"
          />
        </cdr-link>
      </li>
    </cdr-list>

    <cdr-text
      tag="h3"
      modifier="subheading"
    >Content Resilience, too much content</cdr-text>
    <div class="anchor-example">
      <cdr-link spacing-class="cdr-space-inset-one-x">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
      </cdr-link>
    </div>

    <cdr-text
      tag="h3"
      modifier="subheading"
    >Content Resilience, too little content</cdr-text>
    <div class="anchor-example">
      <cdr-link spacing-class="cdr-space-inset-one-x">
        K
      </cdr-link>
    </div>

    <cdr-text
      tag="h3"
      modifier="subheading"
    >Link using a &lt;button&gt; element</cdr-text>
    <div class="anchor-example">
      <cdr-link
        tag="button"
        spacing-class="cdr-space-inset-one-x"
        :data-backstop="`cdr-link--button`"
      >I'm a button!</cdr-link>
    </div>

    <!-- Nested theme Testing -->

    <cdr-themer
      theme="light"
      background="lightest"
    >
      <!-- Smaller examples with nested theme (for override) -->
      <p>Works nested</p>
      <p>
        <cdr-link
          href="https://www.rei.com/"
          spacing-class="cdr-space-pl-one-x cdr-space-pr-one-x"
        >
          REI.com
        </cdr-link>
        <cdr-link
          href="https://www.rei.com/"
          modifier="standalone"
        >REI.com</cdr-link>
      </p>
      <!-- Override individual theme -->
      <!-- <p>Individual override (dark on light)</p>
      <p>
        <cdr-link
          href="https://www.rei.com/"
          theme="dark">REI.com</cdr-link>
      </p> -->
    </cdr-themer>

    <cdr-link
      href="https://www.rei.com/"
      spacing-class="cdr-space-pl-one-x cdr-space-pr-one-x"
    >REI.com</cdr-link>
    <cdr-link
      href="https://www.rei.com/"
    >REI.com</cdr-link>
    <p>Override (light on dark)</p>
    <cdr-link
      href="https://www.rei.com/"
      spacing-class="cdr-space-inset-one-x"
      theme="light"
    >REI.com</cdr-link>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Links',
  components: {
    ...Components,
  },
};
</script>

<style>
/** normalize line-height for consistent testing because links inherit it */

.link-examples {
  line-height: 1;
}

</style>
