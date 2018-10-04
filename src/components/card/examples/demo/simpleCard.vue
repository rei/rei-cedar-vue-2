<template>
  <div class="temp">
    <cdr-card
      :card-img-props="{
        'src':'https://picsum.photos/200/300',
        'ratio': '16-9',
        'cover': true,
        'alt': 'this is the alt text for your image'
      }"
    >
      <cdr-lead
        :rating-props="{
          'rating':'5',
          'count':'2',
          'href':'https://www.rei.com',
        }"
        heading-level="4"
        :snapshot="['7.5 mi', 'out & back', '286 ft Ele Gain']"
        url="https://www.rei.com"
      >
        <span slot="category"> some other place </span>
        <span slot="heading"> bob </span>
      </cdr-lead>
    </cdr-card>
  </div>
</template>
<script>
import Components from 'componentsdir/_index';
import Compositions from 'compositionsdir/_index';

export default {
  name: 'SimpleCard',
  components: {
    ...Components,
    ...Compositions,
  },
};
</script>
<style>
.temp {
  margin: 60px;
  background: #c2c2c2;
}

.temp article {
  margin: 60px;
}
</style>
