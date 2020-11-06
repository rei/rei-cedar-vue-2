<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
    >
      Payment Form Example
    </cdr-text>

    <form
      class="form-example"
      novalidate
    >
      <cdr-input
        :required="true"
        v-model="creditCard"
        type="number"
        label="Credit card"
      />
      <cdr-select
        :required="true"
        v-model="month"
        :options="monthOpts"
        prompt="Month"
        label="Expiration Month"
      />
      <cdr-select
        :required="true"
        v-model="year"
        :options="yearOpts"
        label="Expiration year"
      />
      <cdr-input
        :required="true"
        v-model="securityCode"
        label="Security Code"
        type="number"
      >
        <template slot="info">
          <cdr-popover>
            <cdr-link
              slot="trigger"
              tag="button"
              modifier="standalone"
            >
              Where?
            </cdr-link>
            Where to find the magic numbers
          </cdr-popover>
        </template>
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
      monthOpts: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
      ],
      yearOpts: [
        '2020', '2021', '2022', '2023', '2024', '2025',
        '2026', '2027', '2028', '2029', '2030',
      ],
      creditCard: '',
      creditCardErr: '',
      month: '',
      monthErr: '',
      year: '',
      yearErr: '',
      securityCode: '',
      securityCodeErr: '',
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
