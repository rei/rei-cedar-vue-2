<template>
  <div>
    <h3>Cropping (with landscape images)</h3>
    <cdr-row
      cols="1"
      cols-md="3"
    >
      <cdr-col>
        <div>
          <p>Left</p>
          <cdr-img
            ratio="square"
            cover
            crop="left"
            alt="crop left"
            src="http://placehold.it/1920x1080"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>Center</p>
          <cdr-img
            ratio="square"
            cover
            crop="x-center"
            alt="crop x-center"
            src="http://placehold.it/1920x1080"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>Right</p>
          <cdr-img
            ratio="square"
            cover
            crop="right"
            alt="crop right"
            src="http://placehold.it/1920x1080"
          />
        </div>
      </cdr-col>
    </cdr-row>

    <h3>Cropping (with portrait images)</h3>
    <cdr-row
      cols="1"
      cols-md="3"
    >
      <cdr-col>
        <div>
          <p>Top</p>
          <cdr-img
            ratio="square"
            cover
            crop="top"
            alt="crop top"
            src="http://placehold.it/1080x1920"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>Center</p>
          <cdr-img
            ratio="square"
            cover
            crop="y-center"
            alt="crop y-center"
            src="http://placehold.it/1080x1920"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>Bottom</p>
          <cdr-img
            ratio="square"
            cover
            crop="bottom"
            alt="crop bottom"
            src="http://placehold.it/1080x1920"
          />
        </div>
      </cdr-col>
    </cdr-row>

    <h3>Cropping (combinations)</h3>
    <cdr-row justify="center">
      <cdr-col span="9">
        <div>
          <p>Reference Image</p>
          <cdr-img
            alt="reference image"
            :src="testImage"
          />
        </div>
      </cdr-col>
    </cdr-row>
    <cdr-row
      cols="1"
      cols-md="3"
    >
      <cdr-col>
        <div>
          <p>top, left</p>
          <cdr-img
            ratio="16-9"
            crop="top left"
            alt="crop top left"
            :src="testImage"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>top, x-center</p>
          <cdr-img
            ratio="16-9"
            crop="top x-center"
            alt="crop top x-center"
            :src="testImage"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>top, right</p>
          <cdr-img
            ratio="16-9"
            crop="top right"
            alt="crop top right"
            :src="testImage"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>y-center, left</p>
          <cdr-img
            ratio="16-9"
            crop="y-center left"
            alt="crop y-center left"
            :src="testImage"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>y-center, x-center</p>
          <cdr-img
            ratio="16-9"
            crop="y-center x-center"
            alt="crop y-center x-center"
            :src="testImage"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>y-center, right</p>
          <cdr-img
            ratio="16-9"
            crop="y-center right"
            alt="crop y-center right"
            :src="testImage"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>bottom, left</p>
          <cdr-img
            ratio="16-9"
            crop="bottom left"
            alt="crop bottom left"
            :src="testImage"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>bottom, x-center</p>
          <cdr-img
            ratio="16-9"
            crop="bottom x-center"
            alt="crop bottom x-center"
            :src="testImage"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>bottom, right</p>
          <cdr-img
            ratio="16-9"
            crop="bottom right"
            alt="crop bottom right"
            :src="testImage"
          />
        </div>
      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
import testImage from 'Assets/test-image.jpeg';
import Components from 'Components/_index';

export default {
  name: 'Cropping',
  components: Components,
  data() {
    return {
      testImage,
    };
  },
};
</script>
