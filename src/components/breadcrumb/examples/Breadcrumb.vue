<template>
  <div class="breadcrumb-demo-container">
    <h2>Breadcrumb</h2>
    <h6>Basic Breadcrumb</h6>
    <cdr-breadcrumb
      :items="averageBreadcrumbItems"
    />
    <h6>Short Breadcrumb</h6>
    <cdr-breadcrumb
      :items="shortBreadcrumbItems"
    />
    <h6>Super Long Breadcrumb</h6>
    <cdr-breadcrumb
      :items="superLongBreadcrumbItems"
    />
    <h6>REI.com's Longest Breadcrumb</h6>
    <cdr-breadcrumb
      :items="reiExampleBreadcrumbItems"
    />
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Breadcrumb',
  components: Components,
  data() {
    return {
      averageBreadcrumbItems: [
        {
          url: 'http://google.com',
          displayText: 'Breadcrumb Step 1',
        },
        {
          url: 'http://rei.com',
          displayText: 'Long Breadcrumb Step 2',
        },
        {
          url: 'http://yahoo.com',
          displayText: 'Breadcrumb Step 3',
        },
        {
          url: 'http://bing.com',
          displayText: 'Really Really Long Breadcrumb Step 4',
        },
        {
          url: 'http://bing.com',
          displayText: 'Last Step',
        },
      ],
      shortBreadcrumbItems: [
        {
          url: 'http://google.com',
          displayText: 'Step 1',
        },
        {
          url: 'http://rei.com',
          displayText: 'Step 2',
        },
        {
          url: 'http://yahoo.com',
          displayText: 'Step 3',
        },
      ],
      superLongBreadcrumbItems: [
        {
          url: 'http://google.com',
          displayText: 'Long Breadcrumb Step 1',
        },
        {
          url: 'http://rei.com',
          displayText: 'Super Long Breadcrumb Step 2',
        },
        {
          url: 'http://yahoo.com',
          displayText: 'Super Really Long Breadcrumb Step 3',
        },
        {
          url: 'http://bing.com',
          displayText: 'Really Really Long Breadcrumb Step 4',
        },
        {
          url: 'http://bing.com',
          displayText: 'Following Breadcrumb is Longest on REI.com',
        },
        {
          url: 'http://bing.com',
          displayText: 'Mexico, Central and South America GPS Mapping Software',
        },
      ],
      reiExampleBreadcrumbItems: [
        {
          url: 'http://rei.com',
          displayText: 'Clothing',
        },
        {
          url: 'http://rei.com',
          displayText: 'Clothing Accessories',
        },
        {
          url: 'http://rei.com',
          displayText: 'Gloves and Mittens',
        },
        {
          url: 'http://rei.com',
          displayText: 'Gloves',
        },
        {
          url: 'http://rei.com',
          displayText: 'Snowsports Gloves',
        },
        {
          url: 'http://rei.com',
          displayText: 'Cross-Country Ski Gloves',
        },
        {
          url: 'http://rei.com',
          displayText: 'Women\'s Cross-Country Ski Gloves',
        },
      ],
    };
  },
};
</script>
<style>
  .breadcrumb-demo-container {
    margin-left: 30px;
  }

  h2 {
    padding: 0 15px;
  }

  h6 {
    padding: 15px 30px;
  }
</style>
