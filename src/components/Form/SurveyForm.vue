<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
    >
      Survey Example
    </cdr-text>

    <form class="form-example" novalidate>

      <cdr-select label="Rate your experience" prompt="Choose one" v-model="experience" :error="experienceErr" @change="experienceErr = false">
        <option value="good">
          Good
        </option>
        <option value="great">
          Great
        </option>
        <option value="what">
          What?
        </option>
      </cdr-select>

      <cdr-form-group label="Which is most important?" :error="importantErr">
        <cdr-radio name="important" @change="importantErr = false" v-model="important" :error="importantErr" custom-value="mind">Mind</cdr-radio>
        <cdr-radio name="important" @change="importantErr = false" v-model="important" :error="importantErr" custom-value="body">Body</cdr-radio>
        <cdr-radio name="important" @change="importantErr = false" v-model="important" :error="importantErr" custom-value="spirit">Spirit</cdr-radio>
      </cdr-form-group>

      <cdr-form-group label="What do you want more of?" :error="moreErr">
        <cdr-checkbox v-model="more" @change="moreErr = false" custom-value="potatoes" :error="moreErr">Potatoes</cdr-checkbox>
        <cdr-checkbox v-model="more" @change="moreErr = false" custom-value="apples" :error="moreErr">Apples</cdr-checkbox>
        <cdr-checkbox v-model="more" @change="moreErr = false" custom-value="carrots" :error="moreErr">Carrots</cdr-checkbox>
      </cdr-form-group>

      <cdr-input :rows="3" label="Anything else we should know?"/>

      <cdr-button @click="validate" type="submit">
        Submit
      </cdr-button>

    </form>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Form',
  components: {
    ...Components,
  },
  data() {
    return {
      backgroundColor: 'primary',
      important: '',
      importantErr: false,
      experience: '',
      experienceErr: false,
      more: [],
      moreErr: false,
    };
  },
  watch: {
    $route(to) {
      this.setBackground(to.query.background);
    },
  },
  mounted() {
    this.setBackground(this.$router.currentRoute.query.background);
  },
  methods: {
    validate() {
      if (!this.important.length) {
        this.importantErr = 'Please tell us what is important to you';
      }
      if (!this.experience.length) {
        this.experienceErr = 'Please tell us about your experience';
      }
      if (!this.more.length) {
        this.moreErr = 'Please tell us what you want';
      }
    },
    setBackground(background) {
      switch (background) {
        case 'primary':
          this.backgroundColor = 'primary';
          break;
        case 'secondary':
          this.backgroundColor = 'secondary';
          break;
        default:
          this.backgroundColor = 'primary';
      }
    },
  },
};
</script>
<style>
/*
TODO:
- how to deal with width/layout...grid?



*/
.form-example {
  width: 640px;
}
</style>
