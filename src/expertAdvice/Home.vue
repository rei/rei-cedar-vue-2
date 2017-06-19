<template>
  <div class="container">
  <cdr-row cols="1" justify="center">
    <cdr-col span="10" offset-left="1">
      <p>Your go-to source for outdoor knowledge you can trust. All the information you need to learn new skills, choose and maintain gear, prep for your trips and have amazing adventures.</p>
      </cdr-col>
       <cdr-col span="10" offset-left="1" is-row cols="2" cols-md="6" justify-md="center" type="list">
        <cdr-col>
          <div>
            <cdr-icon url="/static/ea-icons.svg#ea-camping"></cdr-icon>
            Camping
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <cdr-icon url="/static/ea-icons.svg#ea-hiking"></cdr-icon>
            Hiking
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <cdr-icon url="/static/ea-icons.svg#ea-cycling"></cdr-icon>
            Cycling
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <cdr-icon url="/static/ea-icons.svg#ea-climbing"></cdr-icon>
            Climbing
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <cdr-icon url="/static/ea-icons.svg#ea-snowsports"></cdr-icon>
            Snowsports
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <cdr-icon url="/static/ea-icons.svg#ea-paddling"></cdr-icon>
            Paddling
          </div>
        </cdr-col>
        <cdr-col>
          <div>
           <cdr-icon url="/static/ea-icons.svg#ea-fitness"></cdr-icon>
           Fitness
           </div>
        </cdr-col>
        <cdr-col>
          <div>
            <cdr-icon url="/static/ea-icons.svg#ea-travel"></cdr-icon>
            Travel
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <cdr-icon url="/static/ea-icons.svg#ea-clothing"></cdr-icon>
            Clothing
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <cdr-icon url="/static/ea-icons.svg#ea-outdoor-basics"></cdr-icon>
            Outdoor Basics
          </div>
        </cdr-col>
        <cdr-col>
          <div>
            <cdr-icon url="/static/ea-icons.svg#ea-family"></cdr-icon>
            Family
          </div>
        </cdr-col>
    </cdr-col>
    <cdr-col>
      <cdr-heading level="2"  variant="cdr-header-section-title">
        Editor's Picks
      </cdr-heading>
    </cdr-col>
    <cdr-col span="12" span-md="12" is-row>
      <cdr-col class="cdr-col--enlarge" span="12" span-md="6">
        <cdr-card-content
        :modifier="['cta']"
        profile="http://placehold.it/50x50"
        author="Harald Hardrada"
        author-heading="3"
        creation-time="Issaquah Alps, WA"
        level="2"
        label="MTB Project"
        heading="Tiger Mountain Loop"
        heading-url="http://rei.com"
        media="http://placehold.it/350x150"
        attribution>
          <cdr-list modifier="bulleted" slot="snapshot">
            <li>17.3 mi away</li>
            <li>Issaquah, WA</li>
            <li>34 min drive</li>
          </cdr-list>
          <div slot="summary">
            <p>Tiger Mountain is a multi-use recreation area near Seattle. In recent years, new trails and the continued work of Evergreen Mountain…</p>
             <cdr-list modifier="bulleted">
              <li>2,913’ ascent</li>
              <li>2,992’ high</li>
              <li>1,451 low</li>
            </cdr-list>
            <section>
            <span>$25</span> member / $50 non-member
            </section>
          </div>
          <div slot="messaging"></div>
          <cdr-button-group slot="actions">
            <cdr-button >B1</cdr-button>
          <cdr-button class="cdr-card__action" modifier="Secondary">B2</cdr-button>
          </cdr-button-group>
        </cdr-card-content>
      </cdr-col>
      <cdr-col span="12" span-md="6" is-row cols="1" cols-md="2">
        <cdr-col>
          <cdr-card>

            <cdr-media-object
            level="3"
            media-url="http://rei.com"
            media-title="Backpacking Tents: How to Choose"
            media-figure="http://placehold.it/350x150"
            media-extend-style="cdr-card__media"
            media-img-shape="responsive"
            modifier="top block">
            </cdr-media-object>

          <cdr-button-group slot="actions">
            <cdr-button >B1</cdr-button>
          <cdr-button class="cdr-card__action" modifier="secondary">B2</cdr-button>
          </cdr-button-group>
          </cdr-card>
        </cdr-col>
        <cdr-col>
          <cdr-card-content level="3" heading="Kids and Camping"
          heading-url="http://rei.com"
          media="http://placehold.it/350x150">
          </cdr-card-content>
        </cdr-col>
      </cdr-col>
    </cdr-col>
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
</template>

<script>
import Components from '../components/_index';

export default {
  name: 'ea-home',
  components: Components,
};
</script>
