<template>
  <div>
    <h2>breadcrumb</h2>
    <cdr-breadcrumb
      :items="BreadcrumbData"
    >
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

const BreadcrumbData = [
  {
    textValue: 'Kris1',
    url: 'http://google.com',
  },
  {
    textValue: 'Kris2',
    url: 'http://google.com',
  },
  {
    textValue: 'Kris3',
    url: 'http://google.com',
  },
]

export default {
  name: 'Breadcrumb',
  components: Components,
};
</script>

<style>
</style>
