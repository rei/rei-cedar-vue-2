export default function debounce(func, wait) {
  let timeout;
  return function (...args) { // eslint-disable-line func-names
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
