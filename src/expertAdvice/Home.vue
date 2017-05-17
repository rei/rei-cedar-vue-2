<template>
  <div class="container-fluid">
  <h1>Expert Advice!</h1>
    <cdr-row :cols="1">
      <cdr-col :span="10" :offset-left="1">
         <p>Your go-to source for outdoor knowledge you can trust. All the information you need to learn new skills, choose and maintain gear, prep for your trips and have amazing adventures.</p>
      </cdr-col>
      <cdr-col :span="10" :offset-left="1">
        <cdr-list :modifier="['unstyled']">
          <li>Camping</li>
          <li>Hiking</li>
          <li>Cycling</li>
          <li>Climbing</li>
          <li>Snowsports</li>
          <li>Paddling</li>
          <li>Fitness</li>
          <li>Travel</li>
          <li>Clothing</li>
          <li>Outdoor Basics</li>
          <li>Family</li>
        </cdr-list>
      </cdr-col>
      <cdr-col :span="12" :isRow="true">
        <cdr-col :span="12" :span-md="12" :isRow="true">
          <cdr-col :span="12" :span-md="6">
            <cdr-card>
             <cdr-heading :level="2" :modifier="['title']">Glacier National Park Backpacking Packing List</cdr-heading>
            </cdr-card>
          </cdr-col>
          <cdr-col :span="12" :span-md="6" :isRow="true" :cols="1" :cols-md="2">
           <cdr-col>
            <cdr-card>
              <cdr-heading :level="2" :modifier="['title']">Backpacking Tents: How to Choose</cdr-heading>
            </cdr-card>
            </cdr-col>
              <cdr-col>
                <cdr-card>
              <cdr-heading :level="2" :modifier="['title']">Kids and Camping</cdr-heading>
            </cdr-card>
              </cdr-col>
          </cdr-col>
        </cdr-col>
      </cdr-col>
      <cdr-col :span="12" :isRow="true">
        <cdr-col :span="12" :span-md="12" :isRow="true">
          <cdr-col :span="12" :span-md="6" :isRow="true" :cols="1" :cols-md="2">
           <cdr-col>
            <cdr-card>
              <cdr-heading :level="2" :modifier="['title']">Food Storage and Handling for Campers and Backpackers</cdr-heading>
            </cdr-card>
            </cdr-col>
              <cdr-col>
                <cdr-card>
              <cdr-heading :level="2" :modifier="['title']">Yellowstone National Park Kayaking and Canoeing Gear List</cdr-heading>
            </cdr-card>
              </cdr-col>
          </cdr-col>
           <cdr-col :span="12" :span-md="6">
            <cdr-card>
             <cdr-heading :level="2" :modifier="['title']">Zion National Park Visitor Guide</cdr-heading>
            </cdr-card>
          </cdr-col>
        </cdr-col>
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
