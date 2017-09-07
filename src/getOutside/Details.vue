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

  <div class="banner">
    <p>Find your own adventure</p>
  </div>

  <div class="cdr-container">
    <p>Activity cards</p>
    <cdr-row nowrap>
      <cdr-col span="11" span-sm="4" v-for="(c, index) in cData" :key="index">
        <cdr-card-activity
          :media="c.image"
          :label="c.activity"
          :title="c.title"
          title-url="http://rei.com"
          :location="c.location"
          :snapshot="c.details"
          :rating="c.rating"
          :count="c.count"
          ></cdr-card-activity>
      </cdr-col>
    </cdr-row>

    <p class="cdr-inset">Classes and events</p>

    <p>EA cards</p>
    <cdr-row nowrap>
      <cdr-col span="11" span-sm="3" v-for="(c, index) in cData" :key="index">
        <cdr-card-activity
          :media="c.image"
          :label="c.activity"
          :title="c.title"
          title-url="http://rei.com"
          :location="c.location"
          :snapshot="c.details"
          :rating="c.rating"
          :count="c.count"
          ></cdr-card-activity>
      </cdr-col>
    </cdr-row>
  </div>

  <div class="keepExploring">
    <p class="keepExploring__title">Keep exploring</p>

    <div class="cdr-container-fluid">
      <cdr-row gutter="xxs" cols="2" cols-sm="4">
        <cdr-col v-for="(cat, index) in moreCats" :key="index">
          <a href="http://rei.com" class="imageTile">
            <cdr-media-object 
              img-class="imageTile__image"
              :img-src="cat.image" 
              img-ratio="square" 
              img-cover 
              img-alt="Some alt text" 
              modifier="overlay">
              <div class="imageTile__body">
                <div>
                  <p class="imageTile__title">{{cat.text}}</p>
                  <p class="imageTile__count">({{cat.count}})</p>
                </div>
              </div>
            </cdr-media-object>
          </a>
        </cdr-col>
      </cdr-row>
    </div>
  </div>

</div>
</template>

<script>
import * as Components from '../components/_index';
import * as Compositions from '../compositions/_index';
import imageDetails from './components/ImageDetails';

const CedarComps = Object.assign({}, Components, Compositions);

Object.assign(CedarComps, { goImageDetails: imageDetails });
const results = require('./resultsData').results;
const cardsData = require('./cardData').data;

export default {
  name: 'go-results',
  components: CedarComps,
  data() {
    return {
      image: results[0].photo.original.url,
      imageAlt: 'some descriptive alt text',
      profileImage: results[0].user.small_square.url,
      username: results[0].user.username,
      location: 'Fake Place, WA',
      caption: results[0].caption,
      cData: cardsData,
      moreCats: [
        {
          image: '//d28m5bx785ox17.cloudfront.net/v1/img/KVd_S3ZpKYQmxLp165Qc9AnShLSdLFafRn_D7OybSuA=/w/600',
          text: '#optoutside',
          count: '1,234',
        },
        {
          image: '//d28m5bx785ox17.cloudfront.net/v1/img/Nz0ndbC3BHlwbzDYo-aOFr71yiuu95GcDNmNtsz3DcM=/w/300',
          text: '#lakeserene',
          count: '1,234',
        },
        {
          image: '//d28m5bx785ox17.cloudfront.net/v1/img/KVd_S3ZpKYQmxLp165Qc9AnShLSdLFafRn_D7OybSuA=/w/600',
          text: '#optoutside',
          count: '1,234',
        },
        {
          image: '//d28m5bx785ox17.cloudfront.net/v1/img/jn-NIg2w3oF7WGVeHdqSaxs1A3ArwZjBatmbEP2KzyQ=/w/600',
          text: '#lakeserene',
          count: '1,234',
        },
      ],
    };
  },
};
</script>

<style>
.banner {
  text-align: center;
  padding: 16px;
  background-color: lightgray;
  margin: 16px 0;
}

.keepExploring {
  margin-top: 32px;
  border-top: 1px solid lightgray;

  &__title {
    text-align: center;
    margin: 32px 0;
  }
}

.imageTile {
  &:hover,
  &:focus,
  &:active {
    .imageTile__image {
      transform: scale(1.05);
    }

    .imageTile__title {
      text-decoration: underline;
    }
  }

  &__image {
    transition: transform 300ms;
  }

  &__body {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    background:
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0)
      );
  }

  &__title {
    font-size: 32px;
    text-shadow: 0 1px 0 black;
  }
}
</style>
