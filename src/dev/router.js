import App from 'srcdir/App';
import Examples from 'componentsdir/examples';

import KitchenSink from 'srcdir/dev/KitchenSink';

// Extra paths for backstop.
//  These are smaller sections of larger demo pages to make screenshotting more reliable
import DefaultButtons from 'componentsdir/button/examples/demo/Default';
import FullWidthButtons from 'componentsdir/button/examples/demo/FullWidth';
import IconButtons from 'componentsdir/button/examples/demo/Icons';
import SecondaryButtons from 'componentsdir/button/examples/demo/Secondary';

import InsetUtilities from 'componentsdir/Utilities/demos/inset';
import PaddingSpacingUtilities from 'componentsdir/Utilities/demos/paddingSpacing';
import MarginSpacingUtilities from 'componentsdir/Utilities/demos/marginSpacing';
import ContainerUtilities from 'componentsdir/Utilities/demos/container';
import AlignUtilities from 'componentsdir/Utilities/demos/align';
import VisibilityUtilities from 'componentsdir/Utilities/demos/visibility';

import AddressForm from 'componentsdir/Form/AddressForm';
import LoginForm from 'componentsdir/Form/LoginForm';
import PaymentForm from 'componentsdir/Form/PaymentForm';
import SurveyForm from 'componentsdir/Form/SurveyForm';

const routes = [
  { path: '/', name: ' ', component: App },
  { path: '/kitchen-sink', name: 'KitchenSink', component: KitchenSink },
  { path: '/utilities', name: 'Utilities', component: Examples.utilities },
  { path: '/accordion', name: 'Accordion', component: Examples.accordion },
  { path: '/alert', name: 'Alert', component: Examples.alert },
  { path: '/breadcrumbs', name: 'Breadcrumb', component: Examples.breadcrumb },
  { path: '/buttons', name: 'Buttons', component: Examples.button },
  { path: '/captions', name: 'Captions', component: Examples.caption },
  { path: '/cards', name: 'Cards', component: Examples.card },
  { path: '/checkboxes', name: 'CheckBoxes', component: Examples.checkbox },
  { path: '/cta', name: 'CTA', component: Examples.cta },
  { path: '/formGroups', name: 'Form Groups', component: Examples.formGroup },
  { path: '/grids', name: 'Grids', component: Examples.grid },
  { path: '/icons', name: 'Icons', component: Examples.icon },
  { path: '/images', name: 'Images', component: Examples.image },
  { path: '/inputs', name: 'Input', component: Examples.input },
  { path: '/links', name: 'Links', component: Examples.link },
  { path: '/lists', name: 'Lists', component: Examples.list },
  { path: '/modals', name: 'Modals', component: Examples.modal },
  { path: '/pagination', name: 'Pagination', component: Examples.pagination },
  { path: '/popover', name: 'Popover', component: Examples.popover },
  { path: '/quotes', name: 'Quotes', component: Examples.quote },
  { path: '/radios', name: 'Radios', component: Examples.radio },
  { path: '/ratings', name: 'Ratings', component: Examples.rating },
  { path: '/selects', name: 'Selects', component: Examples.select },
  { path: '/tables', name: 'Tables', component: Examples.table },
  { path: '/tabs', name: 'Tabs', component: Examples.tabs },
  { path: '/texts', name: 'Texts', component: Examples.text },
  { path: '/tooltip', name: 'Tooltip', component: Examples.tooltip },

  { path: '/default-buttons', component: DefaultButtons },
  { path: '/secondary-buttons', component: SecondaryButtons },
  { path: '/full-width-buttons', component: FullWidthButtons },
  { path: '/icon-buttons', component: IconButtons },
  { path: '/padding-spacing-utilities', component: PaddingSpacingUtilities },
  { path: '/margin-spacing-utilities', component: MarginSpacingUtilities },
  { path: '/inset-utilities', component: InsetUtilities },
  { path: '/container-utilities', component: ContainerUtilities },
  { path: '/align-utilities', component: AlignUtilities },
  { path: '/visibility-utilities', component: VisibilityUtilities },


  { path: '/address-form', component: AddressForm },
  { path: '/login-form', component: LoginForm },
  { path: '/survey-form', component: SurveyForm },
  { path: '/payment-form', component: PaymentForm },
];

export default routes;
