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
    methods: {
      onChange(e) {
        this.val = e.target.value;
        console.log(e);
        this.$emit('input', e.target.value);
      },
      genSelect() {
        const tag = 'select';
        const options = [];

        const data = {
          class: {
            'cdr-select': true,
          },
          domProps: {
            id: this.selectId,
            disabled: this.disabled,
            required: this.required,
            value: this.val,
            autofocus: this.autofocus,
            multiple: this.multiple,
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
              selected: true,
              disabled: true,
            },
          }, this.prompt));
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
        // const wrapperChildren = [];
        let data = dataArg;

        const inputGroupClasses = Object.assign({
          'cdr-input-group': true,
        });

        data = Object.assign({}, {
          class: inputGroupClasses,
        }, data);

        // Add label
        if (!this.hideLabel) {
          children.push(this.genLabel());
        }

        children.push(select);
        // wrapperChildren.push(input);

        // children.push(
        //   this.$createElement('div', {
        //     class: {
        //       'cdr-input-validation': true,
        //     },
        //   }, wrapperChildren),
        // );

        return this.$createElement('div', data, children);
      },
    },
  };
</script>
