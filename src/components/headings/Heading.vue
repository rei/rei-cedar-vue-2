<script>
export default {
  name: 'cdr-heading',
  functional: true,
  render(createElement, context) {
    const contextObj = context;
    const staticClass = contextObj.data.staticClass;
    const appearance = contextObj.props.appearance;
    const appClass = appearance ? `cdr-h${appearance}` : `cdr-h${contextObj.props.level}`;
    contextObj.data.staticClass = staticClass ? `${staticClass} ${appClass}` : `${appClass}`;

    return createElement(
      `h${contextObj.props.level}`,
      contextObj.data,
      contextObj.children,
    );
  },
  props: {
    level: {
      type: Number,
      required: true,
      validator: value => (value > 0 && value <= 6) || false,
    },
    appearance: {
      type: Number,
      validator: value => (value > 0 && value <= 6) || false,
    },
  },
};
</script>
