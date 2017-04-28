<template>
  <button class="cdr-button" :class="modifierClass" :type="modifierType" @click="handleClick" v-if="!href">

    <slot></slot>
  </button>

  <a class="cdr-link" :class="modifierClass" :href="href" :target="target" :rel="newRel" v-else>
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'cdr-button',
    props: {
      href: String,
      target: String,
      rel: String,
      modifier: {
        required: false,
        default: () => [],
      },
      type: {
        required: false,
        default: () => [],
      },
      handleClick: {
        default: () => () => null,
      },
    },
    computed: {
      modifierClass() {
        let final = '';
        this.modifier.forEach((mod) => {
          if (this.href) {
            final += `cdr-link--${mod}`;
          } else {
            final += `cdr-button--${mod} `;
          }
        });
        return final;
      },
      modifierType() {
        let final = 'button';
        this.type.forEach((mod) => {
          final = `${mod}`;
        });
        return final;
      },
      newRel() {
        if (this.target === '_blank') {
          return this.rel || 'noopener';
        }
        return this.rel;
      },
    },
  };
</script>
