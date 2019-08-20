<template>
  <div
    class="breadcrumb-demo-container"
    data-backstop="breadcrumbs"
  >
    <cdr-text
      tag="h2"
      modifier="heading-small"
    >
      Breadcrumb
    </cdr-text>
    <cdr-breadcrumb
      :items="averageBreadcrumbItems"
    />
    <cdr-text
      tag="h3"
      modifier="subheading"
    >
      Two-Item Breadcrumb
    </cdr-text>
    <cdr-breadcrumb
      :items="shortBreadcrumbItems"
    />
    <cdr-text
      tag="h3"
      modifier="subheading"
    >
      Three-Item Breadcrumb
    </cdr-text>
    <cdr-breadcrumb
      :items="superLongBreadcrumbItems"
    />
    <cdr-text
      tag="h3"
      modifier="subheading"
    >
      REI.com's Longest Breadcrumb
    </cdr-text>
    <cdr-breadcrumb
      :items="reiExampleBreadcrumbItems"
    />
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Breadcrumb',
  components: { ...Components },
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
</style>
