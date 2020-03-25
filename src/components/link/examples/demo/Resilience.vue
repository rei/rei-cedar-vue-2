<template>
  <div>

    <cdr-text
      tag="h3"
      modifier="heading-serif-600 heading-serif-700@md heading-serif-700@lg"
    >
      Resilience Tests
    </cdr-text>

    <cdr-text
      tag="h3"
      modifier="subheading"
    >Content Resilience, too much content</cdr-text>
    <div class="anchor-example">
      <cdr-link space="cdr-space-inset-one-x">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam.
        Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore,
        quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus
        illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore,
        quis ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus
        illo doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis
        ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo
        doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis
        ducimus itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo
        doloremque ullam quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore, quis ducimus
        itaque rerum id animi accusantium porro ex numquam. Dolorum ducimus illo doloremque ullam
        quas. Vel similique laudantium error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officia inventore, quis ducimus itaque rerum id animi accusantium porro ex numquam.
        Dolorum ducimus illo doloremque ullam quas. Vel similique laudantium error!
      </cdr-link>
    </div>

    <cdr-text
      tag="h3"
      modifier="subheading"
    >Content Resilience, too little content</cdr-text>
    <div class="anchor-example">
      <cdr-link space="cdr-space-inset-one-x">
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
        space="cdr-space-inset-one-x"
        data-backstop="cdr-link--button"
        @click="clicked"
      >I'm a button!</cdr-link>
    </div>


    <cdr-text
      tag="h4"
      modifier="heading-serif-500 heading-serif-600@md heading-serif-600@lg"
    >
      Typography validation -
    </cdr-text>

    <cdr-text
      v-for="p1 in paragraphs"
      :key="`link-p1-${p1}`"
      :modifier="`body-${p1}`"
    >
      <cdr-link space="cdr-mb-space-half-x">
        item text
        <cdr-text
          tag="span"
          :modifier="`body-strong-${p1}`"
        >
          sit amet,
        </cdr-text>
      </cdr-link>
    </cdr-text>

    <cdr-text
      v-for="u1 in utilities"
      :key="`link-u1-${u1}`"
      :modifier="`utility-sans-${u1}`"
    >
      <cdr-link space="cdr-mb-space-half-x">
        item text
        <cdr-text
          tag="span"
          :modifier="`utility-sans-strong-${u1}`"
        >
          sit amet,
        </cdr-text>
      </cdr-link>
    </cdr-text>

    <cdr-text
      v-for="u2 in utilities"
      :key="`link-u2-${u2}`"
      :modifier="`utility-sans-strong-${u2}`"
    >
      <cdr-link>
        <cdr-icon
          inherit-color
          use="#mail"
          modifier="inherit-color"
          space="cdr-mr-space-half-x"
        />
        text element wrapping link with nested icon
      </cdr-link>
    </cdr-text>

    <cdr-list>
      <li
        space="cdr-space-inset-one-x"
        v-for="u1 in utilities"
        :key="`list-link-left-icon-${u1}`"
      >
        <cdr-link>
          <cdr-icon
            inherit-color
            use="#mail"
            modifier="inherit-color"
            space="cdr-mr-space-half-x"
          />
          <cdr-text
            tag="span"
            :modifier="`utility-sans-strong-${u1}`"
          >
            Icon on the left
          </cdr-text>
        </cdr-link>
      </li>
      <li
        space="cdr-space-inset-one-x"
        v-for="u1 in utilities"
        :key="`list-link-right-icon-${u1}`"
      >
        <cdr-link>
          <cdr-text
            tag="span"
            :modifier="`utility-sans-strong-${u1}`"
          >
            Icon on the right
          </cdr-text>
          <cdr-icon
            inherit-color
            use="#download"
            modifier="inherit-color"
            space="cdr-ml-space-half-x"
          />
        </cdr-link>
      </li>
      <li
        space="cdr-space-inset-one-x"
        v-for="u1 in utilities"
        :key="`list-link-both-icon-${u1}`"
      >
        <cdr-link>
          <cdr-icon
            inherit-color
            use="#twitter"
            modifier="inherit-color"
            space="cdr-mr-space-half-x"
          />
          <cdr-text
            tag="span"
            :modifier="`utility-sans-strong-${u1}`"
          >
            Icons on both sides
          </cdr-text>
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
  name: 'ResilienceTest',
  components: Components,
  data() {
    return {
      paragraphs: ['300', '400', '500'],
      utilities: ['100', '200', '300', '400', '500', '600', '700', '800'],
    };
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

</style>
