
export default {
  inserted(element, binding) {
    const shape = document.createElement('span');
    const base = 'mountain-shape';
    const el = element;
    const mods = binding.modifiers;
    shape.classList.add(base);
    el.style.position = 'relative';

    if (mods.top) { shape.classList.add(`${base}--top`); }
    if (mods.bottom) { shape.classList.add(`${base}--bottom`); }
    if (mods.left) { shape.classList.add(`${base}--left`); }
    if (mods.right) { shape.classList.add(`${base}--right`); }
    if (mods.center) { shape.classList.add(`${base}--center`); }

    el.appendChild(shape);
  },
};
