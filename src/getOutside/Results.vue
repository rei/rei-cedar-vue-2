<template>
  <div class="cdr-container-fluid">
    <cdr-row :cols="2" :cols-md="4" gutter="none">
      <cdr-col v-for="result in results" :key="result.id">

          <cdr-media-object
            :img-src="result.photo.medium.url"
            img-ratio="square"
            img-cover
            img-alt="Testing screen reader"
            modifier="overlay"
          >
            <p>{{result.user.username}}</p>
          </cdr-media-object>
          
      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
import * as Components from '../components/_index';

const results = require('./resultsData');

export default {
  name: 'go-results',
  components: Components,
  data() {
    return results;
  },
};
</script>