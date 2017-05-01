<template>
  <button class="cdr-button" :class="modifierClass" :type="type" @click="handleClick" v-if="!href">

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
        type: String,
        required: false,
        default: 'button',
        validator: value => (['button', 'submit', 'reset'].indexOf(value) >= 0) || false,
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
      newRel() {
        if (this.target === '_blank') {
          return this.rel || 'noopener';
        }
        return this.rel;
      },
    },
  };
</script>
