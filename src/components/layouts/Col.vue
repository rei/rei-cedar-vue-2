<template>
  <div class="cdr-col" :class="[spanClass]">
    <div class="cdr-col__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  const bpArr = ['Md', 'Lg', 'Xl', 'Xxl'];
  const finalProps = {};
  const propDefs = [
    {
      name: 'span',
      responsive: true,
      type: Number,
      validator: value => (value > 0 && value <= 12) || false,
    },
  ];

  function createPropObj(obj) {
    const propObj = {};

    if (obj.type) { propObj.type = obj.type; }
    if (obj.validator) { propObj.validator = obj.validator; }

    return propObj;
  }

  // Make a valid props object
  propDefs.forEach((p) => {
    finalProps[`${p.name}`] = createPropObj(p);

    if (p.responsive) {
      bpArr.forEach((bp) => {
        finalProps[`${p.name}${bp}`] = createPropObj(p);
      });
    }
  });

  export default {
    name: 'col',
    props: finalProps,
    computed: {
      spanClass() {
        let spanClass = '';
        if (this.span) { spanClass += `_col${this.span} `; }
        if (this.spanMd) { spanClass += `_col${this.spanMd}-md `; }
        if (this.spanLg) { spanClass += `_col${this.spanLg}-lg `; }
        if (this.spanXl) { spanClass += `_col${this.spanXl}-xl `; }
        if (this.spanXxl) { spanClass += `_col${this.spanXxl}-xxl `; }
        return spanClass;
      },
    },
  };
</script>

<style>
</style>
