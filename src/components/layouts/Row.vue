<template>
  <div class="cdr-row" :class="[colsClass, justifyClass, alignClass]">
    <slot></slot>
  </div>
</template>

<script>
  const bpArr = ['Md', 'Lg', 'Xl', 'Xxl'];
  const finalProps = {};
  const propDefs = [
    {
      name: 'cols',
      responsive: true,
      type: Number,
      validator: value => (value > 0 && value <= 12) || false,
    },
    {
      name: 'justify',
      responsive: true,
      type: String,
      validator: value => (['left', 'center', 'right', 'around', 'between'].indexOf(value >= 0)) || false,
    },
    {
      name: 'align',
      responsive: true,
      type: String,
      validator: value => (['top', 'middle', 'bottom', 'stretch'].indexOf(value >= 0)) || false,
    },
  ];

  // Make a valid props object
  propDefs.forEach((p) => {
    finalProps[`${p.name}`] = {
      type: p.type,
      validator: p.validator,
    };

    if (p.responsive) {
      bpArr.forEach((bp) => {
        finalProps[`${p.name}${bp}`] = {
          type: p.type,
          validator: p.validator,
        };
      });
    }
  });

  export default {
    name: 'row',
    props: finalProps,
    computed: {
      colsClass() {
        let colClass = '';
        if (this.cols) { colClass += `_row${this.cols} `; }
        if (this.colsMd) { colClass += `_row${this.colsMd}-md `; }
        if (this.colsLg) { colClass += `_row${this.colsLg}-lg `; }
        if (this.colsXl) { colClass += `_row${this.colsXl}-xl `; }
        if (this.colsXxl) { colClass += `_row${this.colsXxl}-xxl `; }
        return colClass;
      },
      justifyClass() {
        let justifyClass = '';
        if (this.justify) { justifyClass += `${this.getJustify(`${this.justify}`)} `; }
        if (this.justifyMd) { justifyClass += `${this.getJustify(`${this.justifyMd}`)}-md `; }
        if (this.justifyLg) { justifyClass += `${this.getJustify(`${this.justifyLg}`)}-lg `; }
        if (this.justifyXl) { justifyClass += `${this.getJustify(`${this.justifyXl}`)}-xl `; }
        if (this.justifyXxl) { justifyClass += `${this.getJustify(`${this.justifyXxl}`)}-xxl `; }
        return justifyClass;
      },
      alignClass() {
        let alignClass = '';
        if (this.align) { alignClass += `${this.getAlign(`${this.align}`)} `; }
        if (this.alignMd) { alignClass += `${this.getAlign(`${this.alignMd}`)}-md `; }
        if (this.alignLg) { alignClass += `${this.getAlign(`${this.alignLg}`)}-lg `; }
        if (this.alignXl) { alignClass += `${this.getAlign(`${this.alignXl}`)}-xl `; }
        if (this.alignXxl) { alignClass += `${this.getAlign(`${this.alignXxl}`)}-xxl `; }
        return alignClass;
      },
    },
    methods: {
      getJustify(test) {
        switch (test) {
          case 'left': return '-rowLeft';
          case 'center': return '-rowCenter';
          case 'right': return '-rowRight';
          case 'around': return '-rowSpaceAround';
          case 'between': return '-rowSpaceBetween';
          default: return '';
        }
      },
      getAlign(test) {
        switch (test) {
          case 'top': return '-rowTop';
          case 'middle': return '-rowMiddle';
          case 'bottom': return '-rowBottom';
          case 'stretch': return '-rowStretch';
          default: return '';
        }
      },
    },
  };
</script>

<style>
</style>
