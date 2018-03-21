<template>
  <div class="icon-examples">
    <h2>Icons</h2>
    <h3>Default icon size</h3>
    <cdr-icon
      name="account-profile"
      data-backstop="cdr-icon-add"
    />
    <hr>

    <cdr-row
      cols="3"
      cols-md="6"
      cols-lg="12"
    >
      <cdr-col
        v-for="(svg, name) in icons"
        :key="name"
      >
        <div>
          <cdr-icon
            :name="name"
          />
          {{ name }}
        </div>
      </cdr-col>
    </cdr-row>

    <h3>Medium icon size</h3>
    <hr>

    <cdr-row
      cols="3"
      cols-md="6"
      cols-lg="12"
    >
      <cdr-col
        v-for="(svg, name) in icons"
        :key="name"
      >
        <div>
          <cdr-icon
            :name="name"
            modifier="md"
          />
          {{ name }}
        </div>
      </cdr-col>
    </cdr-row>

    <h3>External Icons</h3>
    <hr>

    <cdr-row
      cols="3"
      cols-md="6"
      cols-lg="12"
    >
      <cdr-col>
        <div>
          <cdr-icon
            :raw="EAicon"
          />
          EA Camping
        </div>
      </cdr-col>
    </cdr-row>


    <!-- <cdr-row
      cols="3"
      cols-md="6"
      cols-lg="12"
    >
      <cdr-col>
        <cdr-icon
          data-backstop="cdr-icon-add"
          url="/static/rei-icons.svg#cdr-account"
        />
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-arrow-down"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-arrow-left"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-arrow-right"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-arrow-up"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-bike"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-bookmark-fill"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-bookmark-stroke"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-calendar"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-camera"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-caret-down"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-caret-left"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-caret-right"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-caret-up"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-cart"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-chainlink"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-chat"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-check-circ-fill"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-check-circ-stroke"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-check-lg"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-check-sm"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-climb"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-coupon-fill"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-coupon"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-creditcard"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-download"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-expand"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-external"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-facebook"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-heart-fill"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-heart-stroke"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-help-circ-fill"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-help-circ-stroke"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-image"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-info-circ-fill"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-info-circ-stroke"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-instagram"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-locate"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-loc-pin-fill"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-loc-pin"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-mail"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-minus-circ-fill"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-minus-circ-stroke"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-minus-lg"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-minus-sm"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-more"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-nav-alt"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-nav"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-phone"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-pinterest"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-play-circ-fill"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-play-circ-stroke"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-plus-circ-fill"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-plus-circ-stroke"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-plus-lg"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-plus-sm"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-print"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-recent"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-refresh"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-reload"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-service"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-share"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-ship"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-shopping-bag"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-shrink"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-sizechart"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-snow"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-spyglass"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-star-25"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-star-50"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-star-75"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-star-100"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-star-stroke"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-twitter"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-upload"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-warning-circ-fill"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-warning-circ-stroke"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-warning-tri"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-x-circ-fill"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-x-circ-stroke"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-x-lg"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-x-sm"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-youtube"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-zoom-in"/>
      </cdr-col>
      <cdr-col>
        <cdr-icon url="/static/rei-icons.svg#cdr-zoom-out"/>
      </cdr-col>
    </cdr-row> -->
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

const icons = require('@rei/cdr-assets/dist/icons.json');
const EAicon = require('assetsdir/icons/ea/ea-camping.svg');

export default {
  name: 'Icons',
  components: Components,
  data() {
    return {
      icons,
      EAicon,
    };
  },
};
</script>

<style>
.icon-examples {
  .cdr-icon {
    &:hover {
      fill: red;
    }
  }
}
</style>
