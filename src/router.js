import App from 'srcdir/App';
import Accordions from 'componentsdir/accordion/examples/Accordion';
import Breadcrumb from 'componentsdir/breadcrumb/examples/Breadcrumb';
import Buttons from 'componentsdir/button/examples/Buttons';
import DefaultButtons from 'componentsdir/button/examples/demo/Default';
import FullWidthButtons from 'componentsdir/button/examples/demo/FullWidth';
import IconButtons from 'componentsdir/button/examples/demo/Icons';
import SecondaryButtons from 'componentsdir/button/examples/demo/Secondary';
import Captions from 'componentsdir/caption/examples/Caption';
import Cards from 'componentsdir/card/examples/Cards';
import CheckBoxes from 'componentsdir/checkbox/examples/checkboxes';
import Cta from 'componentsdir/cta/examples/Cta';
import DataTables from 'componentsdir/dataTable/examples/DataTable';
import Grids from 'componentsdir/grid/examples/Grid';
import Icons from 'componentsdir/icon/examples/Icons';
import Images from 'componentsdir/image/examples/Images';
import Input from 'componentsdir/input/examples/Inputs';
import KitchenSink from 'srcdir/KitchenSink';
import Links from 'componentsdir/link/examples/Links';
import Lists from 'componentsdir/list/examples/Lists';
import Pagination from 'componentsdir/pagination/examples/Pagination';
import Quotes from 'componentsdir/quote/examples/Quote';
import Radios from 'componentsdir/radio/examples/Radios';
import Ratings from 'componentsdir/rating/examples/Ratings';
import Selects from 'componentsdir/select/examples/Selects';
import Tabs from 'componentsdir/tabs/examples/Tabs';
import Texts from 'componentsdir/text/examples/Text';
import Utilities from 'componentsdir/Utilities/Utilities';
import InsetUtilities from 'componentsdir/Utilities/demos/inset';
import SpacingUtilities from 'componentsdir/Utilities/demos/spacing';
import ContainerUtilities from 'componentsdir/Utilities/demos/container';
import AlignUtilities from 'componentsdir/Utilities/demos/align';
import VisibilityUtilities from 'componentsdir/Utilities/demos/visibility';


const routes = [
  { path: '/', component: App },
  { path: '/utilities', name: 'Utilities', component: Utilities },
  { path: '/links', name: 'Links', component: Links },
  { path: '/kitchen-sink', name: 'KitchenSink', component: KitchenSink },
  { path: '/accordion', name: 'Accordion', component: Accordions },
  { path: '/breadcrumbs', name: 'Breadcrumb', component: Breadcrumb },
  { path: '/buttons', name: 'Buttons', component: Buttons },
  { path: '/captions', name: 'Captions', component: Captions },
  { path: '/cards', name: 'Cards', component: Cards },
  { path: '/checkboxes', name: 'CheckBoxes', component: CheckBoxes },
  { path: '/cta', name: 'CTA', component: Cta },
  { path: '/dataTables', name: 'Data Tables', component: DataTables },
  { path: '/grids', name: 'Grids', component: Grids },
  { path: '/icons', name: 'Icons', component: Icons },
  { path: '/images', name: 'Images', component: Images },
  { path: '/inputs', name: 'Input', component: Input },
  { path: '/lists', name: 'Lists', component: Lists },
  { path: '/pagination', name: 'Pagination', component: Pagination },
  { path: '/quotes', name: 'Quotes', component: Quotes },
  { path: '/radios', name: 'Radios', component: Radios },
  { path: '/ratings', name: 'Ratings', component: Ratings },
  { path: '/selects', name: 'Selects', component: Selects },
  { path: '/tabs', name: 'Tabs', component: Tabs },
  { path: '/texts', name: 'Texts', component: Texts },
  { path: '/default-buttons', name: 'Default Buttons', component: DefaultButtons },
  { path: '/secondary-buttons', name: 'Secondary Buttons', component: SecondaryButtons },
  { path: '/full-width-buttons', name: 'FullWidth Buttons', component: FullWidthButtons },
  { path: '/icon-buttons', name: 'Icon Buttons', component: IconButtons },
  { path: '/spacing-utilities', name: 'Spacing Utilities', component: SpacingUtilities },
  { path: '/inset-utilities', name: 'Inset Utilities', component: InsetUtilities },
  { path: '/container-utilities', name: 'Container Utilities', component: ContainerUtilities },
  { path: '/align-utilities', name: 'Align Utilities', component: AlignUtilities },
  { path: '/visibility-utilities', name: 'Visibility Utilities', component: VisibilityUtilities },
];

export default routes;
