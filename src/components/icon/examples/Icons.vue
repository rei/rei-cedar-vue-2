<template>
  <!-- eslint-disable max-len -->
  <div
    class="icon-examples"
    data-backstop="icons"
  >
    <cdr-text
      tag="h2"
      modifier="heading-small"
    >
      Icons
    </cdr-text>

    <cdr-text
      tag="h3"
      modifier="heading-small"
    >
      Default icon size
    </cdr-text>
    <icon-account-profile
      data-backstop="cdr-icon-hover"
      class="icon-hover"
    />
    <cdr-icon
      use="#account-profile"
      class="icon-hover"
    />

    <hr class="icon-hr">

    <cdr-row
      cols="3 6@md 10@lg"
    >
      <cdr-col
        v-for="(val, key) in filteredIcons"
        :key="key"
      >
        <div>
          <div class="cdr-text-center">
            <svg :is="key" />
            <cdr-text>{{ key }}</cdr-text>
          </div>
          <div class="cdr-text-center">
            <cdr-icon :use="`#${getSpriteId(key)}`" />
            <cdr-text>using sprite</cdr-text>
          </div>
        </div>
      </cdr-col>
    </cdr-row>

    <cdr-text
      tag="h3"
      modifier="heading-small"
    >
      Small icon size
    </cdr-text>
    <hr class="icon-hr">

    <cdr-row
      cols="3 6@md 10@lg"
    >
      <cdr-col
        v-for="(val, key) in filteredIcons"
        :key="key"
      >
        <div class="cdr-text-center">
          <svg
            :is="key"
            size="small"
          />
          <cdr-text>{{ key }}</cdr-text>
        </div>
      </cdr-col>
    </cdr-row>

    <cdr-text
      tag="h3"
      modifier="heading-small"
    >
      Large icon size
    </cdr-text>
    <hr class="icon-hr">

    <cdr-row
      cols="3 6@md 10@lg"
    >
      <cdr-col
        v-for="(val, key) in filteredIcons"
        :key="key"
      >
        <div class="cdr-text-center">
          <svg
            :is="key"
            size="large"
          />
          <cdr-text>{{ key }}</cdr-text>
        </div>
      </cdr-col>
    </cdr-row>

    <cdr-text tag="h3">
      Responsive icon size
    </cdr-text>
    <hr class="icon-hr">

    <cdr-text tag="h4">
      Grow with screen width
    </cdr-text>
    <cdr-icon
      use="#account-profile"
      size="small@xs large@md large@lg"
    />
    <hr class="icon-hr">
    <cdr-text tag="h4">
      Inverse Grow
    </cdr-text>
    <cdr-icon
      use="#account-profile"
      size="large@xs small@md small@lg"
    />
    <hr class="icon-hr">
    <cdr-text tag="h4">
      Container with pink fill color
    </cdr-text>
    <div class="inherit-container">
      <cdr-row cols="2">
        <cdr-col>
          <div>
            <span>Icon with inherit-color</span>
            <cdr-icon
              use="#account-profile"
              inherit-color
            />
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <span>Icon WITHOUT inherit-color</span>
            <cdr-icon
              use="#account-profile"
            />
          </div>
        </cdr-col>
      </cdr-row>
    </div>
    <hr class="icon-hr">

    <p>Full SVG</p>
    <cdr-icon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>
          service-shop
        </title>
        <path d="M12.4582253 10.1906117l-1.984818-1.98865789c.1557846-.41873211.240921-.87183717.240921-1.34482691C10.7143283 4.72689454 8.98743372 3 6.85720135 3c-.3052435 0-.55269226.24744875-.55269226.55269226 0 .14662308.05826159.28723749.16196141.39089402l1.68964201 1.68891067-.49914895 1.86284925-1.86362727.49894048-1.62279021-1.62211285c-.26782052-.26776088-.70199502-.26767025-.96972981.00017635-.12853572.12858939-.20074182.30296181-.20074182.48477672 0 2.13023237 1.72689453 3.8571269 3.8571269 3.8571269.47295883 0 .92603559-.0851253 1.34474484-.2408904l1.98853511 1.9849923-.78761552.7876156-.32929052-.0099683c-.35476401-.0107394-.69818645.1256524-.94891474.3768657l-4.7494826 4.7561838c-.50078995.5029465-.50026905 1.3165549.00175754 1.8182663l.43324609.4341601c.50183011.501515 1.31505085.5017498 1.81717053.0005248l4.75718742-4.7510025c.2506826-.250236.3870271-.5928055.3768562-.9468625l-.008619-.3000377.8029412-.8029412 6.8129822 6.8008439c.5021196.501225 1.3153404.5009902 1.8171705-.0005248l.4332461-.4341601c.5020266-.5017114.5025475-1.3153198.0017575-1.8182663l-6.7999467-6.8131023 3.6884899-3.68848987 1.4911999-.24853332c.4431109-.07385182.8155443-.37362202.9823816-.79071519l.8945543-2.23638587c.0742834-.18570839.0307463-.39781744-.1106849-.53924873l-.8194455-.81944547c-.1414313-.1414313-.3535404-.18496831-.5392487-.11068496l-2.2363859.89455435c-.4170932.16683727-.7168634.53927062-.7907152.98238156l-.2536763 1.52205762-3.6691714 3.66917138z" />
      </svg>
    </cdr-icon>
    <p>partial SVG</p>
    <cdr-icon>
      <title>
        service-shop
      </title>
      <path d="M12.4582253 10.1906117l-1.984818-1.98865789c.1557846-.41873211.240921-.87183717.240921-1.34482691C10.7143283 4.72689454 8.98743372 3 6.85720135 3c-.3052435 0-.55269226.24744875-.55269226.55269226 0 .14662308.05826159.28723749.16196141.39089402l1.68964201 1.68891067-.49914895 1.86284925-1.86362727.49894048-1.62279021-1.62211285c-.26782052-.26776088-.70199502-.26767025-.96972981.00017635-.12853572.12858939-.20074182.30296181-.20074182.48477672 0 2.13023237 1.72689453 3.8571269 3.8571269 3.8571269.47295883 0 .92603559-.0851253 1.34474484-.2408904l1.98853511 1.9849923-.78761552.7876156-.32929052-.0099683c-.35476401-.0107394-.69818645.1256524-.94891474.3768657l-4.7494826 4.7561838c-.50078995.5029465-.50026905 1.3165549.00175754 1.8182663l.43324609.4341601c.50183011.501515 1.31505085.5017498 1.81717053.0005248l4.75718742-4.7510025c.2506826-.250236.3870271-.5928055.3768562-.9468625l-.008619-.3000377.8029412-.8029412 6.8129822 6.8008439c.5021196.501225 1.3153404.5009902 1.8171705-.0005248l.4332461-.4341601c.5020266-.5017114.5025475-1.3153198.0017575-1.8182663l-6.7999467-6.8131023 3.6884899-3.68848987 1.4911999-.24853332c.4431109-.07385182.8155443-.37362202.9823816-.79071519l.8945543-2.23638587c.0742834-.18570839.0307463-.39781744-.1106849-.53924873l-.8194455-.81944547c-.1414313-.1414313-.3535404-.18496831-.5392487-.11068496l-2.2363859.89455435c-.4170932.16683727-.7168634.53927062-.7907152.98238156l-.2536763 1.52205762-3.6691714 3.66917138z" />
    </cdr-icon>
  </div>
</template>

<script>
import * as Components from 'componentsdir/_index';

import * as Icons from 'componentsdir/icon/build/main';

export default {
  name: 'Icons',
  components: {
    ...Icons,
    ...Components,
  },
  data() {
    return {
      Icons,
    };
  },
  computed: {
    filteredIcons() {
      const notAllowed = ['CdrIcon', 'CdrIconSprite'];
      return Object.keys(this.Icons)
        .filter(key => !notAllowed.includes(key))
        .reduce((obj, key) => ({
          ...obj,
          [key]: this.Icons[key],
        }), {});
    },
  },
  methods: {
    getSpriteId(name) {
      return name.replace('Icon', '').replace(/([a-zA-Z])([A-Z0-9])/g, '$1-$2').toLowerCase();
    },
  },
};
</script>

<style lang="scss">
  .icon-examples {
    line-height: 1;

    .icon-hover:hover {
      fill: red;
    }
  }

  .inherit-container {
    fill: pink;
    border: 2px solid pink;
  }

  .icon-hr {
    margin: 0.5em 0;
    border-style: inset;
    border-width: 1px;
    border-color: black;
  }
</style>
