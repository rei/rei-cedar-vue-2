<template>
  <div class="cdr-container-fluid">
    <cdr-row :cols="2" :cols-md="4" gutter="xxs">
      <cdr-col v-for="result in results" :key="result.id">

        <a href="https://rei.com" class="image-tile">
          <cdr-media-object :img-src="result.photo.medium.url" img-ratio="square" img-cover img-alt="Testing screen reader" modifier="overlay">
            <div class="image-tile__body">
              <div class="image-tile__info cdr-inset">
                <div>
                  <p class="image-tile__name">{{result.user.username}}</p>
                  <p class="image-tile__location">Seattle, WA</p>
                </div>
                <cdr-icon class="image-tile__icon" url="http://localhost:3000/static/rei-icons.svg#icon-rei-right-arrow"></cdr-icon>
              </div>

            </div>
          </cdr-media-object>
        </a>

      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
import * as Components from '../components/_index';
import * as Compositions from '../compositions/_index';

const CedarComps = Object.assign({}, Components, Compositions);

const results = require('./resultsData');

export default {
  name: 'go-results',
  components: CedarComps,
  data() {
    return results;
  },
};
</script>

<style>
.image-tile {
  &:hover,
  &:focus {
    & .image-tile__location {
      opacity: 1;
      transform: scaleY(1);
      transition: opacity 300ms ease, transform 300ms ease;
      position: static;
    }

    & .image-tile__icon {
      opacity: 1;
      transition: opacity 300ms ease;
    }
  }

  &__body {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: #fff;
  }

  &__info {
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__name {
    margin: 0;
  }

  &__location {
    font-size: 12px;
    margin: 0;
    opacity: 0;
    transform: scaleY(0);
    transform-origin: bottom;
    position: absolute;
  }

  &__icon {
    width: 16px !important;
    height: 16px !important;
    opacity: 0;

    use {
      fill: #fff;
    }
  }
}
</style>
