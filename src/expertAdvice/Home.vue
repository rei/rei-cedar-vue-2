<template>
  <div class="container">
  <cdr-row :cols="1" :justify="'center'">
    <cdr-col :span="10" :offset-left="1">
      <p>Your go-to source for outdoor knowledge you can trust. All the information you need to learn new skills, choose and maintain gear, prep for your trips and have amazing adventures.</p>
      </cdr-col>
       <cdr-col :span="10" :offset-left="1" :isRow="true" :cols="2" :colsMd="6" justifyMd="center" type="list">
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
      <cdr-heading :level="2"  :modifier="['section-title']">
        Editor's Picks
      </cdr-heading>
    </cdr-col>
    <cdr-col :span="12" :span-md="12" :isRow="true">
      <cdr-col :span="12" :span-md="6">
        <cdr-card>
          <cdr-heading :level="3" :modifier="['title']">
          Glacier National Park Backpacking Packing List
          </cdr-heading>
        </cdr-card>
      </cdr-col>
      <cdr-col :span="12" :span-md="6" :isRow="true" :cols="1" :cols-md="2">
        <cdr-col>
          <cdr-card>
            <img src=""
            <cdr-heading :level="3"  :modifier="['section-title']">Backpacking Tents: How to Choose</cdr-heading>
          </cdr-card>
        </cdr-col>
        <cdr-col>
          <cdr-card>
            <cdr-heading :level="3"  :modifier="['section-title']">Kids and Camping</cdr-heading>
          </cdr-card>
        </cdr-col>
      </cdr-col>
    </cdr-col>
    <cdr-col :span="12" :isRow="true">
      <cdr-col :span="12" :span-md="12" :isRow="true">
        <cdr-col :span="12" :span-md="6" :isRow="true" :cols="1" :cols-md="2">
          <cdr-col>
            <cdr-card glaze="dark-20">
              <cdr-heading :level="3"  :modifier="['section-title']">
              Food Storage and Handling for Campers and   Backpackers
              </cdr-heading>
            </cdr-card>
            </cdr-col>
              <cdr-col>
                <cdr-card href="https://rei.com">
              <cdr-heading :level="3"  :modifier="['section-title']">Yellowstone National Park Kayaking and Canoeing Gear List</cdr-heading>
            </cdr-card>
              </cdr-col>
          </cdr-col>
           <cdr-col :span="12" :span-md="6">
            <cdr-card :modifier="['dark-10']">
             <cdr-heading :level="3" :modifier="['title']">Zion National Park Visitor Guide</cdr-heading>
            </cdr-card>
          </cdr-col>
        </cdr-col>
      </cdr-col>
      <cdr-col>
      <div>
      <!--make into heading - sub-heading combo-->
      <cdr-heading :level="2"  :modifier="['title']">
          Get hands on guidance - take a class
      </cdr-heading>
       <cdr-heading :level="3"  :modifier="['section-title']">
         Popular Classes &amp; Events near Seattle, Wa
      </cdr-heading>
      </div>
      </cdr-col>
      <cdr-col :span="4">
        <cdr-card>
          <cdr-heading :level="3" :modifier="['title']">
            Zion National Park Visitor Guide
          </cdr-heading>
        </cdr-card>
      </cdr-col>
      <cdr-col :span="4">
        <cdr-card>
          <cdr-heading :level="3" :modifier="['title']">
            Zion National Park Visitor Guide
          </cdr-heading>
        </cdr-card>
      </cdr-col>
      <cdr-col :span="4">
        <cdr-card>
          <cdr-heading :level="3" :modifier="['title']">
            Zion National Park Visitor Guide
          </cdr-heading>
        </cdr-card>
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
