const load = requireContext => requireContext.keys().map(requireContext);

// load files which end with `.play.js` in `../src/components` folder
load(require.context('../src/components', true, /.play.js$/));
load(require.context('../src/css', false, /main.postcss$/));
load(require.context('../static', false, /fonts.min.css$/));
