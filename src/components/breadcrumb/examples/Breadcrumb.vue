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
          item: {
            url: 'http://google.com',
            name: 'Breadcrumb 1',
          },
        },
        {
          item: {
            url: 'http://rei.com',
            name: 'Longer Breadcrumb 2',
          },
        },
        {
          item: {
            url: 'http://yahoo.com',
            name: 'Breadcrumb 3',
          },
        },
        {
          item: {
            url: 'http://bing.com',
            name: 'Really Really Long Breadcrumb 4',
          },
        },
        {
          item: {
            url: 'http://bing.com',
            name: 'Breadcrumb 5',
          },
        },
      ],
      shortBreadcrumbItems: [
        {
          item: {
            url: 'http://google.com',
            name: 'Item 1',
          },
        },
        {
          item: {
            url: 'http://rei.com',
            name: 'Item 2',
          },
        },
        {
          item: {
            url: 'http://yahoo.com',
            name: 'Item 3',
          },
        },
      ],
      superLongBreadcrumbItems: [
        {
          item: {
            url: 'http://google.com',
            name: 'Long Breadcrumb Item 1',
          },
        },
        {
          item: {
            url: 'http://rei.com',
            name: 'Super Long Breadcrumb Item 2',
          },
        },
        {
          item: {
            url: 'http://yahoo.com',
            name: 'Super Really Long Breadcrumb Item 3',
          },
        },
        {
          item: {
            url: 'http://bing.com',
            name: 'Really Really Long Breadcrumb Item 4',
          },
        },
        {
          item: {
            url: 'http://bing.com',
            name: 'Following Breadcrumb is Longest on REI.com',
          },
        },
        {
          item: {
            url: 'http://bing.com',
            name: 'Mexico, Central and South America GPS Mapping Software',
          },
        },
      ],
      reiExampleBreadcrumbItems: [
        {
          item: {
            url: 'http://rei.com',
            name: 'Clothing',
          },
        },
        {
          item: {
            url: 'http://rei.com',
            name: 'Clothing Accessories',
          },
        },
        {
          item: {
            url: 'http://rei.com',
            name: 'Gloves and Mittens',
          },
        },
        {
          item: {
            url: 'http://rei.com',
            name: 'Gloves',
          },
        },
        {
          item: {
            url: 'http://rei.com',
            name: 'Snowsports Gloves',
          },
        },
        {
          item: {
            url: 'http://rei.com',
            name: 'Cross-Country Ski Gloves',
          },
        },
        {
          item: {
            url: 'http://rei.com',
            name: 'Women\'s Cross-Country Ski Gloves',
          },
        },
      ],
    };
  },
};
</script>

<style>
  h2 {
    padding-bottom: 10px;
  }

  h6 {
    margin: 10px 0 10px 10px;
  }
</style>

