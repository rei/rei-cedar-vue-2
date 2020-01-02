<template>
  <!-- eslint-disable max-len -->
  <div>
    <cdr-text modifier="eyebrow-100">
      default
    </cdr-text>
    <div data-backstop="body">
      <cdr-text>
        non modified and un-taged
      </cdr-text>

      <cdr-text modifier="eyebrow-100">
        body
      </cdr-text>
      <cdr-text
        v-for="paragraph in paragraphs"
        :key="paragraph"
        :modifier="`body-${paragraph}`"
      >
        body-{{ paragraph }}: <br> Lorem ipsum dolor sit amet, orci tristique enim condimentum pellentesque amet
        congue. Suspendisse pulvinar. Consectetuer curabitur id, laoreet dolor sapien libero,
        donec risus magna erat pede massa montes, lacinia pede venenatis luctus, fringilla nulla
        mollis praesent viverra. Ligula ipsum. Integer sed, sem nullam nibh sed suscipit quisque
        vestibulum.
      </cdr-text>

      <cdr-text modifier="eyebrow-100">
        body strong
      </cdr-text>
      <cdr-text
        v-for="strongaragraph in paragraphs"
        :key="strongaragraph"
        :modifier="`body--strong-${strongaragraph}`"
      >
        body--strong-{{ paragraph }}: <br> Lorem ipsum dolor sit amet, orci tristique enim condimentum pellentesque amet
        congue. Suspendisse pulvinar. Consectetuer curabitur id, laoreet dolor sapien libero,
        donec risus magna erat pede massa montes, lacinia pede venenatis luctus, fringilla nulla
        mollis praesent viverra. Ligula ipsum. Integer sed, sem nullam nibh sed suscipit quisque
        vestibulum.
      </cdr-text>
    </div>
    <cdr-text modifier="eyebrow-100">
      Utility
    </cdr-text>
    <div data-backstop="utility">
      <cdr-text
        v-for="utility in utilities"
        :key="utility"
        :modifier="`utility-${utility}`"
      >
        utility-{{ utility }}: <br> Lorem ipsum dolor sit amet, orci tristique enim condimentum pellentesque amet
        congue. Suspendisse pulvinar. Consectetuer curabitur id, laoreet dolor sapien libero,
        donec risus magna erat pede massa montes, lacinia pede venenatis luctus, fringilla nulla
        mollis praesent viverra. Ligula ipsum. Integer sed, sem nullam nibh sed suscipit quisque
        vestibulum.
      </cdr-text>

      <cdr-text modifier="eyebrow-100">
        Utility strong
      </cdr-text>
      <cdr-text
        v-for="utilitystrong in utilities"
        :key="utilitystrong"
        :modifier="`utility--strong-${utilitystrong}`"
      >
        utility--strong-{{ utilitystrong }}: <br> Lorem ipsum dolor sit amet, orci tristique enim condimentum pellentesque amet
        congue. Suspendisse pulvinar. Consectetuer curabitur id, laoreet dolor sapien libero,
        donec risus magna erat pede massa montes, lacinia pede venenatis luctus, fringilla nulla
        mollis praesent viverra. Ligula ipsum. Integer sed, sem nullam nibh sed suscipit quisque
        vestibulum.
      </cdr-text>

      <cdr-text modifier="eyebrow-100">
        Utility serif
      </cdr-text>
      <cdr-text
        v-for="utilityserif in utilities"
        :key="utilityserif"
        :modifier="`utility--serif-${utilityserif}`"
      >
        utility--serif-{{ utilityserif }}: <br> Lorem ipsum dolor sit amet, orci tristique enim condimentum pellentesque amet
        congue. Suspendisse pulvinar. Consectetuer curabitur id, laoreet dolor sapien libero,
        donec risus magna erat pede massa montes, lacinia pede venenatis luctus, fringilla nulla
        mollis praesent viverra. Ligula ipsum. Integer sed, sem nullam nibh sed suscipit quisque
        vestibulum.
      </cdr-text>

      <cdr-text modifier="eyebrow-100">
        Utility serif strong
      </cdr-text>
      <cdr-text
        v-for="utilityserifstrong in utilities"
        :key="utilityserifstrong"
        :modifier="`utility--serif--strong-${utilityserifstrong}`"
      >
        utility--serif--strong-{{ utilityserifstrong }}: <br> Lorem ipsum dolor sit amet, orci tristique enim condimentum pellentesque amet
        congue. Suspendisse pulvinar. Consectetuer curabitur id, laoreet dolor sapien libero,
        donec risus magna erat pede massa montes, lacinia pede venenatis luctus, fringilla nulla
        mollis praesent viverra. Ligula ipsum. Integer sed, sem nullam nibh sed suscipit quisque
        vestibulum.
      </cdr-text>
    </div>
    <cdr-text modifier="eyebrow-100">
      Utility serif in italic
    </cdr-text>
    <div data-backstop="varianttest">
      <cdr-text
        v-for="utilityserifstrong in utilities"
        :key="utilityserifstrong"
        :modifier="`utility--serif--strong-${utilityserifstrong}`"
      >
        <cdr-text
          modifier="italic"
          tag="em"
        >
          cdr-text--italic wrapping utility--serif--strong-{{ utilityserifstrong }}: <br> Lorem ipsum dolor sit amet, orci tristique enim condimentum pellentesque amet
          congue. Suspendisse pulvinar. Consectetuer curabitur id, laoreet dolor sapien libero,
          donec risus magna erat pede massa montes, lacinia pede venenatis luctus, fringilla nulla
          mollis praesent viverra. Ligula ipsum. Integer sed, sem nullam nibh sed suscipit quisque
          vestibulum.
        </cdr-text>
      </cdr-text>

      <cdr-text modifier="eyebrow-100">
        body, strong, & italic
      </cdr-text>
      <cdr-text
        v-for="paragraph in paragraphs"
        :key="paragraph"
        :modifier="`body-${paragraph}`"
      >
        example of
        <cdr-text
          tag="strong"
          :modifier="`body--strong-${paragraph}`"
        >
          body--strong-{{ paragraph }},
        </cdr-text>
        <cdr-text
          tag="strong"
          modifier="strong"
        >
          strong,
        </cdr-text>
        <cdr-text
          tag="em"
          modifier="italic"
        >
          & italic
        </cdr-text>
        <cdr-text
          modifier="strong italic"
        >
          also a combo
        </cdr-text>
        in body--{{ paragraph }} copy.
      </cdr-text>

      <cdr-text modifier="eyebrow-100">
        utility, strong, & italic
      </cdr-text>
      <cdr-text
        v-for="utility in utilities"
        :key="utility"
        :modifier="`utility-${utility}`"
      >
        example of
        <cdr-text
          tag="strong"
          :modifier="`utility--strong-${utility}`"
        >
          utility--strong-{{ utility }},
        </cdr-text>
        <cdr-text
          tag="strong"
          modifier="strong"
        >
          strong,
        </cdr-text>
        <cdr-text
          tag="em"
          modifier="italic"
        >
          & italic
        </cdr-text>
        <cdr-text
          modifier="strong italic"
        >
          also a combo
        </cdr-text>
        in utility--{{ putility }} copy.
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
