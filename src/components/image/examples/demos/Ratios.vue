<template>
  <cdr-grid style="grid-template-columns: 1fr 1fr 1fr 1fr;">
    <div>
      <cdr-text class="cdr-text-dev--subheading-sans-300">
        Square
      </cdr-text>
      <cdr-img
        class="cdr-img-test"
        ratio="square"
        alt="ratio square"
        src="http://placehold.it/300x100"
      />
    </div>
    <div>
      <cdr-text class="cdr-text-dev--subheading-sans-300">
        Auto (min-height)
      </cdr-text>
      <cdr-img
        class="cdr-img-test"
        ratio="auto"
        crop="center"
        cover
        alt="ratio auto"
        style="min-height: 100px"
        src="http://placehold.it/300x100"
      />
    </div>

    <div>
      <cdr-text class="cdr-text-dev--subheading-sans-300">
        Auto filling container
      </cdr-text>
      <div style="width: 100%; height: 100%">
        <cdr-img
          class="cdr-img-test"
          ratio="auto"
          crop="center"
          cover
          alt="ratio auto"
          style="width: 100%; height: 100%;"
          src="http://placehold.it/300x100"
        />
      </div>
    </div>

    <div>
      <cdr-text class="cdr-text-dev--subheading-sans-300">
        Auto (grid)
      </cdr-text>
      <cdr-grid style="grid-template-columns: 1fr 2fr">
        <cdr-img
          class="cdr-img-test"
          ratio="auto"
          crop="center"
          cover
          alt="ratio auto"
          src="http://placehold.it/300x100"
        />
        <div style="height: 100px">
          content goes here
        </div>
      </cdr-grid>
    </div>
    <div>
      <cdr-text class="cdr-text-dev--subheading-sans-300">
        1-2
      </cdr-text>
      <cdr-img
        class="cdr-img-test"
        ratio="1-2"
        alt="ratio 1-2"
        src="http://placehold.it/300x100"
      />
    </div>
    <div>
      <cdr-text class="cdr-text-dev--subheading-sans-300">
        2-3
      </cdr-text>
      <cdr-img
        class="cdr-img-test"
        ratio="2-3"
        alt="ratio 2-3"
        src="http://placehold.it/300x100"
      />
    </div>
    <div>
      <cdr-text class="cdr-text-dev--subheading-sans-300">
        3-4
      </cdr-text>
      <cdr-img
        class="cdr-img-test"
        ratio="3-4"
        alt="ratio 3-4"
        src="http://placehold.it/300x100"
      />
    </div>
    <div>
      <cdr-text class="cdr-text-dev--subheading-sans-300">
        9-16
      </cdr-text>
      <cdr-img
        class="cdr-img-test"
        ratio="9-16"
        alt="ratio 9-16"
        src="http://placehold.it/300x100"
      />
    </div>
    <div>
      <cdr-text class="cdr-text-dev--subheading-sans-300">
        2-1
      </cdr-text>
      <cdr-img
        class="cdr-img-test"
        ratio="2-1"
        alt="ratio 2-1"
        src="http://placehold.it/300x100"
      />
    </div>
    <div>
      <cdr-text class="cdr-text-dev--subheading-sans-300">
        3-2
      </cdr-text>
      <cdr-img
        class="cdr-img-test"
        ratio="3-2"
        alt="ratio 3-2"
        src="http://placehold.it/300x100"
      />
    </div>
    <div>
      <cdr-text class="cdr-text-dev--subheading-sans-300">
        4-3
      </cdr-text>
      <cdr-img
        class="cdr-img-test"
        ratio="4-3"
        alt="ratio 4-3"
        src="http://placehold.it/300x100"
      />
    </div>
    <div>
      <cdr-text class="cdr-text-dev--subheading-sans-300">
        16-9
      </cdr-text>
      <cdr-img
        class="cdr-img-test"
        ratio="16-9"
        alt="ratio 16-9"
        src="http://placehold.it/300x100"
      />
    </div>
  </cdr-grid>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Ratio',
  components: Components,
};
</script>

<style>
  .cdr-img-test {
    background-color: lightblue;
  }
</style>
