<template>
  <cdr-row class="cdr-stack--lg temp">
    <cdr-col span="4">
      <cdr-text
        tag="h2"
        modifier="heading-small"
        class="cdr-text-right">
        Simple Card
      </cdr-text>
    </cdr-col>
    <cdr-col span="4">
      <cdr-card>
        <cdr-text
          tag="strong"
          modifier="heading-small"
        >
          Card as a wrapper
        </cdr-text>
        <cdr-text>
          This card is passed custom tags defined by a user and does not follow desing guidelines.
        </cdr-text>
      </cdr-card>
    </cdr-col>
    <cdr-col span="4" />
    <cdr-col span="4">
      <cdr-text
        tag="h2"
        modifier="heading-small"
        class="cdr-text-right">
        Card
      </cdr-text>
    </cdr-col>
    <cdr-col span="4">
      <cdr-card
        modifier="article"
      >
        <cdr-card-media
          media-space-class="cdr-inset-1-x"
          :card-img-props="{
            'src':'https://picsum.photos/200/300',
            'ratio': '16-9',
            'cover': true,
            'alt': 'this is the alt text for your image'
          }"
        />
      </cdr-card>
    </cdr-col>
    <cdr-col
      span="4"
      class="cdr-bg--dark"
    >
      <cdr-card
        modifier="article"
      >
        <cdr-card-media
          media-space-class="cdr-inset-1-x"
          :card-img-props="{
            'src':'https://picsum.photos/200/300',
            'ratio': '16-9',
            'cover': true,
            'alt': 'this is the alt text for your image'
          }"
        />
      </cdr-card>
    </cdr-col>
    <cdr-col span="4">
      <cdr-text
        tag="h2"
        modifier="heading-small"
        class="cdr-text-right">
        article Card with Card Intro
      </cdr-text>
    </cdr-col>
    <cdr-col span="4">
      <cdr-card
        modifier="article"
      >
        <cdr-card-media
          :card-img-props="{
            'src':'https://picsum.photos/200/300',
            'ratio': '16-9',
            'cover': true,
            'alt': 'this is the alt text for your image'
          }"
        />
        <cdr-card-intro
          :rating-props="{
            'rating':'3.5',
            'count':'2',
            'href':'https://www.rei.com',
          }"
          heading-level="4"
          :snapshot="['7.5 mi', 'out & back', '286 ft Ele Gain']"
          url="https://www.rei.com"
        >
          <span slot="category"> some other place </span>
          <span slot="heading"> bob </span>
        </cdr-card-intro>
      </cdr-card>
    </cdr-col>
  </cdr-row>
</template>
<script>
import Components from 'componentsdir/_index';

export default {
  name: 'SimpleCard',
  components: {
    ...Components,
  },
};
</script>
