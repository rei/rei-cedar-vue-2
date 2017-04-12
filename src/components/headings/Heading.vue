<script>
export default {
  name: 'cdr-heading',
  functional: true,
  render(createElement, context) {
    return createElement(
      `h${context.props.level}`,
      context.children,
    );
  },
  props: {
    level: {
      type: Number,
      required: true,
      validator: value => (value > 0 && value <= 6) || false,
    },
  },
};
</script>
