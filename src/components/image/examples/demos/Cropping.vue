<template>
  <div>
    <cdr-text
      tag="h3"
      modifier="heading-small"
    >
      Cropping (with landscape images)
    </cdr-text>
    <cdr-row
      cols="1 3@md"
    >
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
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
      </cdr-col>
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            Center
          </cdr-text>
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
          <cdr-text modifier="subheading">
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
      </cdr-col>
    </cdr-row>

    <cdr-text
      tag="h3"
      modifier="heading-small"
    >
      Cropping (with portrait images)
    </cdr-text>
    <cdr-row
      cols="1 3@md"
    >
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
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
      </cdr-col>
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            Center
          </cdr-text>
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
          <cdr-text modifier="subheading">
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
      </cdr-col>
    </cdr-row>

    <cdr-text
      tag="h3"
      modifier="heading-small"
    >
      Cropping (combinations)
    </cdr-text>
    <cdr-row justify="center">
      <cdr-col span="9">
        <div>
          <cdr-text modifier="subheading">
            Reference Image
          </cdr-text>
          <cdr-img
            alt="reference image"
            :src="testImage"
          />
        </div>
      </cdr-col>
    </cdr-row>
    <cdr-row
      cols="1 3@md"
    >
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            top, left
          </cdr-text>
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
          <cdr-text modifier="subheading">
            top, x-center
          </cdr-text>
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
          <cdr-text modifier="subheading">
            top, right
          </cdr-text>
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
          <cdr-text modifier="subheading">
            y-center, left
          </cdr-text>
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
          <cdr-text modifier="subheading">
            y-center, x-center
          </cdr-text>
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
          <cdr-text modifier="subheading">
            y-center, right
          </cdr-text>
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
          <cdr-text modifier="subheading">
            bottom, left
          </cdr-text>
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
          <cdr-text modifier="subheading">
            bottom, x-center
          </cdr-text>
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
          <cdr-text modifier="subheading">
            bottom, right
          </cdr-text>
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
import testImage from 'assetsdir/test-image.jpeg';
import Components from 'componentsdir/_index';

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
