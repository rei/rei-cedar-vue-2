<template>
  <div>
    <h2>Ratings</h2>
  
    <cdr-rating rating="0"></cdr-rating>
    <cdr-rating rating="5" count="10"></cdr-rating>
    <cdr-rating :rating="1" :count="100"></cdr-rating>
    <cdr-rating :rating="1.5" count="70"></cdr-rating>
    <cdr-rating rating="3.7" :count="55"></cdr-rating>
    <cdr-rating rating="2.35" count="23"></cdr-rating>
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
