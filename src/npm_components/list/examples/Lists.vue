<template>
  <div>
    <h2>Lists</h2>
    <default-list></default-list>
    <ordered-list></ordered-list>
    <unstyled-list></unstyled-list>
    <menu-list></menu-list>
  </div>
</template>

<script>
  import defaultList from './demo/Default';
  import orderedList from './demo/Ordered';
  import unstyledList from './demo/Unstyled';
  import menuList from './demo/Menu';

  export default {
    name: 'lists',
    components: {
      defaultList,
      orderedList,
      unstyledList,
      menuList,
    },
  };
</script>
