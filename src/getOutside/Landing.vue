<template>
  
  <div class="cdr-container-fluid">
    <!--Top Part-->
    <cdr-row cols="1" cols-sm="3" gutter="none">
      <cdr-col hide="down">
        <cdr-media-object img-class="imageTile__image" img-src="http://via.placeholder.com/350x150" img-ratio="square" img-cover img-alt="Some alt text" modifier="overlay">
        </cdr-media-object>
      </cdr-col>
      <cdr-col>
        <cdr-media-object img-class="imageTile__image" img-src="http://via.placeholder.com/350x150" img-ratio="square" img-cover img-alt="Some alt text" modifier="overlay">
          <p class="imageTile__title">Button to launch modal and stuff</p>
        </cdr-media-object>
      </cdr-col>
      <cdr-col hide="down">
        <cdr-media-object img-class="imageTile__image" img-src="http://via.placeholder.com/350x150" img-ratio="square" img-cover img-alt="Some alt text" modifier="overlay">
        </cdr-media-object>
      </cdr-col>
    </cdr-row>

    <!--Rest of categories-->
    <cdr-row gutter="xxs">
      <cdr-col v-for="(d, index) in tileData" 
        :span="sizeXS(index)" 
        :span-sm="sizeSM(index)" 
        :key="index">
        <a :href="d.url">
          <cdr-media-object 
            :img-src="d.image" 
            :img-ratio="ratioXS(index)"
            :ratio-sm="ratioSM(index)"
            img-cover 
            img-alt="Some alt text" 
            modifier="overlay">
            <div>
              <div>
                <p>{{d.text}}</p>
                <p>({{index}})</p>
              </div>
            </div>
          </cdr-media-object>
        </a>
      </cdr-col>
    </cdr-row>
  </div>

</template>

<script>
import Components from '../components/_index';
import * as Compositions from '../compositions/_index';

const CedarComps = Object.assign({}, Components, Compositions);

const genData = () => {
  const d = [];
  for (let i = 0; i < 20; i += 1) {
    const o = {
      url: 'https://rei.com',
      image: 'http://via.placeholder.com/350x150',
      text: '#hello',
      count: '133',
    };
    d.push(o);
  }
  return d;
};

const theData = genData();

export default {
  name: 'go-landing',
  components: CedarComps,
  data() {
    return {
      tileData: theData,
    };
  },
  methods: {
    sizeXS(ix) {
      switch (ix % 6) {
        case 2:
        case 5:
          return 12;
        default:
          return 6;
      }
    },
    ratioXS(ix) {
      switch (ix % 6) {
        case 2:
          return '2-1';
        case 5:
          return 'square';
        default:
          return 'square';
      }
    },
    sizeSM(ix) {
      switch (ix % 9) {
        case 1:
        case 5:
        case 6:
          return 6;
        default:
          return 3;
      }
    },
    ratioSM(ix) {
      return this.sizeSM(ix) === 3 ? 'square' : 'auto';
    },
  },
};
</script>

<style>

</style>
