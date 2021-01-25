import { computed } from 'vue';
import { buildClass } from '../../utils/buildClass';

export default function (base, prop, style) {
  const propClass = computed(() => buildClass(base, prop, style));
  return {
    propClass,
  }
}
