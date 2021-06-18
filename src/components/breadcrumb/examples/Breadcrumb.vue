<template>
  <div
    class="breadcrumb-demo-container"
    data-backstop="breadcrumbs"
  >
    <h2>
      Breadcrumb
    </h2>
    <cdr-breadcrumb
      :items="averageBreadcrumbItems"
      data-backstop="breadcrumbs-ellipsis"
    />
    <h3>
      Two-Item Breadcrumb
    </h3>
    <cdr-breadcrumb
      :items="shortBreadcrumbItems"
      data-backstop="breadcrumbs-default"
    />
    <h3>
      Three-Item Breadcrumb
    </h3>
    <cdr-breadcrumb
      :items="superLongBreadcrumbItems"
    />
    <h3>
      REI.com's Longest Breadcrumb
    </h3>
    <cdr-breadcrumb
      :items="reiExampleBreadcrumbItems"
    />

    <h3>
      Breadcrumb handle navigate events
    </h3>
    <cdr-breadcrumb
      :items="shortBreadcrumbItems"
      data-backstop="breadcrumbs-default"
      @navigate="handleClick"
    />
    <h3>
      Scoped Slot
    </h3>
    <cdr-breadcrumb :items="reiExampleBreadcrumbItems">
      <template
        slot="link"
        slot-scope="link"
      >
        <a
          :class="link.class"
          :href="link.href"
        >
          {{ link.content }}
        </a>
      </template>
    </cdr-breadcrumb>
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
  methods: {
    handleClick(bc, e) {
      e.preventDefault();
      console.log(bc.item);
    },
  },
};
</script>

<style>
</style>
