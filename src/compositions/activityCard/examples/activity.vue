<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-small"
    >
      Activity Card
    </cdr-text>

    <cdr-activity-card
      data-backstop="activity-card"
      media="http://placehold.it/350x150"
      media-ratio="3-4"
      media-cover
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
import Components from 'componentsdir/_index';
import CdrActivityCard from '../CdrActivityCard';

export default {
  name: 'Activity',
  components: { ...Components, CdrActivityCard },
};
</script>
