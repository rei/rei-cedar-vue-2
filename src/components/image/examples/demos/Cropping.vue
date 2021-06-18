<template>
  <div>
    <h3>
      Cropping (with landscape images)
    </h3>
    <cdr-grid style="grid-template-columns: 1fr 1fr 1fr; 1fr">
      <div>
        <cdr-text class="cdr-text-dev--subheading-sans-300">
          Left
        </cdr-text>
        <cdr-img
          ratio="square"
          cover
          crop="left"
          alt="crop left"
          src="http://placehold.it/1920x1080"
        />
      </div>
      <div>
        <cdr-text class="cdr-text-dev--subheading-sans-300">
          Center
        </cdr-text>
        <cdr-img
          ratio="square"
          cover
          crop="center"
          alt="crop x-center"
          src="http://placehold.it/1920x1080"
        />
      </div>
      <div>
        <cdr-text class="cdr-text-dev--subheading-sans-300">
          Right
        </cdr-text>
        <cdr-img
          ratio="square"
          cover
          crop="right"
          alt="crop right"
          src="http://placehold.it/1920x1080"
        />
      </div>
    </cdr-grid>

    <h3>
      Cropping (with portrait images)
    </h3>

    <cdr-grid style="grid-template-columns: 1fr 1fr 1fr; 1fr">

      <div>
        <cdr-text class="cdr-text-dev--subheading-sans-300">
          Top
        </cdr-text>
        <cdr-img
          ratio="square"
          cover
          crop="top"
          alt="crop top"
          src="http://placehold.it/1080x1920"
        />
      </div>
      <div>
        <cdr-text class="cdr-text-dev--subheading-sans-300">
          Center
        </cdr-text>
        <cdr-img
          ratio="square"
          cover
          crop="center"
          alt="crop y-center"
          src="http://placehold.it/1080x1920"
        />
      </div>
      <div>
        <cdr-text class="cdr-text-dev--subheading-sans-300">
          Bottom
        </cdr-text>
        <cdr-img
          ratio="square"
          cover
          crop="bottom"
          alt="crop bottom"
          src="http://placehold.it/1080x1920"
        />
      </div>
    </cdr-grid>

    <h3>
      Cropping (combinations)
    </h3>
    <cdr-grid style="grid-template-columns: 1fr 1fr 1fr; 1fr">
      <div>
        <cdr-text class="cdr-text-dev--subheading-sans-300">
          Reference Image
        </cdr-text>
        <cdr-img
          alt="reference image"
          :src="testImage"
        />
      </div>

      <div>
        <cdr-text class="cdr-text-dev--subheading-sans-300">
          top, left
        </cdr-text>
        <cdr-img
          ratio="16-9"
          crop="top left"
          alt="crop top left"
          :src="testImage"
        />
      </div>
      <div>
        <cdr-text class="cdr-text-dev--subheading-sans-300">
          top, x-center
        </cdr-text>
        <cdr-img
          ratio="16-9"
          crop="top center"
          alt="crop top x-center"
          :src="testImage"
        />
      </div>
      <div>
        <cdr-text class="cdr-text-dev--subheading-sans-300">
          top, right
        </cdr-text>
        <cdr-img
          ratio="16-9"
          crop="top right"
          alt="crop top right"
          :src="testImage"
        />
      </div>
      <div>
        <cdr-text class="cdr-text-dev--subheading-sans-300">
          y-center, left
        </cdr-text>
        <cdr-img
          ratio="16-9"
          crop="center left"
          alt="crop y-center left"
          :src="testImage"
        />
      </div>
      <div>
        <cdr-text class="cdr-text-dev--subheading-sans-300">
          y-center, x-center
        </cdr-text>
        <cdr-img
          ratio="16-9"
          crop="center center"
          alt="crop y-center x-center"
          :src="testImage"
        />
      </div>
      <div>
        <cdr-text class="cdr-text-dev--subheading-sans-300">
          y-center, right
        </cdr-text>
        <cdr-img
          ratio="16-9"
          crop="center right"
          alt="crop y-center right"
          :src="testImage"
        />
      </div>
      <div>
        <cdr-text class="cdr-text-dev--subheading-sans-300">
          bottom, left
        </cdr-text>
        <cdr-img
          ratio="16-9"
          crop="left bottom"
          alt="crop bottom left"
          :src="testImage"
        />
      </div>
      <div>
        <cdr-text class="cdr-text-dev--subheading-sans-300">
          bottom, x-center
        </cdr-text>
        <cdr-img
          ratio="16-9"
          crop="center bottom"
          alt="crop bottom x-center"
          :src="testImage"
        />
      </div>
      <div>
        <cdr-text class="cdr-text-dev--subheading-sans-300">
          bottom, right
        </cdr-text>
        <cdr-img
          ratio="16-9"
          crop="right bottom"
          alt="crop bottom right"
          :src="testImage"
        />
      </div>
    </cdr-grid>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Cropping',
  components: Components,
  data() {
    return {
      testImage: 'test-image.png',
    };
  },
};
</script>
