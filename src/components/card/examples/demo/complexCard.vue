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
        <div class="inset">
          <cdr-link
            class="cdr-card__link"
            href="#foo"
          >
            <h2>
              Complex Card Title
            </h2>
          </cdr-link>
          <cdr-rating
            rating="4.2"
            count="12"
            size="small"
          />
          <cdr-text class="cdr-text-dev--body-300">
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
