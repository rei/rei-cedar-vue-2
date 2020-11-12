<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
    >
      Survey Example
    </cdr-text>
    <br><br>

    <form
      class="form-example"
      novalidate
    >

      <cdr-select
        label="Rate your experience"
        prompt="Choose one"
        v-model="experience"
        :error="experienceErr"
        @change="experienceErr = false"
        :background="backgroundColor"
        :required="true"
      >
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

      <cdr-form-group
        label="Which is most important?"
        :error="importantErr"
        :required="true"
      >
        <cdr-radio
          name="important"
          @change="importantErr = false"
          v-model="important"
          :error="importantErr"
          custom-value="mind"
          :background="backgroundColor"
        >
          Mind
        </cdr-radio>
        <cdr-radio
          name="important"
          @change="importantErr = false"
          v-model="important"
          :error="importantErr"
          custom-value="body"
          :background="backgroundColor"
        >
          Body
        </cdr-radio>
        <cdr-radio
          name="important"
          @change="importantErr = false"
          v-model="important"
          :error="importantErr"
          custom-value="spirit"
          :background="backgroundColor"
        >
          Spirit
        </cdr-radio>
      </cdr-form-group>

      <cdr-form-group
        label="What do you want more of?"
        :error="moreErr"
        :required="true"
      >
        <cdr-checkbox
          v-model="more"
          @change="moreErr = false"
          custom-value="potatoes"
          :error="moreErr"
          :background="backgroundColor"
        >
          Potatoes
        </cdr-checkbox>
        <cdr-checkbox
          v-model="more"
          @change="moreErr = false"
          custom-value="apples"
          :error="moreErr"
          :background="backgroundColor"
        >
          Apples
        </cdr-checkbox>
        <cdr-checkbox
          v-model="more"
          @change="moreErr = false"
          custom-value="carrots"
          :error="moreErr"
          :background="backgroundColor"
        >
          Carrots
        </cdr-checkbox>
      </cdr-form-group>

      <cdr-input
        :rows="3"
        label="Anything else we should know?"
        :background="backgroundColor"
        :optional="true"
      />

      <cdr-button
        @click="validate"
        type="submit"
      >
        Submit
      </cdr-button>

    </form>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'SurveyForm',
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
.form-example {
  width: 640px;
}
</style>
