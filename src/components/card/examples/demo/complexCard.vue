<template>
  <div>
    <cdr-card class="card-example">
      <section>
        <div>
          <cdr-img
            alt="card test image"
            src="test-image.png"
            modifier="responsive"
          />
        </div>
        <div class="cdr-space-inset-one-x">
          <cdr-text
            tag="h2"
            modifier="heading-serif-500"
          >
            Complex Card Title
          </cdr-text>
          <cdr-rating
            rating="4.2"
            count="12"
            size="small"
          />
          <cdr-text modifier="body-300">
            Card content
          </cdr-text>
        </div>
      </section>
    </cdr-card>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';


export default {
  name: 'ComplexCard',
  components: Components,
};
</script>

<style>
.card-example {
  max-width: 250px;
  width: 250px;
}
</style>
