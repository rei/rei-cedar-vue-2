<template>
</template>
<script>
import { defineComponent, computed } from 'vue';
import { buildClass } from '../../utils/buildClass'
import propValidator from '../../utils/propValidator';

const modifierClass = computed(() => buildClass('cdr-radio', props.modifier, style));
const sizeClass = computed(() => props.size && buildClass('cdr-radio', props.size, style));
</script>
