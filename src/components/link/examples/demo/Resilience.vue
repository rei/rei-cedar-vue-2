<template>
  <div>

    <h3>
      Resilience Tests
    </h3>

    <h3>Content Resilience, too much content</h3>
    <div class="anchor-example">
      <cdr-link href="#foo">
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

    <h3>Content Resilience, too little content</h3>
    <div class="anchor-example">
      <cdr-link href="#foo">
        K
      </cdr-link>
    </div>

    <h4>
      Typography validation -
    </h4>

    <cdr-text
      v-for="p1 in paragraphs"
      :key="`link-p1-${p1}`"
      :class="`cdr-text-dev--body-${p1}`"
    >
      <cdr-link href="#foo">
        item text
        <cdr-text
          tag="span"
          :class="`cdr-text-dev--body-strong-${p1}`"
        >
          sit amet,
        </cdr-text>
      </cdr-link>
    </cdr-text>

    <cdr-text
      v-for="u1 in utilities"
      :key="`link-u1-${u1}`"
      :class="`cdr-text-dev--utility-sans-${u1}`"
    >
      <cdr-link href="#foo">
        item text
        <cdr-text
          tag="span"
          :class="`cdr-text-dev--utility-sans-strong-${u1}`"
        >
          sit amet,
        </cdr-text>
      </cdr-link>
    </cdr-text>

    <cdr-text
      v-for="u2 in utilities"
      :key="`link-u2-${u2}`"
      :class="`cdr-text-dev--utility-sans-strong-${u2}`"
    >
      <cdr-link href="#foo">
        <cdr-icon
          inherit-color
          use="#mail"
          modifier="inherit-color"
        />
        text element wrapping link with nested icon
      </cdr-link>
    </cdr-text>

    <cdr-list>
      <li

        v-for="u1 in utilities"
        :key="`list-link-left-icon-${u1}`"
      >
        <cdr-link href="#foo">
          <cdr-icon
            inherit-color
            use="#mail"
            modifier="inherit-color"
          />
          <cdr-text
            tag="span"
            :class="`cdr-text-dev--utility-sans-strong-${u1}`"
          >
            Icon on the left
          </cdr-text>
        </cdr-link>
      </li>
      <li

        v-for="u1 in utilities"
        :key="`list-link-right-icon-${u1}`"
      >
        <cdr-link href="#foo">
          <cdr-text
            tag="span"
            :class="`cdr-text-dev--utility-sans-strong-${u1}`"
          >
            Icon on the right
          </cdr-text>
          <cdr-icon
            inherit-color
            use="#download"
            modifier="inherit-color"
          />
        </cdr-link>
      </li>
      <li

        v-for="u1 in utilities"
        :key="`list-link-both-icon-${u1}`"
      >
        <cdr-link href="#foo">
          <cdr-icon
            inherit-color
            use="#twitter"
            modifier="inherit-color"
          />
          <cdr-text
            tag="span"
            :class="`cdr-text-dev--utility-sans-strong-${u1}`"
          >
            Icons on both sides
          </cdr-text>
          <cdr-icon
            inherit-color
            use="#external-link"
            modifier="inherit-color"
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
