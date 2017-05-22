<template>
  <div>
    <h3>Image modifiers</h3>
    <cdr-row :cols="2" :colsMd="4">
      <cdr-col>
        <div>
          <p>Responsive</p>
          <cdr-img ratio="4-3" :modifier="['responsive']" alt="cdr-img example" src="http://placehold.it/200x200"></cdr-img>
          <cdr-img :modifier="['responsive']" alt="cdr-img example" src="http://placehold.it/200x200"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>Rounded</p>
          <cdr-img ratio="4-3" :modifier="['rounded']" alt="cdr-img example" src="http://placehold.it/200x200"></cdr-img>
          <cdr-img :modifier="['rounded']" alt="cdr-img example" src="http://placehold.it/350x150"></cdr-img>
          <cdr-img :modifier="['rounded']" alt="cdr-img example" src="http://placehold.it/200x200"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>circle</p>
          <cdr-img ratio="4-3" :modifier="['circle']" alt="cdr-img example" src="http://placehold.it/200x200"></cdr-img>
          <cdr-img :modifier="['circle']" alt="cdr-img example" src="http://placehold.it/350x150"></cdr-img>
          <cdr-img :modifier="['circle']" alt="cdr-img example" src="http://placehold.it/200x200"></cdr-img>
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>thumbnail</p>
          <cdr-img ratio="4-3" :modifier="['thumbnail']" alt="cdr-img example" src="http://placehold.it/200x200"></cdr-img>
          <cdr-img :modifier="['thumbnail']" alt="cdr-img example" src="http://placehold.it/350x150"></cdr-img>
          <cdr-img :modifier="['thumbnail']" alt="cdr-img example" src="http://placehold.it/200x200"></cdr-img>
        </div>
      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
import Components from '../../../components/_index';

export default {
  name: 'mods',
  components: Components,
};
</script>


<style scoped>
  .cdr-media-frame {
    background-color: lightblue;
  }
</style>
