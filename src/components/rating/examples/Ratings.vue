<template>
  <div>
    <h2>Ratings</h2>

    <!-- Large Size -->
    <cdr-rating
      rating="0"
      count="0"
      modifier="large"
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
      theme="light-secondary"
    />
    <cdr-rating
      rating="3"
      count="100"
      href="https://www.rei.com"
      modifier="small"
      theme="light"
    />
  </div>
</template>

<script>
import CdrRating from '../CdrRating';

export default {
  name: 'Rating',
  components: { CdrRating },
};
</script>

<style>

</style>
