<template>
  <div>
    <h2>Lists</h2>
    <default-list/>
    <ordered-list/>
    <unstyled-list/>
    <menu-list/>
  </div>
</template>

<script>
import defaultList from './demo/Default';
import orderedList from './demo/Ordered';
import unstyledList from './demo/Unstyled';
import menuList from './demo/Menu';

export default {
  name: 'Lists',
  components: {
    defaultList,
    orderedList,
    unstyledList,
    menuList,
  },
};
</script>
