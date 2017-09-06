<template>
<div>
  <div class="cdr-container">
    <cdr-row justify="center">
      <cdr-col span="12" span-sm="5">
        <div>
          <cdr-img :src="image" :alt="imageAlt" modifier="responsive"></cdr-img>
        </div>
      </cdr-col>

      <cdr-col span="12" span-sm="5">
        <go-image-details :profile-image="profileImage" :username="username" :location="location" :caption="caption"></go-image-details>
      </cdr-col>
    </cdr-row>
  </div>

  <p>Find your own adventure</p>

  <div class="cdr-container">
    <cdr-row>
      <cdr-col></cdr-col>
    </cdr-row>
    <p>places cards</p>
    <p>Classes and events</p>
    <p>EA cards</p>
  </div>

  <p>Image tiles</p>

</div>
</template>

<script>
import * as Components from '../components/_index';
import imageDetails from './components/ImageDetails';

Object.assign(Components, { goImageDetails: imageDetails });
const results = require('./resultsData').results;

export default {
  name: 'go-results',
  components: Components,
  data() {
    return {
      image: results[0].photo.original.url,
      imageAlt: 'some descriptive alt text',
      profileImage: results[0].user.small_square.url,
      username: results[0].user.username,
      location: 'Fake Place, WA',
      caption: results[0].caption,
    };
  },
};
</script>


