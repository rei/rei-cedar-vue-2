<template>
  <div>
    <h2>Ratings</h2>
  
    <cdr-rating rating="0" count="10" modifier="large"></cdr-rating>
    <cdr-rating rating="3" count="100" modifier="large" compact></cdr-rating>

    <cdr-rating rating="1.2" count="77" modifier="medium"></cdr-rating>
    <cdr-rating rating="4.8" count="4561" modifier="medium" compact></cdr-rating>

    <cdr-rating rating="2" count="9" modifier="small"></cdr-rating>
    <cdr-rating rating="3.4" count="615" modifier="small" compact></cdr-rating>
  </div>
</template>

<script>
import cdrRating from '../cdrRating';

export default {
  name: 'rating',
  components: { cdrRating },
};
</script>

<style>

</style>
