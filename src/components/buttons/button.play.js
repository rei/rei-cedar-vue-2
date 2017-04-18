import { play } from 'vue-play';
import Button from './Button';
import whiteAlternateButton from '../../examples/Button/whiteAlternateButton';
import whiteAlternateButtonSmall from '../../examples/Button/whiteAlternateButtonSmall';
import whiteAlternateButtonExtraSmall from '../../examples/Button/whiteAlternateButtonExtraSmall';


play(Button)
  .name('cdr-button')
  .displayName('Button')
  .add('Disabled', {
    template: '<cdr-button disabled>Disabled</cdr-button>',
    readme: 'This is an example of a button with disabled state in the REI theme.',
  })
  .add('Primary large', {
    template: '<cdr-button :handle-click="log">Primary large</cdr-button>',
    methods: {
      log() {
        this.$log('primary button clicked');
      },
    },
    readme: 'This is the primary large button in the REI theme.',
  })
  .add('Primary small', {
    template: '<cdr-button :modifier="[\'small\']">Primary small</cdr-button>',
    readme: 'This is the primary small button in the REI theme.',
  })
  .add('Primary extra small', {
    template: '<cdr-button :modifier="[\'extraSmall\']">Primary extra small</cdr-button>',
    readme: 'This is the primary extra small button in the REI theme.',
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
  .add('Black alternate (contrast) large', {
    template: '<cdr-button :modifier="[\'blackAlternate\']">Black alternate large</cdr-button>',
    readme: 'This is the black alternate (contrast) large button in the REI theme.',
  })
  .add('Black alternate (contrast) small', {
    template: '<cdr-button :modifier="[\'blackAlternate\', \'small\']">Black alternate small</cdr-button>',
    readme: 'This is the black alternate (contrast) large button in the REI theme.',
  })
  .add('Black alternate (contrast) extra small', {
    template: '<cdr-button :modifier="[\'blackAlternate\', \'extraSmall\']">Black alternate extra small</cdr-button>',
    readme: 'This is the black alternate (contrast) large button in the REI theme.',
  })
  .add('White alternate (contrast) large', {
    ...whiteAlternateButton,
    template: '<cdr-button :modifier="[\'whiteAlternate\']">White alternate large</cdr-button>',
    readme: 'This is the white alternate (contrast) large button in the REI theme.',
  })
  .add('White alternate (contrast) small', {
    ...whiteAlternateButtonSmall,
    template: '<cdr-button :modifier="[\'whiteAlternate\', \'small\']">White alternate small</cdr-button>',
    readme: 'This is the white alternate (contrast) small button in the REI theme.',
  })
  .add('White alternate (contrast) extra small', {
    ...whiteAlternateButtonExtraSmall,
    template: '<cdr-button :modifier="[\'whiteAlternate\', \'extraSmall\']">White alternate extra small</cdr-button>',
    readme: 'This is the white alternate (contrast) extra small button in the REI theme.',
  })
  .add('Grouping', {
    template: `
    <div class="cdr-btnGroup">
      <cdr-button>Primary large</cdr-button>
      <cdr-button :modifier="['secondary']">Secondary large</cdr-button>
    </div>`,
    readme: 'This is an example of button pairing of two or more buttons. In xs breakpoint, buttons will be at full width.',
  })
  .add('Button link', {
    template: '<cdr-button data-backstop="cdr-button--link" :modifier="[\'link\']">Button styled as link</cdr-button>',
    readme: 'This is a button styled as a link in the REI theme.',
  })
  .add('Button standalone link', {
    template: '<cdr-button data-backstop="cdr-button--link-standalone" :modifier="[\'link\', \'link-standalone\']">Button styled as standalone link</cdr-button>',
    readme: 'This is a button styled as a standalone link in the REI theme.',
  })
  .add('Button component - link option', {
    template: '<cdr-button data-backstop="cdr-button cdr-link" href="https://www.google.com/" target="_blank">Button component - link option</cdr-button>',
    readme: 'By adding an href with a url value on cdr-button component markup, will output link markup.',
  })
  ;
