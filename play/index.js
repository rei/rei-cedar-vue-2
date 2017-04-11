import '../release/cedar.min.css';

const load = requireContext => requireContext.keys().map(requireContext);

// load files which end with `.play.js` in `../src/components` folder
load(require.context('../src/components', true, /.play.js$/));
