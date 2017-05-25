const load = requireContext => requireContext.keys().map(requireContext);

// load files which end with `.play.js` in `../src/examples` folder
load(require.context('../src/examples', true, /.play.js$/));
load(require.context('../src/css', false, /main.postcss$/));
