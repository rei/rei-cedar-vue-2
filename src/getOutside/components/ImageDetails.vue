<template>
  <div>
    <p class="cdr-inset share">share</p>
    <cdr-media-object modifier="center" :img-src="profileImage" img-modifier="circle">
      <div class="imageInfo cdr-inset">
        <p class="imageInfo__username">{{username}}</p>
        <p class="imageInfo__location">{{location}}</p>
      </div>
    </cdr-media-object>
    <p>{{caption}}</p>
  </div>
</template>

<script>
import Components from '../../components/_index';

export default {
  name: 'go-image-details',
  components: Components,
  props: ['profileImage', 'username', 'location', 'caption'],
};
</script>

<style>
.imageInfo {
  &__username {
    font-weight: bold;
    margin: 0;
  }

  &__location {
    margin: 0;
  }
}

.share {
  border-bottom: 1px solid gray;
}
</style>
