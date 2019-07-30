<template>
  <section>
    <div
      class="cdr-container container-test cdr-display-text-center"
      data-backstop="utility-container"
    >
      cdr-container
    </div>

    <div
      class="cdr-container-fluid container-test cdr-display-text-center"
      data-backstop="utility-container"
    >
      cdr-container-fluid
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContainerTest',
};
</script>

<style>
.container-test {
  background-color: lightblue;
  padding: 20px;
  margin-bottom: 20px;
  line-height: 1;
}
</style>
