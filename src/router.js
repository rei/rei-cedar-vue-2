// import Buttons from 'componentsdir/button/examples/Buttons';
// import Cards from 'componentsdir/card/examples/Cards';
// import CheckBoxes from 'componentsdir/checkbox/examples/checkboxes';
// import Cta from 'componentsdir/cta/examples/Cta';
// import DataTables from 'componentsdir/dataTable/examples/DataTable';
// import Grids from 'componentsdir/grid/examples/Grid';
// import Icons from 'componentsdir/icon/examples/Icons';
// import Images from 'componentsdir/image/examples/Images';
// import Links from 'componentsdir/link/examples/Links';
// import Pagination from 'componentsdir/pagination/examples/Pagination';
// import Quotes from 'componentsdir/quote/examples/Quote';
// import Radios from 'componentsdir/radio/examples/Radios';
// import Ratings from 'componentsdir/rating/examples/Ratings';
// import Selects from 'componentsdir/select/examples/Selects';
// import Tabs from 'componentsdir/tabs/examples/Tabs';
// import Texts from 'componentsdir/text/examples/Text';
// import Input from 'componentsdir/input/examples/Inputs';

// import Captions from 'compositionsdir/caption/examples/Caption';
// import Searches from 'compositionsdir/search/examples/searchbox';
import App from 'srcdir/App';
import Accordions from 'componentsdir/accordion/examples/Accordion';
import Breadcrumb from 'componentsdir/breadcrumb/examples/Breadcrumb';
import Buttons from 'componentsdir/button/examples/Buttons';
import Captions from 'componentsdir/caption/examples/Caption';
import Cta from 'componentsdir/cta/examples/Cta';
import Links from 'componentsdir/link/examples/Links';
import Lists from 'componentsdir/list/examples/Lists';

const routes = [
  { path: '/', component: App },
  { path: '/accordion', name: 'Accordion', component: Accordions },
  { path: '/breadcrumbs', name: 'Breadcrumb', component: Breadcrumb },
  { path: '/buttons', name: 'Buttons', component: Buttons },
  // { path: '/cards', name: 'Cards', component: Cards },
  // { path: '/checkboxes', name: 'CheckBoxes', component: CheckBoxes },
  { path: '/captions', name: 'Captions', component: Captions },
  { path: '/cta', name: 'CTA', component: Cta },
  // { path: '/dataTables', name: 'Data Tables', component: DataTables },
  // { path: '/grids', name: 'Grids', component: Grids },
  // { path: '/icons', name: 'Icons', component: Icons },
  // { path: '/images', name: 'Images', component: Images },
  { path: '/links', name: 'Links', component: Links },
  { path: '/lists', name: 'Lists', component: Lists },
  // { path: '/inputs', name: 'Input', component: Input },
  // { path: '/pagination', name: 'Pagination', component: Pagination },
  // { path: '/quotes', name: 'Quotes', component: Quotes },
  // { path: '/radios', name: 'Radios', component: Radios },
  // { path: '/ratings', name: 'Ratings', component: Ratings },
  // { path: '/selects', name: 'Selects', component: Selects },
  // { path: '/tabs', name: 'Tabs', component: Tabs },
  // { path: '/texts', name: 'Texts', component: Texts },
  // { path: '/captions', name: 'Captions', component: Captions },
  // { path: '/searches', name: 'Searches', component: Searches },
];

export default routes;
