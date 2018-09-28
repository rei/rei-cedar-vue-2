<template>
  <div class="temp">
    <cdr-card
      card-img="https://picsum.photos/200/300"
      card-img-alt="a randomly generated image for testing the cdr-card experience"
      :card-img-props="{
        'ratio': '16-9',
        'cover': true
      }"
      card-lable=""
      card-title=""
      card-url="https://www.rei.com"
      :snapshot="['7.5 mi', 'out & back', '286 ft Ele Gain']"
    >
      <span slot="cardMedia">
        <cdr-img
          src="
https://www.rei.com/assets/drsp/2018/q2/campaign/summer/chapter-4/rei-backpacking-bundle/live.jpg
         "
          ratio="16-9"
        />
      </span>
      <span slot="cardLabelSlot"> some other place </span>
      <span slot="cardTitleSlot"> bob </span>
    </cdr-card>
    <cdr-card
      card-img="
https://www.rei.com/assets/drsp/2018/q2/campaign/summer/chapter-4/rei-backpacking-bundle/live.jpg"
      card-img-alt="a randomly generated image for testing the cdr-card experience"
      card-img-ratio="16-9"
      card-img-cover
      card-img-crop="top"
      card-label="someplace"
      card-title="this is a title"
      card-title-level="4"
      card-url="https://www.rei.com"
      :snapshot="['7.5 mi', 'out & back', '286 ft Ele Gain']"
    />

  </div>
</template>

<script>
import Components from 'componentsdir/_index';


export default {
  name: 'SimpleCard',
  components: Components,
};
</script>
<style>
.temp {
  margin: 60px;
  background: #c2c2c2;
}

.temp article {
  margin: 60px;
}
</style>
