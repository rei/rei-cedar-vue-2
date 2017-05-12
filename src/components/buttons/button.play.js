import { play } from 'vue-play';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import whiteAlternateButton from '../../examples/buttons/whiteAlternateButton';
import whiteAlternateButtonSmall from '../../examples/buttons/whiteAlternateButtonSmall';
import whiteAlternateButtonExtraSmall from '../../examples/buttons/whiteAlternateButtonExtraSmall';


play(Button, ButtonGroup)
  .name('cdr-button')
  .displayName('Button')
  .add('Disabled', {
    template: '<cdr-button disabled>Disabled</cdr-button>',
    readme: 'This is an example of a button with disabled state in the REI theme.',
  })
  .add('Default large', {
    template: '<cdr-button :handle-click="log">Default large</cdr-button>',
    methods: {
      log() {
        this.$log('Default button clicked');
      },
    },
    readme: 'This is the default large button in the REI theme.',
  })
  .add('Default small', {
    template: '<cdr-button :modifier="[\'small\']">Default small</cdr-button>',
    readme: 'This is the default small button in the REI theme.',
  })
  .add('Default extra small', {
    template: '<cdr-button :modifier="[\'extraSmall\']">Default extra small</cdr-button>',
    readme: 'This is the default extra small button in the REI theme.',
  })
  .add('Alternate default large', {
    template: '<cdr-button :modifier="[\'alternate\']">Alternate default large</cdr-button>',
    readme: 'This is the alternate default large button in the REI theme.',
  })
  .add('Alternate default small', {
    template: '<cdr-button :modifier="[\'alternate\', \'small\']">Alternate default small</cdr-button>',
    readme: 'This is the alternate default small button in the REI theme.',
  })
  .add('Alternate default extra small', {
    template: '<cdr-button :modifier="[\'alternate\', \'extraSmall\']">Alternate default extra small</cdr-button>',
    readme: 'This is the alternate default extra small button in the REI theme.',
  })
  .add('Secondary large', {
    template: '<cdr-button :handle-click="log" :type="[\'submit\']" :modifier="[\'secondary\']">Secondary large</cdr-button>',
    methods: {
      log() {
        this.$log('secondary button clicked');
      },
    },
    readme: 'This is the secondary large button in the REI theme.',
  })
  .add('Secondary small', {
    template: '<cdr-button :modifier="[\'secondary\', \'small\']">Secondary small</cdr-button>',
    readme: 'This is the secondary small button in the REI theme.',
  })
  .add('Secondary extra small', {
    template: '<cdr-button :modifier="[\'secondary\', \'extraSmall\']">Secondary extra small</cdr-button>',
    readme: 'This is the secondary extra small button in the REI theme.',
  })
  .add('Alternate secondary large', {
    ...whiteAlternateButton,
    template: '<cdr-button :modifier="[\'secondary-alternate\']">Alternate secondary large</cdr-button>',
    readme: 'This is the alternate secondary large button in the REI theme.',
  })
  .add('Alternate secondary small', {
    ...whiteAlternateButtonSmall,
    template: '<cdr-button :modifier="[\'secondary-alternate\', \'small\']">Alternate secondary small</cdr-button>',
    readme: 'This is the alternate secondary small button in the REI theme.',
  })
  .add('Alternate secondary extra small', {
    ...whiteAlternateButtonExtraSmall,
    template: '<cdr-button :modifier="[\'secondary-alternate\', \'extraSmall\']">Alternate secondary extra small</cdr-button>',
    readme: 'This is the alternate secondary extra small button in the REI theme.',
  })
  .add('Grouping', {
    template: `
    <cdr-button-group>
      <cdr-button>Primary large</cdr-button>
      <cdr-button :modifier="['secondary']">Secondary large</cdr-button>
    </cdr-button-group>`,
    readme: 'This is an example of button pairing of two or more buttons. In xs breakpoint, buttons will be at full width.',
  })
  .add('Button link', {
    template: '<cdr-button :modifier="[\'link\']">Button styled as link</cdr-button>',
    readme: 'This is a button styled as a link in the REI theme.',
  })
  .add('Button standalone link', {
    template: '<cdr-button :modifier="[\'standalone\']">Button styled as standalone link</cdr-button>',
    readme: 'This is a button styled as a standalone link in the REI theme.',
  })
  .add('Button component - link option', {
    template: '<cdr-button href="https://www.google.com/" target="_blank">Button component - link option</cdr-button>',
    readme: 'By adding an href with a url value on cdr-button component markup, will output link markup.',
  })
  ;
