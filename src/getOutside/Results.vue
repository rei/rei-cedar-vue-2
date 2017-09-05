<template>
  <div class="cdr-container-fluid">
    <cdr-row :cols="2" :cols-md="4" gutter="none">
      <cdr-col v-for="result in results" :key="result.id">
        <cdr-card>

          <cdr-media-object
            :img-src="result.photo.medium.url"
            img-ratio="square"
            img-crop="y-center x-center"
            modifier="overlay"
          >
            <p>{{result.user.username}}</p>
          </cdr-media-object>
        </cdr-card>
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