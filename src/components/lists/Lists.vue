<template>
<<<<<<< cd3d868f5179167bfd8de2757eb38b62b7c40ae0
  <ul :class="buildClass" v-if="type === 'ul'">
    <slot></slot>
  </ul>

  <ol :class="buildClass" v-else-if="type === 'ol'">
=======
  <ul class="cdr-list" :class="modifierClass" v-if="type != 'ol'">
    <slot></slot>
  </ul>

  <ol class="cdr-list" :class="modifierClass" v-else>
>>>>>>> Implement lists
    <slot></slot>
  </ol>
</template>

<script>
  export default {
    name: 'cdr-list',
    props: {
<<<<<<< cd3d868f5179167bfd8de2757eb38b62b7c40ae0
      type: {
        type: String,
        default: 'ul',
        validator: value => (['ul', 'ol'].indexOf(value) >= 0) || false,
      },
=======
      type: String,
>>>>>>> Implement lists
      modifier: {
        required: false,
        default: () => [],
      },
    },
    computed: {
<<<<<<< cd3d868f5179167bfd8de2757eb38b62b7c40ae0
      buildClass() {
        const baseClass = 'cdr-list';
        let final = '';

        if (this.theme) {
          final += `${this[this.theme][baseClass]} `;

          this.modifier.forEach((mod) => {
            final += `${this[this.theme][`${baseClass}--${mod}`]} `;
          });
        } else if (this.type === 'ol') {
          final += `${baseClass} ${baseClass}--numbered `;

          this.modifier.forEach((mod) => {
            final = `${baseClass} ${baseClass}--${mod} `;
          });
        } else {
          final += `${baseClass} `;

          this.modifier.forEach((mod) => {
            final += `${baseClass}--${mod} `;
          });
        }
=======
      modifierClass() {
        let final = '';
        this.modifier.forEach((mod) => {
          final += `cdr-list--${mod}`;
        });
>>>>>>> Implement lists

        return final;
      },
    },
  };
</script>
