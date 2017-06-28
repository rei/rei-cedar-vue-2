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
      value: {
        required: false,
      },
      label: String,
      id: String,
      disabled: Boolean,
      required: Boolean,
      autofocus: Boolean,
      multiple: Boolean,
      hideLabel: Boolean,
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
        this.$emit('input', e.target.value);
      },
      genSelect() {
        const tag = 'select';

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

        const children = [this.$createElement(tag, data, this.$slots.default)];

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
