<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-medium">
      Ratings
    </cdr-text>

    <!-- Large Size -->
    <cdr-rating
      rating="0"
      count="0"
      modifier="large"
      content-priority="secondary"
      space="cdr-inset"

    />
    <cdr-rating
      rating="3"
      count="100"
      modifier="large"
      compact
    />
    <cdr-rating
      rating="3.66"
      count="1000"
      href="https://www.rei.com"
      modifier="large"
    />
    <div>
      <cdr-rating
        rating="3.66"
        count="1000"
        href="https://www.rei.com"
        modifier="large"
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
      modifier="small"
    />
    <cdr-rating
      rating="3.444412321"
      count="615"
      modifier="small"
      compact
    />
    <cdr-rating
      rating="3"
      count="100"
      href="https://www.rei.com"
      modifier="small"
    />
  </div>
</template>

<script>
import Components from 'componentsdir/_index';
import CdrRating from '../CdrRating';

export default {
  name: 'Rating',
  components: {
    ...Components,
    CdrRating,
  },
};
</script>

<style>

</style>
