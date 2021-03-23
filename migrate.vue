<script>
export default {
  name: 'vue-2-component',
  props: {
    qux: String,
  },
  data() {
    return {
      baz: true,
    }
  },
  methods: {
    foo(x) {
      return x * 2;
    }
  },
  watch: {
    qux() {
      this.baz = !this.baz;
    }
  },
  computed: {
    bar() {
      return `Foo Bar Baz ${this.qux}`;
    }
  }
}
</script>



<script>
import { defineComponent, ref, computed, watch }
export default defineComponent({
  name: 'vue-3-component',
  props: {
    qux: String,
  },
  setup(props, { slots, attrs, emit }) {
    // replace `data` props with refs
    const baz = ref(true);

    // replace methods with anonymous functions
    const foo = (x) => {
      return x * 2
    }

    const bar = computed(() => `Foo Bar Baz ${props.qux}`)

    // watch for changes to a prop and do something in response
    watch(props.qux, () => {
      // Must use `.value` to access or set the value of a ref in setup
      baz.value = !baz.value
    })

// Return anything you need access to in the template.
// anything passed in as `props` will be automatically available
    return {
      baz,
      foo,
      bar,
    }
  }
  data() {
    return {
      baz: true,
    }
  },
  methods: {
    foo(x) {
      return x * 2;
    }
  },
  watch: {
    qux() {
      this.baz = !this.baz;
    }
  },
  computed: {
    bar() {
      return `Foo Bar Baz ${this.qux}`;
    }
  }
});
</script>
