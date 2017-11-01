<template>
<div>
    <h2>Activity Card</h2>

    <cdr-activity-card
      data-backstop="activity-card"
      media="http://placehold.it/350x150"
      label="hiking"
      title-url="http://rei.com"
      title="Snow Lake Trail"
      :snapshot="['7.5 mi', 'out & back', '286 ft Ele Gain']"
      location="Seattle, WA"
      rating="5"
      count="138">
    </cdr-activity-card>
  </div>
</template>

<script>
import cdrActivityCard from '../cdrActivityCard';

export default {
  name: 'activity',
  components: { cdrActivityCard },
};
</script>

