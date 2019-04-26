<template>
  <div
    class="rating-reset"
    data-backstop="ratings"
  >
    <cdr-text
      tag="h2"
      modifier="heading-medium"
    >
      Ratings
    </cdr-text>

    <!-- Large Size -->
    <cdr-rating
      rating="0"
      count="0"
      size="large"
      content-priority="secondary"
      space="cdr-inset"
    />

    <cdr-rating
      rating="3"
      count="100"
      size="large"
      compact
    />
    <cdr-rating
      rating="3.66"
      count="1000"
      href="https://www.rei.com"
      size="large"
    />
    <div class="line-height-reset">
      <cdr-rating
        rating="3.66"
        count="1000"
        href="https://www.rei.com"
        size="large"
        compact
      />
    </div>

    <!-- Default Size -->
    <cdr-rating
      rating="1.2"
      count="77"
    />
    <cdr-rating
      rating="4.8"
      count="4561"
      compact
    />
    <cdr-rating
      rating="1.9"
      count="100"
      href="https://www.rei.com"
    />

    <!-- Small Size -->
    <cdr-rating
      rating="2"
      count="9"
      size="small"
    />
    <cdr-rating
      rating="3.444412321"
      count="615"
      size="small"
      compact
    />
    <cdr-rating
      rating="3"
      count="100"
      href="https://www.rei.com"
      size="small"
    />

    <!-- Responsive Size -->
    <cdr-text tag="h3">
      Responsive Growing
    </cdr-text>
    <cdr-rating
      rating="2"
      count="9"
      size="small@xs large@md large@lg"
    />
    <cdr-text tag="h3">
      Responsive Inverse
    </cdr-text>
    <cdr-rating
      rating="3"
      count="100"
      size="large@xs small@md small@lg"
    />
  </div>
</template>

<script>
import * as Components from 'componentsdir/_index';

export default {
  name: 'Rating',
  components: {
    ...Components,
  },
};
</script>

<style>
/** resets to protect example stylings unrelated to the component for consistent testing */
.rating-reset {
  font-size: 0;
}

.line-height-reset {
  line-height: 1;
}
</style>
