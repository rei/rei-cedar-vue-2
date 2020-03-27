<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
    >
      Images
    </cdr-text>
    <div data-backstop="image-aspect-ratio">
      <cdr-text
        tag="h3"
        modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
      >
        Aspect Ratios (with landscape images)
      </cdr-text>

      <ratios />
    </div>

    <div data-backstop="image-cropping">
      <cropping />
    </div>

    <div data-backstop="image-mods">
      <mods />
    </div>


    <div data-backstop="image-error">
      <cdr-text
        tag="h3"
        modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
      >
        Image With Error
      </cdr-text>
      <cdr-img
        src="localhost:8000/not-here.png"
        @error="handleError"
        alt="im an error!"
      />
      Error Handled: {{ hasError }}
    </div>

    <div data-backstop="image-standard">
      <cdr-text
        tag="h3"
        modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
      >
        Standard image
      </cdr-text>
      <cdr-img
        alt="ratio standard"
        src="http://placehold.it/200x200"
      />
      <cdr-img
        alt="standard landscape"
        src="http://placehold.it/350x150"
      />
      <cdr-img
        alt="standard portrait"
        src="http://placehold.it/150x350"
      />
    </div>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';
import ratios from 'componentsdir/image/examples/demos/Ratios';
import cropping from 'componentsdir/image/examples/demos/Cropping';
import mods from 'componentsdir/image/examples/demos/Mods';

export default {
  name: 'Images',
  components: {
    ...Components,
    ratios,
    cropping,
    mods,
  },
  data() {
    return {
      hasError: false,
    };
  },
  methods: {
    handleError() {
      this.hasError = true;
    },
  },
};
</script>
