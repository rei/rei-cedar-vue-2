<template>
  <!-- eslint-disable max-len -->
  <div>
    <h2>scrollGradient</h2>
    <h3>vertical text example</h3>
    <cdr-scroll-gradient
      :vertical="true"
      :background-color="backgroundColor"
      style="width: 250px; height: 250px;"
    >
      <!-- NOTE: need to wrap content in a single element. Wrapper element must know its actual height/width. -->
      <div>
        We'll put a happy little bush here. Everything is happy if you choose to make it that way. Everybody's different. Trees are different. Let them all be individuals. Just let this happen. We just let this flow right out of our minds. It just happens - whether or not you worried about it or tried to plan it. We'll put a happy little bush here. Everything is happy if you choose to make it that way. Everybody's different. Trees are different. Let them all be individuals. Just let this happen. We just let this flow right out of our minds. It just happens - whether or not you worried about it or tried to plan it. Trees get lonely too, so we'll give him a little friend. Painting should do one thing. It should put happiness in your heart. This is the way you take out your frustrations. At home you have unlimited time. Maybe we got a few little happy bushes here, just covered with snow. Put your feelings into it, your heart, it's your world.
      </div>
    </cdr-scroll-gradient>
    <br><br>

    <h3>vertical elements example</h3>
    <cdr-scroll-gradient
      :vertical="true"
      :background-color="backgroundColor"
      style="width: 100px; height: 250px;"
    >
      <div>
        <div class="square">
          scrolly
        </div>
        <div class="square">
          time
        </div>
        <div class="square">
          scroll
        </div>
        <div class="square">
          the
        </div>
        <div class="square">
          things
        </div>
      </div>
    </cdr-scroll-gradient>
    <br><br>
    <h3>horizontal text example</h3>
    <cdr-scroll-gradient
      :horizontal="true"
      :background-color="backgroundColor"
      style="width: 250px;"
    >
      <!-- NOTE: need to set explicit width for pure text -->
      <div style="width: 500px;">
        We'll put a happy little bush here. Everything is happy if you choose to make it that way. Everybody's different. Trees are different. Let them all be individuals. Just let this happen. We just let this flow right out of our minds. It just happens - whether or not you worried about it or tried to plan it. We'll put a happy little bush here. Everything is happy if you choose to make it that way. Everybody's different. Trees are different. Let them all be individuals. Just let this happen. We just let this flow right out of our minds. It just happens - whether or not you worried about it or tried to plan it. Trees get lonely too, so we'll give him a little friend. Painting should do one thing. It should put happiness in your heart. This is the way you take out your frustrations. At home you have unlimited time. Maybe we got a few little happy bushes here, just covered with snow. Put your feelings into it, your heart, it's your world.
      </div>
    </cdr-scroll-gradient>
    <br>
    <cdr-scroll-gradient
      :horizontal="true"
      :background-color="backgroundColor"
      style="width: 250px;"
    >
      <!-- NOTE: max-content for 1 liner -->
      <div style="width: max-content;">
        Trees get lonely too, so we'll give him a little friend. Painting should do one thing. It should put happiness in your heart.
      </div>
    </cdr-scroll-gradient>
    <br><br>

    <h3>horizontal elements example</h3>
    <cdr-scroll-gradient
      :horizontal="true"
      :background-color="backgroundColor"
      style="width: 250px;"
    >
      <!-- NOTE: need to set explicit width or max-content here. float: left means container has width of 0. flex? -->
      <div style="width: max-content;">
        <div class="square">
          la
        </div>
        <div class="square">
          la
        </div>
        <div class="square">
          la,
        </div>
        <div class="square">
          la la
        </div>
        <div class="square">
          la la la
        </div>
      </div>
    </cdr-scroll-gradient>

    <br><br>

    <h3>multi-dimensional text example</h3>
    <cdr-scroll-gradient
      :vertical="true"
      :horizontal="true"
      :background-color="backgroundColor"
      style="width: 250px; height: 250px;"
    >
      <div style="width: 500px;">
        I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Everyone wants to enjoy the good parts - but you have to build the framework first.We'll put a happy little bush here. Everything is happy if you choose to make it that way. Everybody's different. Trees are different. Let them all be individuals. Just let this happen. We just let this flow right out of our minds. It just happens - whether or not you worried about it or tried to plan it. We'll put a happy little bush here. Everything is happy if you choose to make it that way. Everybody's different. Trees are different. Let them all be individuals. Just let this happen. We just let this flow right out of our minds. It just happens - whether or not you worried about it or tried to plan it. Trees get lonely too, so we'll give him a little friend. Painting should do one thing. It should put happiness in your heart. This is the way you take out your frustrations. At home you have unlimited time. Maybe we got a few little happy bushes here, just covered with snow. Put your feelings into it, your heart, it's your world. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Everyone wants to enjoy the good parts - but you have to build the framework first.
      </div>
    </cdr-scroll-gradient>
  </div>
</template>

<script>
import {
  CdrColorBackgroundPrimary,
  CdrColorBackgroundSecondary,
  CdrColorBackgroundSuccess,
  CdrColorBackgroundInfo,
  CdrColorBackgroundWarning,
  CdrColorBackgroundError,
} from '@rei/cdr-tokens';
import * as Components from 'srcdir/index';

export default {
  name: 'ScrollGradient',
  components: {
    ...Components,
  },
  data() {
    return {
      backgroundColor: CdrColorBackgroundPrimary,
    };
  },
  // TODO: make a dev-only background mixin for this logic? also exists in tabs.
  watch: {
    $route(to) {
      this.setBackground(to.query.background);
    },
  },
  mounted() {
    this.setBackground(this.$router.currentRoute.query.background);
  },
  methods: {
    setBackground(background) {
      switch (background) {
        case 'primary':
          this.backgroundColor = CdrColorBackgroundPrimary;
          break;
        case 'secondary':
          this.backgroundColor = CdrColorBackgroundSecondary;
          break;
        case 'success':
          this.backgroundColor = CdrColorBackgroundSuccess;
          break;
        case 'info':
          this.backgroundColor = CdrColorBackgroundInfo;
          break;
        case 'warning':
          this.backgroundColor = CdrColorBackgroundWarning;
          break;
        case 'error':
          this.backgroundColor = CdrColorBackgroundError;
          break;
        default:
          this.backgroundColor = CdrColorBackgroundPrimary;
      }
    },
  },
};
</script>

<style>
.square {
  width: 100px;
  height: 100px;
  display: inline-block;
  border: 1px solid black;
  margin: 0;
  text-align: center;
  padding: 25px;
  background-color: lightgray;
  border-radius: 5px;
}
</style>
