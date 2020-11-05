<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
    >
      Address Form Example
    </cdr-text>

    <form class="form-example" novalidate>

      <cdr-select
        :required="true"
        v-model="country"
        :options="countryOpts"
        label="Country"
      />
      <cdr-input
        :required="true"
        v-model="fullName"
        label="Full name"
      />
      <cdr-input
        :required="true"
        v-model="address"
        label="Street address"
      />
      <cdr-input
        :optional="true"
        v-model="address2"
        label="Address line 2"
      />
      <cdr-input
        :required="true"
        v-model="postal"
        label="ZIP code"
        type="number"
        maxlength="5"
      />
      <cdr-input
        :required="true"
        v-model="city"
        label="City"
      />
      <cdr-select
        :required="true"
        v-model="state"
        :options="stateOpts"
        label="State"
      />
      <cdr-input
        :required="true"
        v-model="phone"
        label="Phone number"
        type="tel"
        maxlength="10"
        placeholder="(555)555-5555"
      >
        <template slot="helper-text-top">In case there's an issue with an order.</template>
      </cdr-input>

      <cdr-button @click="validate">
        Save
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
      countryOpts: ['Canada', 'Mexico', 'United States'],
      stateOpts: ['California', 'Florida', 'New York', 'Oregon', 'Texas', 'Washington', ],
      country: '',
      countryErr: false,
      fullName: '',
      fullNameErr: false,
      address: '',
      addressErr: false,
      address2: '',
      city: '',
      cityErr: false,
      state: '',
      stateErr: false,
      postal: '',
      postalErr: false,
      phone: '',
      phoneErr: false,
      backgroundColor: 'primary',
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
      // check if all the models have good content
      // vue forms patterns?
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
