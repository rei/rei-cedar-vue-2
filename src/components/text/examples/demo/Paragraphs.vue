<template>
  <!-- eslint-disable max-len -->
  <div>
    <h2>
      default
    </h2>
    <div data-backstop="body">
      <cdr-text>
        non modified and un-taged
      </cdr-text>

      <h2>
        body
      </h2>
      <cdr-text
        v-for="paragraph in paragraphs"
        :key="paragraph"
        :class="`cdr-text-dev--body-${paragraph}`"
      >
        body-{{ paragraph }}: <br> Lorem ipsum dolor sit amet, orci tristique enim condimentum pellentesque amet
        congue. Suspendisse pulvinar. Consectetuer curabitur id, laoreet dolor sapien libero,
        donec risus magna erat pede massa montes, lacinia pede venenatis luctus, fringilla nulla
        mollis praesent viverra. Ligula ipsum. Integer sed, sem nullam nibh sed suscipit quisque
        vestibulum.
      </cdr-text>

      <h2>
        body strong
      </h2>
      <cdr-text
        v-for="strongaragraph in paragraphs"
        :key="strongaragraph"
        :class="`cdr-text-dev--body-strong-${strongaragraph}`"
      >
        body-strong-{{ paragraph }}: <br> Lorem ipsum dolor sit amet, orci tristique enim condimentum pellentesque amet
        congue. Suspendisse pulvinar. Consectetuer curabitur id, laoreet dolor sapien libero,
        donec risus magna erat pede massa montes, lacinia pede venenatis luctus, fringilla nulla
        mollis praesent viverra. Ligula ipsum. Integer sed, sem nullam nibh sed suscipit quisque
        vestibulum.
      </cdr-text>
    </div>
    <h2>
      Utility
    </h2>
    <div data-backstop="utility">
      <cdr-text
        v-for="utility in utilities"
        :key="`utility-${utility}`"
        :class="`cdr-text-dev--utility-sans-${utility}`"
      >
        utility-sans-{{ utility }}: <br> Lorem ipsum dolor sit amet, orci tristique enim condimentum pellentesque amet
        congue. Suspendisse pulvinar. Consectetuer curabitur id, laoreet dolor sapien libero,
        donec risus magna erat pede massa montes, lacinia pede venenatis luctus, fringilla nulla
        mollis praesent viverra. Ligula ipsum. Integer sed, sem nullam nibh sed suscipit quisque
        vestibulum.
      </cdr-text>

      <h2>
        Utility strong
      </h2>
      <cdr-text
        v-for="utilitystrong in utilities"
        :key="`utility-sans-strong-${utilitystrong}`"
        :class="`cdr-text-dev--utility-sans-strong-${utilitystrong}`"
      >
        utility-sans-strong-{{ utilitystrong }}: <br> Lorem ipsum dolor sit amet, orci tristique enim condimentum pellentesque amet
        congue. Suspendisse pulvinar. Consectetuer curabitur id, laoreet dolor sapien libero,
        donec risus magna erat pede massa montes, lacinia pede venenatis luctus, fringilla nulla
        mollis praesent viverra. Ligula ipsum. Integer sed, sem nullam nibh sed suscipit quisque
        vestibulum.
      </cdr-text>

      <h2>
        Utility serif
      </h2>
      <cdr-text
        v-for="utilityserif in utilities"
        :key="utilityserif"
        :class="`cdr-text-dev--utility-serif-${utilityserif}`"
      >
        utility-serif-{{ utilityserif }}: <br> Lorem ipsum dolor sit amet, orci tristique enim condimentum pellentesque amet
        congue. Suspendisse pulvinar. Consectetuer curabitur id, laoreet dolor sapien libero,
        donec risus magna erat pede massa montes, lacinia pede venenatis luctus, fringilla nulla
        mollis praesent viverra. Ligula ipsum. Integer sed, sem nullam nibh sed suscipit quisque
        vestibulum.
      </cdr-text>

      <h2>
        Utility serif strong
      </h2>
      <cdr-text
        v-for="utilityserifstrong in utilities"
        :key="utilityserifstrong"
        :class="`cdr-text-dev--utility-serif-strong-${utilityserifstrong}`"
      >
        utility-serif-strong-{{ utilityserifstrong }}: <br> Lorem ipsum dolor sit amet, orci tristique enim condimentum pellentesque amet
        congue. Suspendisse pulvinar. Consectetuer curabitur id, laoreet dolor sapien libero,
        donec risus magna erat pede massa montes, lacinia pede venenatis luctus, fringilla nulla
        mollis praesent viverra. Ligula ipsum. Integer sed, sem nullam nibh sed suscipit quisque
        vestibulum.
      </cdr-text>
    </div>
    <h2>
      Utility serif in italic
    </h2>
    <div data-backstop="varianttest">
      <cdr-text
        v-for="utilityserifstrong in utilities"
        :key="utilityserifstrong"
        :class="`cdr-text-dev--utility-serif-strong-${utilityserifstrong}`"
      >
        <cdr-text
          class="cdr-text-dev--italic"
          tag="em"
        >
          cdr-text--italic wrapping utility-serif-strong-{{ utilityserifstrong }}: <br> Lorem ipsum dolor sit amet, orci tristique enim condimentum pellentesque amet
          congue. Suspendisse pulvinar. Consectetuer curabitur id, laoreet dolor sapien libero,
          donec risus magna erat pede massa montes, lacinia pede venenatis luctus, fringilla nulla
          mollis praesent viverra. Ligula ipsum. Integer sed, sem nullam nibh sed suscipit quisque
          vestibulum.
        </cdr-text>
      </cdr-text>

      <h2>
        body, strong, & italic
      </h2>
      <cdr-text
        v-for="paragraph in paragraphs"
        :key="paragraph"
        :class="`cdr-text-dev--body-${paragraph}`"
      >
        example of
        <cdr-text
          tag="strong"
          :class="`cdr-text-dev--body-strong-${paragraph}`"
        >
          body-strong-{{ paragraph }},
        </cdr-text>
        <cdr-text
          tag="strong"
          class="cdr-text-dev--strong"
        >
          strong,
        </cdr-text>
        <cdr-text
          tag="em"
          class="cdr-text-dev--italic"
        >
          & italic
        </cdr-text>
        <cdr-text
          class="cdr-text-dev--strong cdr-text-dev--italic"
        >
          also a combo
        </cdr-text>
        in body-{{ paragraph }} copy.
      </cdr-text>

      <h2>
        utility, strong, & italic
      </h2>
      <cdr-text
        v-for="utility in utilities"
        :key="utility"
        :class="`cdr-text-dev--utility-sans-${utility}`"
      >
        example of
        <cdr-text
          tag="strong"
          :class="`cdr-text-dev--utility-sans-strong-${utility}`"
        >
          utility-sans-strong-{{ utility }},
        </cdr-text>
        <cdr-text
          tag="strong"
          class="cdr-text-dev--dtrong"
        >
          strong,
        </cdr-text>
        <cdr-text
          tag="em"
          class="cdr-text-dev--italic"
        >
          & italic
        </cdr-text>
        <cdr-text
          class="cdr-text-dev--strong cdr-text-dev--italic"
        >
          also a combo
        </cdr-text>
        in utility-{{ utility }} copy.
      </cdr-text>
    </div>

  </div>
</template>

<script>
import { CdrText } from 'srcdir/index';

export default {
  name: 'ParagraphsDemo',
  components: {
    CdrText,
  },
  data() {
    return {
      paragraphs: ['300', '400', '500'],
      utilities: ['100', '200', '300', '400', '500', '600', '700', '800'],
    };
  },
};
</script>

<style>

</style>
