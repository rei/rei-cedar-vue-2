<template>
  <div>
    <h2>
      Images
    </h2>
    <div data-backstop="image-aspect-ratio">
      <h3>
        Aspect Ratios (with landscape images)
      </h3>

      <ratios />
    </div>

    <div data-backstop="image-cropping">
      <cropping />
    </div>

    <div data-backstop="image-mods">
      <mods />
    </div>

    <div data-backstop="image-error">
      <h3>
        Image With Error
      </h3>
      <cdr-img
        src="localhost:8000/not-here.png"
        @error="handleError"
        alt="im an error!"
      />
      Error Handled: {{ hasError }}
    </div>

    <div data-backstop="image-standard">
      <h3>
        Standard image
      </h3>
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
