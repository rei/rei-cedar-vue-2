<script>
  export default {
    name: 'cdr-select',
    render() {
      return this.genInputGroup(this.genSelect(), { attrs: { tabindex: -1 } });
    },
    data() {
      return {
        val: this.value,
      };
    },
    props: {
      /** @ignore */
      value: {
        required: false,
      },
      /**
       * Label text.
      */
      label: String,
      /**
       * id for the select that is mapped to the label 'for' attribute.
       * If one is not provided, it will be generated.
      */
      id: String,
      /**
       * Sets disabled attribute on the select.
      */
      disabled: Boolean,
      /**
       * Sets name attribute of the select.
      */
      name: String,
      /**
       * Sets required attribute on the select.
      */
      required: Boolean,
      /**
       * Sets autofocus attribute on the select.
      */
      autofocus: Boolean,
      /**
       * Sets multiple attribute on the select.
      */
      multiple: Boolean,
      /**
       * The number of options to show.
      */
      size: String,
      /**
       * Removes the label element but sets the select 'aria-label' to `label` text for a11y.
      */
      hideLabel: Boolean,
      /**
       * Adds an option that is disabled and selected by default to serve as a 'placeholder'
      */
      prompt: String,

    },
    computed: {
      // Use given id or generate one
      selectId() {
        return this.id ? this.id : this._uid; // eslint-disable-line no-underscore-dangle
      },
    },
    mounted() {
      // initialize options as selected if multiple
      if (this.multiple) {
        const opts = Array.from(this.$refs.select.options);
        opts.forEach((opt) => {
          const o = opt;
          if (this.val.indexOf(o.value) !== -1) {
            o.selected = true;
          }
        });
      }
    },
    methods: {
      onChange(e) {
        if (this.multiple) {
          const optArr = Array.from(e.target.options);
          const selected = optArr.filter(o => o.selected === true).map(o => o.value);
          this.val = e.target.value;
          this.$emit('input', selected);
        } else {
          this.val = e.target.value;
          this.$emit('input', e.target.value);
        }
      },
      genSelect() {
        const tag = 'select';
        const options = [];

        const data = {
          class: {
            'cdr-select': true,
            'cdr-select--size': parseInt(this.size, 10) > 0,
          },
          domProps: {
            id: this.selectId,
            disabled: this.disabled,
            required: this.required,
            value: this.val,
            autofocus: this.autofocus,
            multiple: this.multiple,
            size: this.size,
            name: this.name,
          },
          attrs: {
            tabindex: this.tabindex,
          },
          on: {
            // blur: this.blur,
            // focus: this.focus,
            input: this.onChange,
          },
          ref: 'select',
        };

        // conditional domProps and attrs
        if (this.hideLabel) data.attrs['aria-label'] = this.label;
        if (this.name) data.attrs.name = this.name;
        if (this.form) data.attrs.form = this.form;

        if (this.prompt) {
          options.push(this.$createElement('option', {
            domProps: {
              disabled: true,
              hidden: !this.multiple,
              value: '',
            },
          }, this.prompt || ''));
        }

        options.push(this.$slots.default);

        const children = [this.$createElement(tag, data, options)];

        return children;
      },
      genLabel() {
        let labelText = this.label;

        if (this.required) labelText += '*';

        const data = {
          class: {
            'cdr-label': true,
            'cdr-label--disabled': this.disabled,
          },
          attrs: {
            for: this.selectId,
          },
          ref: 'label',
        };

        return this.$createElement('label', data, labelText);
      },
      genInputGroup(select, dataArg = {}) {
        const children = [];
        let data = dataArg;

        data = Object.assign({}, {
          class: {
            'cdr-input-group': true,
          },
        }, data);

        // Add label
        if (!this.hideLabel) {
          children.push(this.genLabel());
        }

        // add select
        children.push(select);

        return this.$createElement('div', data, children);
      },
    },
  };
</script>
