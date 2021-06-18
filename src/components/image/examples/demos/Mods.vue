<template>
  <div>
    <h3>
      Image modifiers
    </h3>
    <cdr-grid style="grid-template-columns: 1fr 1fr;">
      <div>
        <cdr-text class="cdr-text-dev--subheading-sans-300">
          Responsive
        </cdr-text>
        <cdr-img
          class="cdr-img-test"
          ratio="4-3"
          modifier="responsive"
          loading="lazy"
          alt="ratio responsive"
          src="http://placehold.it/200x200"
        />
        <cdr-img
          class="cdr-img-test"
          modifier="responsive"
          alt="standard responsive"
          src="http://placehold.it/200x200"
        />
      </div>
      <div>
        <cdr-text class="cdr-text-dev--subheading-sans-300">
          Rounded
        </cdr-text>
        <cdr-img
          class="cdr-img-test"
          ratio="4-3"
          radius="rounded"
          alt="ratio rounded"
          src="http://placehold.it/200x200"
        />
        <cdr-img
          class="cdr-img-test"
          radius="rounded"
          alt="landscape rounded"
          src="http://placehold.it/350x150"
        />
        <cdr-img
          class="cdr-img-test"
          radius="rounded"
          alt="square rounded"
          src="http://placehold.it/200x200"
        />
      </div>
      <div>
        <cdr-text class="cdr-text-dev--subheading-sans-300">
          circle
        </cdr-text>
        <cdr-img
          class="cdr-img-test"
          ratio="4-3"
          radius="circle"
          alt="ratio circle"
          src="http://placehold.it/200x200"
        />
        <cdr-img
          class="cdr-img-test"
          radius="circle"
          alt="landscape circle"
          src="http://placehold.it/350x150"
        />
        <cdr-img
          class="cdr-img-test"
          radius-="circle"
          alt="square circle"
          src="http://placehold.it/200x200"
        />
      </div>
    </cdr-grid>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Mods',
  components: Components,
};
</script>
