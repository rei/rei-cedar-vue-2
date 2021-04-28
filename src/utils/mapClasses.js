export default function mapClasses(style, ...classes) {
  return classes.reduce((acc, el) => acc.concat((el || '').split(' ')), [])
    .map((className) => style[className])
    .filter((x) => x)
    .join(' ');
}
// TODO: make mapClasses available in every template?
