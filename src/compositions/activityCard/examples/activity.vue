<template>
  <div>
    <h2>Activity Card</h2>

    <cdr-activity-card
      data-backstop="activity-card"
      media="http://placehold.it/350x150"
      media-ratio="16/9"
      media-cover
      media-crop="top"
      label="hiking"
      title-url="http://rei.com"
      title="Snow Lake Trail"
      :snapshot="['7.5 mi', 'out & back', '286 ft Ele Gain']"
      location="Seattle, WA"
      rating="5"
      count="138"
    />
  </div>
</template>

<script>
import CdrActivityCard from '../CdrActivityCard';

export default {
  name: 'Activity',
  components: { CdrActivityCard },
};
</script>

