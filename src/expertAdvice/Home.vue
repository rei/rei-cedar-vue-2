<template>
<div>
  <div class="container-fluid">
    <cdr-img
    src="http://patterns.rei.com/assets/img/expert-advice.jpg"
    alt="Two mountain bikers take a turn on a single track trail thrhough the woods"
    modifier="responsive">
    </cdr-img>
  </div>

  <div class="container">
  <cdr-row cols="1" justify="center">
    <cdr-col span="10" offset-left="1">
      <p>Your go-to source for outdoor knowledge you can trust. All the information you need to learn new skills, choose and maintain gear, prep for your trips and have amazing adventures.</p>
      </cdr-col>
       <cdr-col span="10" offset-left="1" is-row cols="2" cols-md="4" cols-lg="6"justify-md="center" type="list">
        <cdr-col>
            <cdr-media-object
              icon-figure="/static/ea-icons.svg#ea-camping"
              modifier="top center"
              media-title="Camping"
              media-align="center"
              >
            </cdr-media-object>
        </cdr-col>
        <cdr-col>
          <cdr-media-object
            icon-figure="/static/ea-icons.svg#ea-hiking"
            modifier="top center"
            media-title="Hiking"
            media-align="center">
          </cdr-media-object>
        </cdr-col>
        <cdr-col>
          <cdr-media-object
            icon-figure="/static/ea-icons.svg#ea-cycling"
            modifier="top center"
            media-title="Cycling"
            media-align="center">
          </cdr-media-object>
        </cdr-col>
        <cdr-col>
          <cdr-media-object
            icon-figure="/static/ea-icons.svg#ea-climbing"
            modifier="top center"
            media-title="Climbing"
            media-align="center">
          </cdr-media-object>
        </cdr-col>
        <cdr-col>
          <cdr-media-object
            icon-figure="/static/ea-icons.svg#ea-snowsports"
            modifier="top center"
            media-title="Snowsports"
            media-align="center">
          </cdr-media-object>
        </cdr-col>
        <cdr-col>
          <cdr-media-object
            icon-figure="/static/ea-icons.svg#ea-paddling"
            modifier="top center"
            media-title="Paddling"
            media-align="center">
          </cdr-media-object>
        </cdr-col>
        <cdr-col>
          <cdr-media-object
            icon-figure="/static/ea-icons.svg#ea-fitness"
            modifier="top center"
            media-title="Fitness"
            media-align="center">
          </cdr-media-object>
        </cdr-col>
        <cdr-col>
          <cdr-media-object
            icon-figure="/static/ea-icons.svg#ea-travel"
            modifier="top center"
            media-title="Travel"
            media-align="center">
          </cdr-media-object>
        </cdr-col>
        <cdr-col>
          <cdr-media-object
            icon-figure="/static/ea-icons.svg#ea-clothing"
            modifier="top center"
            media-title="Clothing"
            media-align="center">
          </cdr-media-object>
        </cdr-col>
        <cdr-col>
          <cdr-media-object
            icon-figure="/static/ea-icons.svg#ea-outdoor-basics"
            modifier="top center"
            media-title="Outdoor Basics"
            media-align="center">
          </cdr-media-object>
        </cdr-col>
        <cdr-col>
          <cdr-media-object
            icon-figure="/static/ea-icons.svg#ea-family"
            modifier="top center"
            media-title="Family"
            media-align="center">
          </cdr-media-object>
        </cdr-col>
    </cdr-col>
    <cdr-col>
      <cdr-heading level="2"  variant="cdr-header-section-title">
        Editor's Picks
      </cdr-heading>
    </cdr-col>
    <cdr-row cols="1" cols-md="3">
      <cdr-col span="12" span-md="6">
        <cdr-card-content
          media="https://www.rei.com/adventures/assets/adventures/images/trip/core/europe/tmb_hero"
          label="MTB Project"
          title="Tiger Mountain Loop"
          title-url="http://rei.com"
          :snapshot="['17.3 mi away', ' Issaquah, WA', ' 34 min drive']"
          actions
          action-one-copy="action 1"
          action-two-copy="action 2"
          >
          <div slot="summary">
            <p>Tiger Mountain is a multi-use recreation area near Seattle. In recent years, new trails and the continued work of Evergreen Mountain…</p>
            <cdr-list modifier="bulleted">
              <li>2,913’ ascent</li>
              <li>2,992’ high</li>
              <li>1,451 low</li>
            </cdr-list>
          </div>
          <section slot="actions">
          </section>
        </cdr-card-content>
      </cdr-col>
      <cdr-col span="12" span-md="6" is-row cols="1" cols-md="2">
        <cdr-col>
          <cdr-card-content
            media="https://www.rei.com/adventures/images/assets/adventures/images/trip/core/northamerica/wbs_card"
            label="MTB Project"
            title="Bryce Canyon"
            title-url="http://rei.com">
          </cdr-card-content>
        </cdr-col>
        <cdr-col>
          <cdr-card-content
            media="https://www.rei.com/adventures/images/assets/adventures/images/trip/core/northamerica/wbs_card"
            label="MTB Project"
            title="Bryce Canyon"
            title-url="http://rei.com">
          </cdr-card-content>
        </cdr-col>
        <cdr-col span="12">
          <cdr-card-content
            media="https://www.rei.com/adventures/images/assets/adventures/images/trip/core/northamerica/wbs_card"
            label="MTB Project"
            title="Bryce Canyon"
            title-url="http://rei.com">
          </cdr-card-content>
        </cdr-col>
      </cdr-col>
    </cdr-row>

    <cdr-col span="12" is-row>
      <cdr-col span="12" span-md="12" is-row>
        <cdr-col span="12" span-md="6" is-row cols="1" cols-md="2">
          <cdr-col>
            <cdr-card-content
            level="3"
            heading="Food Storage and Handling for Campers and Backpackers"
            heading-url="http://rei.com"
            media="http://placehold.it/350x150">
            </cdr-card-content>
            </cdr-col>
            <cdr-col>
              <cdr-card-content
              level="3"
              heading="Yellowstone National Park Kayaking and Canoeing Gear List"
              heading-url="http://rei.com"
              media="http://placehold.it/350x150">
                <p slot="summary">
                  <p>some summary copy goes in here along with list info</p>
                  <a href="http://google.com">google</a>
                </p>
              </cdr-card-content>
            </cdr-col>
          </cdr-col>
           <cdr-col span="12" span-md="6">
            <cdr-card-content
              :modifier="['cta']"
              level="3"
              heading="Zion National Park Visitor Guide"
              heading-url="http://rei.com"
              media="http://placehold.it/350x150"
              media-alt="">
            </cdr-card-content>
          </cdr-col>
        </cdr-col>
      </cdr-col>
      <cdr-col>
      <div>
      <!--make into heading - sub-heading combo-->
      <cdr-heading level="2"  modifier="title">
          Get hands on guidance - take a class
      </cdr-heading>
       <cdr-heading level="3"  modifier="section-title">
         Popular Classes &amp; Events near Seattle, Wa
      </cdr-heading>
      </div>
      </cdr-col>
      <cdr-col span="4">
        <cdr-card-content level="3" heading="Zion National Park Visitor Guide" heading-url="http://rei.com" media="http://placehold.it/350x150">

        </cdr-card-content>
      </cdr-col>
      <cdr-col span="4">
        <cdr-card-content
        level="3"
        heading="Zion National Park Visitor Guide"
        heading-url="http://rei.com"
        media="http://placehold.it/350x150">
        </cdr-card-content>
      </cdr-col>
      <cdr-col span="4">
        <cdr-card-content level="3" heading="Zion National Park Visitor Guide" heading-url="http://rei.com" media="http://placehold.it/350x150">
        </cdr-card-content>
      </cdr-col>
    </cdr-row>
  </div>
</div>
</template>

<script>
import * as Components from '../components/_index';

export default {
  name: 'ea-home',
  components: Components,
};
</script>
