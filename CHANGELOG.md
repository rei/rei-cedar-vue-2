# [4.0.0](https://github.com/rei/rei-cedar/compare/v3.0.4...v4.0.0) (2020-01-15)


### Bug Fixes

* **accordion example:** the default font has changed from body-300 to utility-300 and examples that ([1bd7925](https://github.com/rei/rei-cedar/commit/1bd7925960cb6e59c90fc732348d4e78258b940a))
* **breadcrumb:** add aria label to last breadcrumb ([798db9f](https://github.com/rei/rei-cedar/commit/798db9fbf8a3e0d7228c8faae197003bb4863829))
* **breadcrumb:** apply focus to first breadcrumb on ellipses click ([2248ca1](https://github.com/rei/rei-cedar/commit/2248ca1d924d361bf527a810f6c7524f2a127486))
* **breadcrumb:** re-evaluate truncation logic when items updates ([5d6ebb7](https://github.com/rei/rei-cedar/commit/5d6ebb79029b13013a035ccce8dcd2eef97e041f))
* **breadcrumb:** revert aria-current change. current page should not be in breadcrumb ([e5743b2](https://github.com/rei/rei-cedar/commit/e5743b25ff1be8416887876695eafed2f97e9052))
* **build:** remove [@import](https://github.com/import) url statements from compiled CSS ([b35db77](https://github.com/rei/rei-cedar/commit/b35db7778e2c8cba6940d18accb587f22b0e1bab))
* **ci:** move codecov to its own command ([a2039b1](https://github.com/rei/rei-cedar/commit/a2039b1d55cc0944642dada92bfa879311c9ce2b))
* **css:** fix internal css imports ([39d2970](https://github.com/rei/rei-cedar/commit/39d2970e0a80445f63493a927e2553ddd84b4acb))
* **css:** give hide-figure a higher precedence than size ([e02f56c](https://github.com/rei/rei-cedar/commit/e02f56c82c3f78a2b0291c7162355adf2aa09d13))
* **css:** remove tabindex -1 focus override from reset ([4e6bcd2](https://github.com/rei/rei-cedar/commit/4e6bcd227b3bfe382e2f83e96f7e29a8ccd5588d))
* **dev:** build main.scss into dev ([3781c3a](https://github.com/rei/rei-cedar/commit/3781c3ad333de20c4b2d6aa93363ae079d78d30a))
* **dev:** remove `inject` setting, as it is already controlled by `extract` ([3fc6c9a](https://github.com/rei/rei-cedar/commit/3fc6c9a92ab81bebd046350b19c23db6bcac36ac))
* **grid:** disable pointer events on row to prevent click blocking due to negative margin ([48e7d02](https://github.com/rei/rei-cedar/commit/48e7d02a97e662d443db8925d32b56172c45ca0a))
* **heading specificity:** visual regression showed bug for headings in responsive flow not haveing t ([3d4c110](https://github.com/rei/rei-cedar/commit/3d4c110ed2dc171f6d281ff14e8abbb9ac4f91b9))
* **list:** make inline lists wrap and hide list decorator entirely for first item ([c880153](https://github.com/rei/rei-cedar/commit/c88015370f9895db25b3764d7f2dd11d6a283e59))
* **modal:** ie11 close modal with Esc ([b33aa9e](https://github.com/rei/rei-cedar/commit/b33aa9e43867d58319924b857e6a8cd1584bb8f8))
* **modal:** inline cedar icon ([42a3af6](https://github.com/rei/rei-cedar/commit/42a3af65fadaa53ae20a148f796c93e4192af7b3))
* **modal:** update noscroll class to fix Safari overlay bug ([da5cc8d](https://github.com/rei/rei-cedar/commit/da5cc8ded2a556a456442a7b8e126e7569f8527c))
* **pagination:** remove select max-width ([4e9fe86](https://github.com/rei/rei-cedar/commit/4e9fe86d0e8b36c65fc9c07ec2ed77227ea81b34))
* **pagination:** use scoped slot for vue-router ([0142166](https://github.com/rei/rei-cedar/commit/01421661469c789abdbfe6403fb34507f63d94a2))
* **pagination:** wip fixing pagination race condition with routing ([d891e50](https://github.com/rei/rei-cedar/commit/d891e5057c14a0e62910b541010fb5f714976109))
* **rating:** make count default to `null` ([2dfdf29](https://github.com/rei/rei-cedar/commit/2dfdf2935275354a1cb33c984ad6272666a3d545))
* **tabs:** add IDs to tabs examples ([965ef49](https://github.com/rei/rei-cedar/commit/965ef499d030cde1dde833bbfd820a2f8ad25a55))
* **tabs:** fix underline rendering on mount ([ca5ac1c](https://github.com/rei/rei-cedar/commit/ca5ac1ce8be09902ba69091b9faec309051da723))
* **tabs:** hide horizontal scrollbar in chrome ([153fc0d](https://github.com/rei/rei-cedar/commit/153fc0da2c7cfcf1831722badc0500efe67834a1))
* **tabs:** load TabPanel CSS inside Tabs ([452b825](https://github.com/rei/rei-cedar/commit/452b825a87aec2ac389e41d0c0093e7817395f74))
* **tabs:** move underline into gradient container ([90642f6](https://github.com/rei/rei-cedar/commit/90642f666c9f090fd6ef48aa05b410b3d9057026))
* **tabs:** re-organize tabs mounting logic ([50d5263](https://github.com/rei/rei-cedar/commit/50d52632d6456937ff7a82068d9d409b78f0e926))
* **tabs:** update snapshots ([10fc1fb](https://github.com/rei/rei-cedar/commit/10fc1fb16f6b21e08260ed022674b279540592b5))
* **test:** make backstop tests more reliable ([da93a36](https://github.com/rei/rei-cedar/commit/da93a3615ab68a0eedf068a1b5057256e35b53c2))
* **test:** switch backstop driver from chromy to puppeteer ([9097796](https://github.com/rei/rei-cedar/commit/90977967ea8a64c032e98392ce933615709e2491))
* **test:** update broken backstop tests ([948825e](https://github.com/rei/rei-cedar/commit/948825eb221e3cee9f59af83d4211621dc1b8793))
* **test:** update chromedriver ([21c5024](https://github.com/rei/rei-cedar/commit/21c50244adfb5a9a1ce4e203fb88fa1df5e84e46))
* **test:** update jest snapshots for pagination and icons updates ([52308e6](https://github.com/rei/rei-cedar/commit/52308e62991b8829a3dd6f78dce9dd877f03d060))
* **tests:** update tests ([67e8294](https://github.com/rei/rei-cedar/commit/67e82948b53abc9ef18e3ee78dcc3b333d05a702))
* **update to token beta:** updates to font variables to consume new type token options ([7a3b213](https://github.com/rei/rei-cedar/commit/7a3b213892be2561e8c39f9d9a187b1e2457784a))
* **update to type setting:** changing hardcoded instances of font family to component lvl variables ([b2c9428](https://github.com/rei/rei-cedar/commit/b2c94281daf07a8d96ec8faaef15c0159f17ef2a))
* **variables:** fix variables transfer script ([828ffcf](https://github.com/rei/rei-cedar/commit/828ffcf52c78f7a5c1787cbeed7675127183d117))


### Features

* **button:** icon only button hover state updates ([d5042f2](https://github.com/rei/rei-cedar/commit/d5042f2823d12397c02cb89e7f278a0c019cebfc))
* **checbox:** add size to checkbox component ([fed31fc](https://github.com/rei/rei-cedar/commit/fed31fc31ed07ac539ce38e2aedf552abe68100d))
* **css:** add CdrText scss for consistency ([71571b4](https://github.com/rei/rei-cedar/commit/71571b4dae144ee86790817c2dff190a5e979fd7))
* **css:** add postcss-import-able output for deprecated utility classes ([85dd5fc](https://github.com/rei/rei-cedar/commit/85dd5fc664cd8b4223b9a7e0dbc38d31d7023edd))
* **css:** decompose utilities output into multiple files ([e70953b](https://github.com/rei/rei-cedar/commit/e70953bb92f4b51a9ba0aec95818df09652de0d5))
* **css:** export per-component css ([2a72a5e](https://github.com/rei/rei-cedar/commit/2a72a5eb4ba44506101c51408b295a06b7033a6b))
* **docs:** publish kitchen sink to gh-pages on merges to next ([da1671d](https://github.com/rei/rei-cedar/commit/da1671d5b075f49597b40a5e0285fc8673d03053))
* **genertic type:** this update adds generic type classes for crd-text. body, body-strong, eyebrow, ([bb5f95e](https://github.com/rei/rei-cedar/commit/bb5f95ebd739f49ae7cc0549fdfebcbf7a3b92a7))
* **inputs type updates:** inputs type reorged and updated ([97bc3f6](https://github.com/rei/rei-cedar/commit/97bc3f6bd4cea16ab8116f6141187b8685165653))
* **link:** adding examples for links ([d2d8e95](https://github.com/rei/rei-cedar/commit/d2d8e95e8288115c9739e9cfb5a5c64bca2b1e12))
* **list:** update to standard unordered list bullet to work with any text size ([5557c5e](https://github.com/rei/rei-cedar/commit/5557c5ef196838374f391885fdbeb643ab64651d))
* **pagination:** add "disabled" next/prev links ([54ba98f](https://github.com/rei/rei-cedar/commit/54ba98f59dd873f86ce20213870650a0036efbc8))
* **radio:** add small, medium, large sizes to radio ([b2de2cf](https://github.com/rei/rei-cedar/commit/b2de2cf3a0fe9ed593349dadc73ec7bfe3a03515))
* **tabs:** add centered tab variant ([09f0abe](https://github.com/rei/rei-cedar/commit/09f0abec6be019c968fa75b08ef08df7e4423b4b))
* **tabs:** add osx hack to show scrollbar ([66f90c8](https://github.com/rei/rei-cedar/commit/66f90c8658c6ff6b1ac1da1b2b190aa0365ed16d))
* **tabs:** set hash HREF and ID for SEO ([2dd37b6](https://github.com/rei/rei-cedar/commit/2dd37b627bbe54eee2dda04235a34cd821f9edcf))
* **test:** add ability to target one element but capture another ([527b666](https://github.com/rei/rei-cedar/commit/527b6660e481d6aeb12cc4b8fec5168be7f8a493))
* **test:** add option to wait in a scenario ([eea6a8d](https://github.com/rei/rei-cedar/commit/eea6a8d1add3f4a3306b95a2328571b5b050cc81))
* **test:** make responsive visual regression optional ([ac1360d](https://github.com/rei/rei-cedar/commit/ac1360d37f617d54515585da9504801f7cb43b0f))
* **text:** add strong heading modifiers ([7bd1e7c](https://github.com/rei/rei-cedar/commit/7bd1e7c5177299a765d99f38e90b98025765a02a))
* **tokens:** type token update ([06a8b60](https://github.com/rei/rei-cedar/commit/06a8b60b1a268a44fbf1d7a9da382df5d7f3bca6))
* **update the type and caption components to use new type tokens:** added body, utility, and eyebro ([f59bbc7](https://github.com/rei/rei-cedar/commit/f59bbc7363235a917b103d13da7f0e7dce880f47))
* **utils:** add new heading utilities, deprecate old ones ([ae2715a](https://github.com/rei/rei-cedar/commit/ae2715acab4d8b26b9b033b72ee34caa0ec73ca5))



## [3.0.4](https://github.com/rei/rei-cedar/compare/v3.0.3...v3.0.4) (2019-10-22)


### Bug Fixes

* **css:** fix utilities and reset build ([f4b762b](https://github.com/rei/rei-cedar/commit/f4b762b4e322bc7d6a4c448b63c4a7765222b7f4))
* **test:** fix select snapshots ([c98c751](https://github.com/rei/rei-cedar/commit/c98c7517455991f71bfb2bc1c61fbcf097d7a822))



## [3.0.3](https://github.com/rei/rei-cedar/compare/v3.0.2...v3.0.3) (2019-10-16)


### Bug Fixes

* **icon:** update icon build to properly bind props ([8fef210](https://github.com/rei/rei-cedar/commit/8fef2103559cc83dbfad19487fb4c0212f0a1177))
* **select:** added newline to fix linter error ([0cf4565](https://github.com/rei/rei-cedar/commit/0cf45650d2121f9222df8cf74a2b6d87b4fbadc3))
* **select:** fixed select caret disabled color ([c50de1d](https://github.com/rei/rei-cedar/commit/c50de1d42fbe96acc7a780bf03f95bee5682e620))



## [3.0.2](https://github.com/rei/rei-cedar/compare/v3.0.1...v3.0.2) (2019-10-15)


### Bug Fixes

* **rating:** restore 2.0.2 logic for rating count ([5e971f9](https://github.com/rei/rei-cedar/commit/5e971f95ef7602cb312d15a88cd64722338f27c2))



## [3.0.1](https://github.com/rei/rei-cedar/compare/v3.0.0...v3.0.1) (2019-10-11)


### Bug Fixes

* **accordion:** check for reference before trying to set maxHeight ([dc2bed0](https://github.com/rei/rei-cedar/commit/dc2bed0e74d7772d8db201dab2863f55b8532837))
* **accordion:** fix label precedence in accordion ([45ba872](https://github.com/rei/rei-cedar/commit/45ba8727d440ec1d9474230546706334aa98fd7c))
* **accordion:** refactor so accordion can be initialized as open ([97e19e1](https://github.com/rei/rei-cedar/commit/97e19e1a3ffc4974dc3f7bdfca8fc9e764c1ec06))
* **accordion:** remove internal state to toggle accordion ([f75edba](https://github.com/rei/rei-cedar/commit/f75edba0e087ed320750105a59f57b3fa7f247c8))
* **breadcrumb:** breadcrumb won't truncate if fewer than 3 items ([1e6b7f0](https://github.com/rei/rei-cedar/commit/1e6b7f07d836e8db4bb8c4d7612f39c0be1b40d5))
* **breadcrumb:** lodash.debounce no longer needed ([e62a382](https://github.com/rei/rei-cedar/commit/e62a38220b18db187905b0092a1c432a93652674))
* **breadcrumb:** remove non-ssr-compatible code ([59d23f1](https://github.com/rei/rei-cedar/commit/59d23f1f206c4311a8830d1d25f2f740a2939a3c))
* **breadcrumb:** update v-for key not to use index ([d90ed7d](https://github.com/rei/rei-cedar/commit/d90ed7d57479c5481d5c6fc5db3abf200a0ad21a))
* **build:**  working link with dev build ([dbb6208](https://github.com/rei/rei-cedar/commit/dbb620812c36d5e9ca4045fb8667c825d938db79))
* **build:** add wrapper .js files for every component ([b0bdb39](https://github.com/rei/rei-cedar/commit/b0bdb397ce1fbf20f92ec30504de57fd636ec17c))
* **build:** better babel settings, remove un-used babel pakcages ([08fda1e](https://github.com/rei/rei-cedar/commit/08fda1e2bced19b45eab90d5bc5116429c583820))
* **build:** checkbox and radio mostly done ([5da0a58](https://github.com/rei/rei-cedar/commit/5da0a58ea0715be1bdbd381feb52a62886a20b9a))
* **build:** configure dev/test/prod ([a0808c3](https://github.com/rei/rei-cedar/commit/a0808c3bbc3e78cb0b365a94188cb1cd611dff29))
* **build:** convert icon/icon build to JSX. load sprite in dev ([e3ca7b9](https://github.com/rei/rei-cedar/commit/e3ca7b932deba1a4f59d6ef773ead635ca33cfb1))
* **build:** export /lib build with modules preserved ([21f7ffd](https://github.com/rei/rei-cedar/commit/21f7ffdbc4f2731283da6ed2b2110b17c5142085))
* **build:** fix CJS build ([c977817](https://github.com/rei/rei-cedar/commit/c977817e195677b76d57b8f6011bc5ab4d6a9678))
* **build:** fix listeners pass through logic ([e465b74](https://github.com/rei/rei-cedar/commit/e465b746f2b06c8c89f64c7ade1455a6ea00a98b))
* **build:** fix path for index export ([8696581](https://github.com/rei/rei-cedar/commit/869658140fff887e47351e697dfd0884d3f3cd86))
* **build:** fix test suite ([a7340c2](https://github.com/rei/rei-cedar/commit/a7340c28dbabb3faa1cd0d04dbb1d5c3cda5a16a))
* **build:** link and text working checkin o_o ([3340c95](https://github.com/rei/rei-cedar/commit/3340c95a3a1810fded786a61774a40d6dfe19fac))
* **build:** make rename extensions handle index.js ([4cfeeca](https://github.com/rei/rei-cedar/commit/4cfeeca5cff0184ceac35bad05115fe37631d329))
* **build:** map accordion to jsx ([edb808e](https://github.com/rei/rei-cedar/commit/edb808e0fa5909781f904410c605309001062eb2))
* **build:** map attrs pass through properly ([6889590](https://github.com/rei/rei-cedar/commit/688959015767d299902f1a12a581be8adad0ae2f))
* **build:** map breadcrumb and button, map style classes ([879aa23](https://github.com/rei/rei-cedar/commit/879aa23972399bb721aa40ed93d94a5c564a74a0))
* **build:** map caption to jsx ([6e6acab](https://github.com/rei/rei-cedar/commit/6e6acab998074eff90d665e23aa186d70c916c37))
* **build:** map grid components ([a0fbb23](https://github.com/rei/rei-cedar/commit/a0fbb2383e7183df4f81c331ae07ec4395f3c8fb))
* **build:** map input to jsx ([f865c90](https://github.com/rei/rei-cedar/commit/f865c908f92146a3c9c298424fd1dfdb7deffcdd))
* **build:** map pagination to jsx ([33cbf8d](https://github.com/rei/rei-cedar/commit/33cbf8db30b40efa8166fb84973c635b37851406))
* **build:** map rating to jsx ([066c960](https://github.com/rei/rei-cedar/commit/066c9608f3fec6014a563cf94048353ab655bf32))
* **build:** map select to jsx ([d3a4ed4](https://github.com/rei/rei-cedar/commit/d3a4ed4871f999598597f22ec9508fcec1b4ebbe))
* **build:** map tabs to JSX ([cc62cc0](https://github.com/rei/rei-cedar/commit/cc62cc01221860c80402f71aa90c0504f0b9635e))
* **build:** migrate card, quote, and list to jsx ([38a5b64](https://github.com/rei/rei-cedar/commit/38a5b64a6d23b87493c6032a9fa3785266fa7520))
* **build:** migrate img and cta to jsx ([09756fe](https://github.com/rei/rei-cedar/commit/09756fea004ecd782d322be9e665016ed570a174))
* **build:** pull in jsx/babel magic, map checkbox, fix radio ([815acda](https://github.com/rei/rei-cedar/commit/815acda8498b9c136de4791372f3df9806c95aa9))
* **build:** re-map filenames for lib build ([812bbb1](https://github.com/rei/rei-cedar/commit/812bbb1d6e98f57c53424f42af53d8fb6f873028))
* **build:** remove aliasing from source files ([7642aa5](https://github.com/rei/rei-cedar/commit/7642aa506f36e02a65adf2b79a9e280acb01b60c))
* **build:** rename esm build to .mjs ([49757b5](https://github.com/rei/rei-cedar/commit/49757b58f5acf71974b23b6fc47f31d63b3d5c5d))
* **build:** replace clsx with classnames ([6fa0a9d](https://github.com/rei/rei-cedar/commit/6fa0a9d156b44534f3c6648f819f17faef34d2d6))
* **build:** restore original check/radio event behavior ([bbd1b78](https://github.com/rei/rei-cedar/commit/bbd1b7831a4ba9c8ed816b67842247999534c842))
* **build:** set esm as module build ([2b73dd7](https://github.com/rei/rei-cedar/commit/2b73dd7648b21c3a63fc84e454efd01658e067a3))
* **build:** update scss imports ([b255b10](https://github.com/rei/rei-cedar/commit/b255b10412f2f1d281c8e3306b04197e73b5d41c))
* **build:** update vue import paths ([ac67e92](https://github.com/rei/rei-cedar/commit/ac67e9242f142780040b47e956cf80f38111c32b))
* **build:** use mjs for lib export ([9efd304](https://github.com/rei/rei-cedar/commit/9efd3044419626ae2250c3d0a07ea342310b01e0))
* **build:** wip data-table mapping ([eafa741](https://github.com/rei/rei-cedar/commit/eafa7410538deeac6cba76a70ebf22ebc986a3c4))
* **button, variables:** fix scss typos ([3c7add1](https://github.com/rei/rei-cedar/commit/3c7add1dd7a8585b9377de939931b157dd7ed67c))
* **ci:** hopefully fix e2e ([adc78f0](https://github.com/rei/rei-cedar/commit/adc78f0bb9e452c37b1df5f7afbef3ade6c6c814))
* **ci:** increase test timeout time ([e58a1e7](https://github.com/rei/rei-cedar/commit/e58a1e75e662f57d5ef5c28fe8fbbacbd3462bda))
* **css:** build but dont scope main css ([dacbeb7](https://github.com/rei/rei-cedar/commit/dacbeb70971e6c2264032e00e433b45d23259d48))
* **cta:** set base CTA fill to ensure icon inherits it ([1f2f53e](https://github.com/rei/rei-cedar/commit/1f2f53e6325b36f38749fda1af701e922fdadb80))
* **cta, button, link:** properly handle firefox outline color ([a26c775](https://github.com/rei/rei-cedar/commit/a26c7751f6199e8b5c83c5c0091266e7c19005cb))
* **cta, vars:** create light-elevated mixin ([559bf30](https://github.com/rei/rei-cedar/commit/559bf30638887b0b938590690681f704e90d3605))
* **deps:** resolve thousands of lodash security alerts ([b306c9a](https://github.com/rei/rei-cedar/commit/b306c9ac5528e929c75e1f3c79f4f2ce405114a6))
* **dev:** fix example imports ([8677627](https://github.com/rei/rei-cedar/commit/86776274dac9c46d77d8f99df6b74728f12b8e38))
* **dev:** inline CSS for dev build ([f3af69b](https://github.com/rei/rei-cedar/commit/f3af69bb040a428654b1cf562525b62337cda854))
* **dev:** load CSS in dev env ([7a034df](https://github.com/rei/rei-cedar/commit/7a034df8881833150eac5ae5dfbd3684ac3684e1))
* **dev:** make dev env work in ie11 ([0bc38c7](https://github.com/rei/rei-cedar/commit/0bc38c70f3f5df1b5ee1a76b8709255f045a11b6))
* **dev:** re-enable kitchen sink and utils ([2abf189](https://github.com/rei/rei-cedar/commit/2abf189d87444c05e44eedf32389212cd8f7be0e))
* **dev:** silence dev build deprecation warnings ([92310b3](https://github.com/rei/rei-cedar/commit/92310b3e909bee8ebce6be7fb05ad319169c4951))
* **docs:** fix style example ([ef74386](https://github.com/rei/rei-cedar/commit/ef743861af231f030ffde56cd1ae5dce80548b32))
* **fullwidth:** the fullwidth prop was used as a string rather than a bool on some examples ([3426a97](https://github.com/rei/rei-cedar/commit/3426a97f7747a4ea8350d966c12e0cfe860fadc7))
* **img:** make alt default to empty string ([67c4bcf](https://github.com/rei/rei-cedar/commit/67c4bcfe45fe3cccdf768124cae770c4fbc6b982))
* **input:** fix issue with v-on listeners and v-model ([3679913](https://github.com/rei/rei-cedar/commit/3679913d2eca51cf9c308491ddb433e6197f7f57))
* **input:** slots cannot be rendered in computed properties ([4ddf15a](https://github.com/rei/rei-cedar/commit/4ddf15a32b6750be3475b5ea92cb0a2f28d0ecee))
* **input, variables:** fix copy paste error ([8639e0b](https://github.com/rei/rei-cedar/commit/8639e0b1f5b2e92822e73369b607706e224ecba0))
* **link:** update click event test ([7fc8b6d](https://github.com/rei/rei-cedar/commit/7fc8b6df6bb4945b24d8c5adcc185874e961952d))
* **lint:** fix lint error, bump beta version ([8ea3f4b](https://github.com/rei/rei-cedar/commit/8ea3f4b8fb19cc2578c18d6076363d990fef9e4f))
* **lint:** make linter ignore default files ([20fd52a](https://github.com/rei/rei-cedar/commit/20fd52a1c9bbc7c71055b9fc64da1d9f3efe72c7))
* **lint:** massive, MASSIVE quantities of linter fixes ([5a1c734](https://github.com/rei/rei-cedar/commit/5a1c73405bc1bbe349822c965da8d2cd3d42c452))
* **linter:** fix linting error ([21e009c](https://github.com/rei/rei-cedar/commit/21e009c2eaf7de8ed8503bb2f020f581db949388))
* **min.css:** minified the standard font css rather than the minified one ([d194ef1](https://github.com/rei/rei-cedar/commit/d194ef1a4ad6ca1c9a0883f5288fd9f03f51d53b))
* **paragraph example:** update typo ([4748178](https://github.com/rei/rei-cedar/commit/47481787c298c5f9c241cdcb92bf16832bec2416))
* **rating:** make rating handle string and number input the same ([4e0be52](https://github.com/rei/rei-cedar/commit/4e0be52e98f2570e8edb1cef9a80eee5a1c1eb68))
* **removing color from this pr:** removing color from this pr ([436353b](https://github.com/rei/rei-cedar/commit/436353bdd62a2b87182ed6aad88a448252148e4e))
* **search examples:** the component was deleted but the examples were retained ([ee4d24e](https://github.com/rei/rei-cedar/commit/ee4d24e97d610328d0ce703d5e53a1309edaeb1b))
* **select:** fixed v-model update for internet explorer ([bf3bb20](https://github.com/rei/rei-cedar/commit/bf3bb2098c14f912292c5c441d31a5d64d07d6b2))
* **select:** modified internal padding constraint to prevent text overflow ([6689e34](https://github.com/rei/rei-cedar/commit/6689e34d413f5ad46928d2c3eaf28eaf6af37f97))
* **style:** always access style module from this ([0410563](https://github.com/rei/rei-cedar/commit/04105630ca881c70aeadca9445684c2ac5fe3710))
* **style:** fix style scoping ([66e5e9a](https://github.com/rei/rei-cedar/commit/66e5e9a4937a6eaf9a97fd0b3f52cc206bebe5b6))
* **tabs:** use background-color instead of background ([1672cd9](https://github.com/rei/rei-cedar/commit/1672cd9520dc35cfcf82ddc27143fcd131ee89fa))
* **template:** fix template style import ([3dd25f6](https://github.com/rei/rei-cedar/commit/3dd25f691b0c4636d29c94452864f29b7f7ab482))
* **template:** update component template ([37ea19e](https://github.com/rei/rei-cedar/commit/37ea19e69b03a86ddd75fbc671864df26d57e9af))
* **tests:** fix test config ([da68cf8](https://github.com/rei/rei-cedar/commit/da68cf81ef17bece2fa1d0509de14fc8fe8a102f))
* **tests:** point integration tests at kitchen sink ([fc48cc9](https://github.com/rei/rei-cedar/commit/fc48cc921b2c5c66b463b30a0ffc3c9ff30b956b))
* **tests:** temporary fix for chromedriver in CI environment ([c0cfd4a](https://github.com/rei/rei-cedar/commit/c0cfd4a9c20819246d35b1194a04694ec32bc4a7))
* **text demo:** update to remove un used componenet ([7295dc9](https://github.com/rei/rei-cedar/commit/7295dc97f57bfff6404cb6ce07143ea1c2ca4f2d))
* **tokens, breakpoints:** use breakpoint tokens in mixin ([d386a60](https://github.com/rei/rei-cedar/commit/d386a60b03e87de21b8fdd5da8fb33a31f904e03))
* **utils:** fix utilities.scss build, remove deprecated utils from components ([6dffb20](https://github.com/rei/rei-cedar/commit/6dffb201a18645bf5e92a78f0a77cb900d411d73))
* **utils:** include everything but main except the reset ([45ccfb8](https://github.com/rei/rei-cedar/commit/45ccfb8fdfdb01067b857faeab81e7a7e621d0a8))
* **variables:** export all variables ([54601da](https://github.com/rei/rei-cedar/commit/54601da69322aa98eb533188844fb3682fc64f09))


### Code Refactoring

* **accordion:** change show prop to opened for clarity ([f27bcad](https://github.com/rei/rei-cedar/commit/f27bcad978030b1de395bb0e08bfefba7682b083))
* **accordion:** move accordion component functionality into accordionItem ([a8d2588](https://github.com/rei/rei-cedar/commit/a8d2588c550f9af86a8e29d8c9cc1830f0bb522d))
* **accordion:** rename accordion-item component to accordion ([96d5d71](https://github.com/rei/rei-cedar/commit/96d5d71eb4b28a050726c05db473c9caaf066ada))


### Features

* **accordion:** added slot for accordion label ([8f07f78](https://github.com/rei/rei-cedar/commit/8f07f78ad1b3515cc7e3d86c969cfa63d6f0d119))
* **breadcrumb:** look for id property in breadcrumb.item object for :key ([2ed36d6](https://github.com/rei/rei-cedar/commit/2ed36d67d8ccc6779fa3b8f926208aef36ae0cd3))
* **breadcrumb, pagination:** add scopedSlots to allow customizing links ([35dd9ac](https://github.com/rei/rei-cedar/commit/35dd9ac2e89bfde4619d57925070aeb5be3dd3a9))
* **cta, button:** create and use fullWidth mixin ([3ea5ef8](https://github.com/rei/rei-cedar/commit/3ea5ef8e01751313d705b4e06bd5e2f1913738b7))
* **fonts:** font-face loading strategy for variable fonts and fallbacks for unsupported browsers ([f130ce4](https://github.com/rei/rei-cedar/commit/f130ce4d87d1f0b3bdd4ae864c2bd56840246088))
* **fonts:** updates to type on c2 ([d7ba422](https://github.com/rei/rei-cedar/commit/d7ba42230abc5746a7be434c30ca88c8e9f936a7))
* **icon:** accept full and partial svg markup in icon slot ([3aa1044](https://github.com/rei/rei-cedar/commit/3aa1044f8df0664b445b07186b882c7394cfba7c))
* **link:** `CdrLink` emits a click event ([12c291a](https://github.com/rei/rei-cedar/commit/12c291af01027962d2137a5582519eaf2195135c))
* **modal:** initial commit, add modal files ([688187d](https://github.com/rei/rei-cedar/commit/688187d66cda3add69d5fc43053f7881f76a5558))
* **select:** updated select to be consistent with input ([16e84cc](https://github.com/rei/rei-cedar/commit/16e84ccb783cf195576a6ff146b0e52b2dd6a434))
* **utilities:** first pass at sassdoc output for utility class docs ([b4cf827](https://github.com/rei/rei-cedar/commit/b4cf8271690d080ad384070b94b3aa516f509e62))


### BREAKING CHANGES

* **select:** removing multiple select prop as design does not want to support it

cdr-1156
* **accordion:** show prop has been replaced with opened prop
* **accordion:** cdr-accordion-item renamed to cdr-accordion
* **accordion:** deleted cdr-accordion component



## [2.0.2](https://github.com/rei/rei-cedar/compare/v2.0.0...v2.0.2) (2019-07-02)


### Bug Fixes

* **ssr:** add built style-injector file ([77230d3](https://github.com/rei/rei-cedar/commit/77230d35c46a8e5f33a38a0748540d68614c9a3e))
* **ssr:** add correct build of style-injector ([2f7248f](https://github.com/rei/rei-cedar/commit/2f7248fecb5d3bc65b6c677293bc5b3be8513e10))
* **ssr:** resolve local style-injector ([f726f2f](https://github.com/rei/rei-cedar/commit/f726f2f5e9f59452980a75414d4dd0937f2d223d))
* **ssr:** revert to correct export for style-injector ([38a13a5](https://github.com/rei/rei-cedar/commit/38a13a58aa5aba58014a24f6db103f07d2a404f9))
* **ssr:** wip styleInjector override ([816b29b](https://github.com/rei/rei-cedar/commit/816b29b35925a1a04fbbb0ea9abd1f3754b807d2))



# [2.0.0](https://github.com/rei/rei-cedar/compare/18.12.2...v2.0.0) (2019-06-24)


### Bug Fixes

* **accordion:** add dynamic class to change cdr-accordion-item z-index on focus/blur ([b701ab7](https://github.com/rei/rei-cedar/commit/b701ab7920d10a3a6951cd86e0c65284f62a2c3a))
* **accordion:** fix css bugs ([d19278c](https://github.com/rei/rei-cedar/commit/d19278c5d34f6a8bed34c6f342e00024a4bb44eb))
* **accordion:** set visibility hidden on cdr-accordion-item slot contents when closed ([81a5a0d](https://github.com/rei/rei-cedar/commit/81a5a0d113ce6bee0db3bec3a2181abd57ed8fae))
* **activity card:** correct border-radius on image to match card ([5a48d79](https://github.com/rei/rei-cedar/commit/5a48d79435788a9e5a89773ca5b5c899d5aaf62f))
* **add style:** hover for icon example ([8254c69](https://github.com/rei/rei-cedar/commit/8254c69bd352fdeb6b732ccca25f85d02981abf8))
* **adding comments:** tOC comments for color ([7974882](https://github.com/rei/rei-cedar/commit/7974882595264217b3ccf0b8b733beee05f1fba6))
* **ally:** added an example to the radio page that had a duplicate ID attribute ([b680c88](https://github.com/rei/rei-cedar/commit/b680c88774e8d48fdabcaeba6a5192ae85c1ed5f))
* **assets:** fix async race condition in icon asset build ([4934639](https://github.com/rei/rei-cedar/commit/493463921132035e2efa107835b5ec06dc089625))
* **babel:** go back to babel 6 to fix ie11 issues ([657094a](https://github.com/rei/rei-cedar/commit/657094ab8df094d386e1b85898877a3b09da86d8))
* **breadcrumb:** cdrButton dependency removal ([9e10229](https://github.com/rei/rei-cedar/commit/9e10229258008b7ab1dbd4408d2b7c3aafec4400))
* **breadcrumb:** defensive css for cedar 1 ([66ccee2](https://github.com/rei/rei-cedar/commit/66ccee2f10a7d7cd9fc5bfdc7f2185f23263efca))
* **breadcrumb:** fixed console error where element was not available in resize event ([dea6b8b](https://github.com/rei/rei-cedar/commit/dea6b8b2a6661afee197880ec84d74548338a60b))
* **button:** add defensive css for cedar 1 ([2950d31](https://github.com/rei/rei-cedar/commit/2950d31d52e1fcddd3b6e604164531d2b8399235))
* **button:** bump version to match alpha ([3439b98](https://github.com/rei/rei-cedar/commit/3439b985332ee482838b23863e51272c392f74f6))
* **button cta:** import cdr-icon css for components packaged with an icon ([6bb2233](https://github.com/rei/rei-cedar/commit/6bb2233be2161bf64224add0a6162448c680f63a))
* **button cta accordion:** bump version from alpha ([fe1c8f0](https://github.com/rei/rei-cedar/commit/fe1c8f063df6596015b2e26ca5488cf2274977f7))
* **cdr-img:** add radius to cropped/ratio images ([ceefec6](https://github.com/rei/rei-cedar/commit/ceefec64090d07705782a7cfe2d75e9b304d0741))
* **cdr-img:** the radius validator did not have the correct values, removing them and updating radiu ([c39066d](https://github.com/rei/rei-cedar/commit/c39066d69e7c452dba26885e12cb65b255ab8011))
* **component:** removing legacy component ([cb18cfa](https://github.com/rei/rei-cedar/commit/cb18cfaabb7a2e6c03c91688f964fa4046a6926c))
* **css:** relocate needed anchor reset css ([8cc8ced](https://github.com/rei/rei-cedar/commit/8cc8ced8a1c7b81e9e170c01e79d744e4ad3277c))
* **css:** the token value for the default paragraph where incorrect ([d05e512](https://github.com/rei/rei-cedar/commit/d05e512c0fd56c4b24aa451f2a34378bb4a8b740))
* **cta:** add defensive css for cedar 1 ([6a1e8f7](https://github.com/rei/rei-cedar/commit/6a1e8f7ed8ed50c4513026f0fa519bf0f6396f85))
* **cta:** fix box shadow on --light --elevated ([341f2de](https://github.com/rei/rei-cedar/commit/341f2de3688805d699af68fccb4b0087fdad1263))
* **file update:** removing visibility classes from space ([19a2033](https://github.com/rei/rei-cedar/commit/19a203310f1a977529e5787cebe6589320ec7dec))
* **focus:** add default focus state for sharing ([16133cf](https://github.com/rei/rei-cedar/commit/16133cf56053640efe286780955f172cd4f26dad))
* **format:** format update ([3c2cc3b](https://github.com/rei/rei-cedar/commit/3c2cc3b8a55e961c6ce2e9585e10710595ce0d7e))
* **generator:** Fix file renaming and casing in templates ([3e03fc2](https://github.com/rei/rei-cedar/commit/3e03fc2c5484ffe08b45e0a2bbf78ef19d981e40))
* **grid:** add defensive css to prevent cedar 1 collisions ([4a96291](https://github.com/rei/rei-cedar/commit/4a962911bcac97e1ecc4ad5b0cb93704fc325f39))
* **grid:** add style property to package.json ([6f7a22f](https://github.com/rei/rei-cedar/commit/6f7a22f4f0f25012e79375ccd47f5f2a50f9bbc8))
* **grid:** change how grid gutters are created ([8807caa](https://github.com/rei/rei-cedar/commit/8807caa1eb9831b2b33f598b6e0a58ee73320cf4))
* **grid:** remove grid from this branch as its utility version is not yet ready ([c1e6176](https://github.com/rei/rei-cedar/commit/c1e61768661fc399b72e4ab2e14464b4c3b813d3))
* **grid:** remove margin bottom from row ([0f68118](https://github.com/rei/rei-cedar/commit/0f68118990fe1e123a676d1d419c63cab4c004fb))
* **icon:** prevent flex icon shrinking ([851a078](https://github.com/rei/rei-cedar/commit/851a078827cc3f22ab8b826fa3c282afdbe3f926))
* **icon:** updated icon inheritColor prop ([1872f41](https://github.com/rei/rei-cedar/commit/1872f416d114c0cdfb14bcf736c61a578b97157b))
* **icon example:** missed a merge conflict ([059f940](https://github.com/rei/rei-cedar/commit/059f9400a909ef3e1a26337535b59c641af246ae))
* **icons:** flip incorrect pin-fill and pin-stroke icons ([4a3ce56](https://github.com/rei/rei-cedar/commit/4a3ce56eb42b63ff6ed7edd64da6b73bd90efb72))
* **input:** a11y test fix ([080972e](https://github.com/rei/rei-cedar/commit/080972e5d3c60b3c322e62ea83a05bc850a422e6))
* **input:** fix border and box shadow on ios ([f0a89d8](https://github.com/rei/rei-cedar/commit/f0a89d83589bacbfce494c0072fefaaa18a4ce3d)), closes [#627](https://github.com/rei/rei-cedar/issues/627)
* **input:** link style update ([fe8e491](https://github.com/rei/rei-cedar/commit/fe8e4917d78232bad1ec585c0e7c612827ef725e))
* **input:** removed direct modification of input value ([45d6070](https://github.com/rei/rei-cedar/commit/45d6070377d885c3dd33aeecce5bbbedc849c51a))
* **input:** updated element contrast for a11y ([b527cdd](https://github.com/rei/rei-cedar/commit/b527cdde38a5a717a4d9135a7ff5350b8b97f3f1))
* **misc:** fix console errors with size validator and missing imports ([a80e232](https://github.com/rei/rei-cedar/commit/a80e232713bd8d9e1c39923177dff0903d959eef))
* **package:** package ([962c601](https://github.com/rei/rei-cedar/commit/962c60165fdbabb1ff91e8ce5e81d71202efed52))
* **package update:** update to prevent vulnerabilities ([bf086e5](https://github.com/rei/rei-cedar/commit/bf086e5172e82cf3cfbdb3db30eb4aacf1d50497))
* **pagination:** update icon dependency and correct for API change ([e816666](https://github.com/rei/rei-cedar/commit/e816666c54e90e2e78aa29d11794ad23082b00fd))
* **peer dependancy updates:** not all files had the icon peer updates ([5489a22](https://github.com/rei/rei-cedar/commit/5489a226ddac0bb7d13c8cf08a691f877563165a))
* **print:** dont need all the display types in print ([01245e7](https://github.com/rei/rei-cedar/commit/01245e76c58424bea41ccd43931df79616156171))
* **rating:** fix rounded rating display ([0e461e4](https://github.com/rei/rei-cedar/commit/0e461e4fe19d39a1b2d1cd6074ee505875fc087a))
* **regression:** the format was incorrect on the backstop file for quote ([b1b8c9d](https://github.com/rei/rei-cedar/commit/b1b8c9d09a657fe8fe3fd3bd8c3f1e9a212b37aa))
* **removed file:** adding back the import of the color css file for theme support ([f5e6508](https://github.com/rei/rei-cedar/commit/f5e6508fe26a47fc99f9dbccaed6418337efb533))
* **revert breakpoint:** revert breakpoint ([929992a](https://github.com/rei/rei-cedar/commit/929992ad827c26503c15cfdc8f017c6d6cf68dce))
* **select:** fix bug with selenium interaction ([18fbab3](https://github.com/rei/rei-cedar/commit/18fbab3c983947e2fd820095f9b00d14abd14a1a))
* **select:** update variable name ([dbdc0e4](https://github.com/rei/rei-cedar/commit/dbdc0e440bd1c31793afd4a004b5e67b5b403322))
* **size:** fixed size validator console errors ([d21e71c](https://github.com/rei/rei-cedar/commit/d21e71c7b7c25ae1887f8bd837a8c21326add7dc))
* **size prop validator:** prop validator fix for xs and size mixin ([918df0a](https://github.com/rei/rei-cedar/commit/918df0a9b3509e67e8b9169410fe8085b0eb9dfd))
* **tabs:** content overflow behavior cleanup ([d58f43b](https://github.com/rei/rei-cedar/commit/d58f43bb2c14c0f11f9c23719637f64677f41a6c))
* **tabs:** defensive css for normalize ([4f80ec8](https://github.com/rei/rei-cedar/commit/4f80ec89a6ecd0b6bf0bfc6de5c3cda951485e42))
* **template name:** update inset template name ([e47eec9](https://github.com/rei/rei-cedar/commit/e47eec90dcb1cf4ee4c4c01c9beb9a7346be9386))
* **test:** added breadcrumb and input page links ([eebb259](https://github.com/rei/rei-cedar/commit/eebb259bbb260867f862e2aaa4c23421a5d33412))


### chore

* **build:** make cdr-* packages externals by default ([e0d9763](https://github.com/rei/rei-cedar/commit/e0d9763686d5a6a99e564aa542692e95ed8ca68a))
* **build:** update component webpack/build process ([559b8cb](https://github.com/rei/rei-cedar/commit/559b8cbf339ad2c5a7e88c4f54ef04039cb8cb51))
* **package.json:** bump version to alpha, update name to reflect npm publishing ([0a42ab7](https://github.com/rei/rei-cedar/commit/0a42ab76c4ecf27b2dcf73b53bf4b1f7a6d85639))
* **package.json:** remove lerna ([31df2b1](https://github.com/rei/rei-cedar/commit/31df2b12e6162c332d2a12bde16f82f5aa342ceb))
* **package.json:** update babel 7 dependencies via babel-update ([3b678b4](https://github.com/rei/rei-cedar/commit/3b678b44ca5662d16aeae89088b0b2759a876452))


### Code Refactoring

* **tabs:** seo update ([8ed9a60](https://github.com/rei/rei-cedar/commit/8ed9a6017a2577b30701e0300e8fd863f07a83e4))


### Features

* **18.9.1 release:** release adds support for cdr-icon and updates the peer-dependancies of compone ([5a6da2c](https://github.com/rei/rei-cedar/commit/5a6da2cb6fa476ee63fe4f055c3b64dcd1b6ef41))
* **accordion:** update dependencies ([d45808f](https://github.com/rei/rei-cedar/commit/d45808f472aeb5dd749ae025b28cefdb6da2cc0f))
* **accordion button cta:** bump versions to match alpha release ([c7f21bb](https://github.com/rei/rei-cedar/commit/c7f21bb212182d5fdb0971a806d521e7495c5e6a))
* **activity-card:** publish new plugin build ([2fb19e3](https://github.com/rei/rei-cedar/commit/2fb19e34f319ba8d412b0b5de1be2b35024617e7))
* **activity-card:** update dependencies ([efcc917](https://github.com/rei/rei-cedar/commit/efcc91797618b8f1d562a34bf8f6e2599c4d1953))
* **adding packages to bundle:** adding a cdr-quote ([ef7483d](https://github.com/rei/rei-cedar/commit/ef7483de889f67ce7fbbf82f78c585904b4f77ce))
* **alignment:** update to utility classes, adding reponsive class options ([5ed0ff5](https://github.com/rei/rei-cedar/commit/5ed0ff5d017c725e840eebd53effbc02de331420))
* **all components:** change package name prefixes from cedar-* to cdr-* ([dad0dfb](https://github.com/rei/rei-cedar/commit/dad0dfba417575d4b37fb3d0f7c3be899267be1f)), closes [#354](https://github.com/rei/rei-cedar/issues/354)
* **assets:** bump to 0.2.0 with removal of icon assets ([2e57098](https://github.com/rei/rei-cedar/commit/2e57098911e39c580335c8e3560e964a60ec6883))
* **assets:** remove icons from assets ([c402676](https://github.com/rei/rei-cedar/commit/c402676458d3d36fd5ac7466708506d6c6cc5ed2))
* **assets:** remove tokens from assets ([9304b8f](https://github.com/rei/rei-cedar/commit/9304b8f4e2886f46f2f487f53ee10738ccf81e81))
* **base-components:** add cdr-text to base components ([ae1d7a6](https://github.com/rei/rei-cedar/commit/ae1d7a6b44397b5af038cc849bb8d0f44353b856))
* **breadcrumb:** breadcrumb component is ready for pr ([984a31c](https://github.com/rei/rei-cedar/commit/984a31c9d51eaaa37e649b829af1c604b5d4104b))
* **breadcrumb:** final cleanup after pr comments ([34467e9](https://github.com/rei/rei-cedar/commit/34467e9338ec58717ba5ebb253c09cc72d30220c))
* **breadcrumb:** update dependencies ([9cf4192](https://github.com/rei/rei-cedar/commit/9cf41922df4eac79c01131b3855020415cf6ba5c))
* **breadcrumb:** update version ([fa16f95](https://github.com/rei/rei-cedar/commit/fa16f95306f0e2aa8579c2b2377b634f4c287825))
* **breakpoints:** moving responsive.pcss to use TokensV1 ([c004629](https://github.com/rei/rei-cedar/commit/c0046290eb1e1c966d1c9d09b898e2c9b5180123))
* **build:** add sourcemaps to output and uniminify built files ([9ac57d8](https://github.com/rei/rei-cedar/commit/9ac57d826f5b14a7bb952ea1170a97fca42c5aba))
* **button:** add defensive css for normalize and cedar 1 styles ([3859738](https://github.com/rei/rei-cedar/commit/38597381853a4c7e85889270dde71ca49c3ad0f1))
* **button:** bump to 2.0.0, update README ([8fda682](https://github.com/rei/rei-cedar/commit/8fda682efec0965efbdfa2b6a3b2e86493d36e94))
* **button:** update dependencies ([9f2c00d](https://github.com/rei/rei-cedar/commit/9f2c00d979e5f6dda8d88696e4b3f4723db80156))
* **buttons:** update to use css modules ([a5e5fda](https://github.com/rei/rei-cedar/commit/a5e5fdaddbbe615fbf85b5725ea8959983f4aed6))
* **caption:** add defensive css for normalize and cedar 1 styles ([99c0698](https://github.com/rei/rei-cedar/commit/99c0698a51289ff628098a5040b691113598bf97))
* **caption:** clean up caption composition ([d88bfa5](https://github.com/rei/rei-cedar/commit/d88bfa5010f4665ecb9f1a78f0b1c6d6c0004871))
* **caption:** update dependencies ([daee967](https://github.com/rei/rei-cedar/commit/daee967914a4dac7f17823c88e9f4bec47c0b777))
* **caption block-quote and pull-quote release:** moving these components to v1 ([0286274](https://github.com/rei/rei-cedar/commit/02862749d849041afa7a37ec2720a0cf298ddb4a))
* **card:** update dependencies ([0ef7910](https://github.com/rei/rei-cedar/commit/0ef7910e7735fdbe77e7f6a0ea5175ca51a8f246))
* **cdr-image:** these updates bring the cdr-image component inline with the v1 requierments for ima ([c94c636](https://github.com/rei/rei-cedar/commit/c94c6367b55f0d97451432375db9ab126e7792a3))
* **cdr-image v1 release:** moving the package.json to v1 for the cdr-image component ([6fa1cc7](https://github.com/rei/rei-cedar/commit/6fa1cc7bef0db546a5f0922f93b482de48a1bd57))
* **cdr-list release:** moving cdr-list to V1 and updating its readme ([451d3ae](https://github.com/rei/rei-cedar/commit/451d3aeb979e07bed0873acd638162c4dd944316))
* **cdr-radio release:** updates to the cdr-radio readme API and moving the package.json to v1 ([13b35c4](https://github.com/rei/rei-cedar/commit/13b35c4c6d138ae95a275f6a9b94bb04a05d8b2b))
* **cedar proving grounds:** loops through all the routes, which have been moved to routes.js, and e ([7cda2b3](https://github.com/rei/rei-cedar/commit/7cda2b315612ed80c5298cddd04c3c3b6ffee85a))
* **checkbox:** add custom label class ([d8882b8](https://github.com/rei/rei-cedar/commit/d8882b87d433454c38e16a07c5071a2223e8a1b3))
* **checkbox:** add custom label class ([7012f33](https://github.com/rei/rei-cedar/commit/7012f33f4cea20f4701d73062b69385a64026eff))
* **checkbox:** update dependencies ([ea5d4fa](https://github.com/rei/rei-cedar/commit/ea5d4fa2e6adcbc17065e7a292ea9eb3906b7be9))
* **checkbox radio:** update checkbox and radio to design spec ([30a5ef0](https://github.com/rei/rei-cedar/commit/30a5ef0ee733ec117f8154d66ba03dfabd444da6))
* **class names:** changing the names of our responsive classes ([2322d22](https://github.com/rei/rei-cedar/commit/2322d221bec21ed8cdd8bb9569e8de9fd25457fd))
* **component:** adding an additional slot to the quote elemement as it is valid markup to nest bloc ([4155192](https://github.com/rei/rei-cedar/commit/4155192a8b6fb7d4bfe906d0c911839d7889cbd8))
* **component:** cdr-list component updated to match v1 candidate spec ([e5ccef4](https://github.com/rei/rei-cedar/commit/e5ccef424c0ee28023f8c01934449914a5787c0a))
* **component:** the cdr-quote component allows for block and pull quotes. spacing, inset, and break ([2c30b1a](https://github.com/rei/rei-cedar/commit/2c30b1a1a436824b324bb4c44829ebb8002ba7d0))
* **components:** update components to use css-modules ([ec1321c](https://github.com/rei/rei-cedar/commit/ec1321c9d007b01a8bbd4220c8b12c55323c6a23))
* **components:** update npm organization from [@rei-co-op](https://github.com/rei-co-op) to [@rei](https://github.com/rei) ([0842f77](https://github.com/rei/rei-cedar/commit/0842f7772ce2c47f40a62a153dc51647ca135861))
* **container:** adding default text mixin into the cdr-container classes to provided a high lvl ove ([452dc20](https://github.com/rei/rei-cedar/commit/452dc20c67ef86dc0b0e3e333bd18666bf0bb0aa))
* **core-styles:** Update container sizing and padding ([a10f772](https://github.com/rei/rei-cedar/commit/a10f772113b475ea21ff0ec051da3bc66cbf03f5))
* **crd-checkbox release:** updates to the cdr-checkbox API readme and bumping the package to v1 ([0066831](https://github.com/rei/rei-cedar/commit/0066831495b2f94e5c30d73a5c3d41705c8f4b3c))
* **create cedar component:** create skeleton for cedar component for data table ([c576ac0](https://github.com/rei/rei-cedar/commit/c576ac038906db9923eaafb6221b01e223ab9b81))
* **css reset:** accounted for heading and paragraph resets in components ([2cab6ca](https://github.com/rei/rei-cedar/commit/2cab6cabc7e62fd7a38961e57b03d69f6b67725f))
* **cta:** add defensive css for normalize and cedar 1 styles ([d1ec84c](https://github.com/rei/rei-cedar/commit/d1ec84cf2769cf009184fa335420f7a1e0f8d211))
* **cta:** cdr-icon dependency removed, update readme ([e8cb080](https://github.com/rei/rei-cedar/commit/e8cb080038faa5fce9858c7b5ff2b577fb080799))
* **cta:** update dependencies ([6467ba2](https://github.com/rei/rei-cedar/commit/6467ba24621617346af4b938b880685fbc8ca98f))
* **cta:** update readme, bump version ([4f87071](https://github.com/rei/rei-cedar/commit/4f8707126b1daa6bdb91d9c1e273357f40320bc8))
* **data-table:** add constrainWidth prop, increase content resilience ([6c5001a](https://github.com/rei/rei-cedar/commit/6c5001adbef7aede70295cc47acfe4a171bd69cb))
* **data-table:** update readme, bump version ([b10a134](https://github.com/rei/rei-cedar/commit/b10a1340ef4a2917373a324a0823076c3ccb94e6))
* **deps:** update icon and assets for publishing ([48f2c67](https://github.com/rei/rei-cedar/commit/48f2c67a204b36a4ea740ed42130a8cd7a822994))
* **docs:** added all component's routes to rei-cedar project, and a couple compositions as a POC ([29fdf72](https://github.com/rei/rei-cedar/commit/29fdf72780bf12bfd3c7b32abc9d7b21c4f9cb94))
* **docs:** added compositions routes ([a3a0f81](https://github.com/rei/rei-cedar/commit/a3a0f81047310f7edfd6546ab58a32adb8da7812))
* **docs:** added route for buttons ([ac17b44](https://github.com/rei/rei-cedar/commit/ac17b44ce47f70a193bb330569defbb7818bb8f2))
* **docs:** to increase discoverability of the component test pages, a link to them should be presen ([d755545](https://github.com/rei/rei-cedar/commit/d7555458738359f05a44b30b69472e58f90a3cb4))
* **docs:** use router-link instead of old-school html ([351211c](https://github.com/rei/rei-cedar/commit/351211cdfad98517bd565da682ef32e818496e11))
* **examples:** updates to examples to use cdr-text rather than elements ([3619265](https://github.com/rei/rei-cedar/commit/3619265dfac1b0c166b846fbe66dfc1275ac8e0e))
* **font:** adding default font to container ([1b4a2a6](https://github.com/rei/rei-cedar/commit/1b4a2a6ffc11cab524d9bab00e50ab6a2e586dab))
* **fonts:** remove several font weights and styles ([36f21d8](https://github.com/rei/rei-cedar/commit/36f21d8f4ebfa51e66f9f15ccda31cceec50ca6d))
* **grid:** consolidate col's alignSelf props to single alignSelf ([0058ad0](https://github.com/rei/rei-cedar/commit/0058ad0174ab854ecd0991be28a5029c1751b180))
* **grid:** consolidate col's offsetLeft props to just offsetLeft ([ecc3294](https://github.com/rei/rei-cedar/commit/ecc32943017477e5de7b7e3850ce73ac03021139))
* **grid:** consolidate col's offsetRight props to single offsetRight ([b812e99](https://github.com/rei/rei-cedar/commit/b812e991f44da546b9bf78ad2739c38d2dc64663))
* **grid:** consolidate col's span props to just span ([a3ef361](https://github.com/rei/rei-cedar/commit/a3ef3612f5c93816c65e9097111e59452026f2c2))
* **grid:** move col and row to single package ([b0469b6](https://github.com/rei/rei-cedar/commit/b0469b669e1aef79133a66197b39dd81207297a6))
* **grid:** release 0.2.0 ([accc22b](https://github.com/rei/rei-cedar/commit/accc22b563063e90e258c63ba7508cd55a33fe51))
* **grid:** update align prop to accept responsive values ([1907de8](https://github.com/rei/rei-cedar/commit/1907de85d571753dff12bdee1eb6980a21eb118c))
* **grid:** update col and justify props to accept responsive values ([c572a51](https://github.com/rei/rei-cedar/commit/c572a5171562f4428c9c3ae1328bbd4c46de6624))
* **grid:** update dependencies ([4c320d1](https://github.com/rei/rei-cedar/commit/4c320d1ac199b7fede5d55d44f286614dedc8991))
* **grid:** update gutter prop to accept responsive values ([a3f613f](https://github.com/rei/rei-cedar/commit/a3f613f6525b63d87791da02c074c0f133ea22bc))
* **grid:** Update gutter values ([2382519](https://github.com/rei/rei-cedar/commit/238251954f421f196d9635f448ad0b1cc8dcbc10))
* **grid:** update row's nowrap prop to accept responsive values ([6dd3514](https://github.com/rei/rei-cedar/commit/6dd35148d6b1817db730ff4241c5b2813798d73e))
* **grid:** update vertical prop to be a string and accept responsive values ([008f05b](https://github.com/rei/rei-cedar/commit/008f05ba38c8e2960fc32cb528cf9b805794b5f0))
* **grid:** update wrap prop to be a string and accept responsive values ([cfe2d8a](https://github.com/rei/rei-cedar/commit/cfe2d8a082acb1a61404a7bc7f7b07024e6df9b2))
* **heading:** the V1 release candidate for heading is development complete ([6b20d80](https://github.com/rei/rei-cedar/commit/6b20d8025389ec76ea5657af5e9bffd26389e652))
* **icon:** add a slot to all components ([5bd063f](https://github.com/rei/rei-cedar/commit/5bd063f55fe55688460f9feecb6c755a35fbfac7))
* **icon:** add grid-view, list-view, and scan-barcode icons ([918f782](https://github.com/rei/rei-cedar/commit/918f78291eb6ef27e26aa68c29554d985323fbfd))
* **icon:** bump version, update README ([b5441b7](https://github.com/rei/rei-cedar/commit/b5441b7452c43435774878e8b18edd164d4e3c19))
* **icon:** generate new sprite, externalize icon.json ([f49f828](https://github.com/rei/rei-cedar/commit/f49f8287e1a92352b869301b419f49d313745230))
* **icon:** update dependencies ([6b6c0fe](https://github.com/rei/rei-cedar/commit/6b6c0fe6fb724dcd7ae53d41ff2086674b620a80))
* **icon accordion:** bump version ([a2cd2a7](https://github.com/rei/rei-cedar/commit/a2cd2a7e495ae2b37046a0342a5ab4733b08d65d))
* **icons:** gernerate icon components ([dcefd4e](https://github.com/rei/rei-cedar/commit/dcefd4ec3cc8b06d6d77d89d722782a6f6e25d16))
* **icons:** updating icons variables to tokenV1 variables ([706c318](https://github.com/rei/rei-cedar/commit/706c318b27a52b0ed63e75dee9446e76e9b3e43a))
* **image:** update dependencies ([d1adf01](https://github.com/rei/rei-cedar/commit/d1adf01a4cf666ac219534d394c814b80401cae5))
* **input:** add css resets to input ([ac3b95b](https://github.com/rei/rei-cedar/commit/ac3b95b671cce6dd5c39ec230bb969d62c9b9229))
* **input:** add defensive css for normalize and cedar 1 styles ([f930c61](https://github.com/rei/rei-cedar/commit/f930c616e722dfe9c71618dc739698e543fa778e))
* **input:** add keydown event ([3c476b3](https://github.com/rei/rei-cedar/commit/3c476b38baa4884ce13ef78f2bf91bd9d66e30b0))
* **input:** finalized changes for input release ([2b480a3](https://github.com/rei/rei-cedar/commit/2b480a372e014d724f1cbcf0520aaa7203fe8264))
* **input:** input refactor for cedar2 ([4ab0131](https://github.com/rei/rei-cedar/commit/4ab01313a4c53a662beaa79121477663c9b238ac))
* **input:** removed explicit string value for inherit color input example ([9b2a536](https://github.com/rei/rei-cedar/commit/9b2a53625fa198a1a4ff000fd15f68306c842b15))
* **input:** removed unneccessary comments ([da292c5](https://github.com/rei/rei-cedar/commit/da292c5b3685646488fae30447a3c2ee8a8f6e87))
* **input:** return event along with value in input event ([975fcc4](https://github.com/rei/rei-cedar/commit/975fcc4c3b11fa7817ad7b5f202bae27310dc87a))
* **input:** update dependencies ([e6b43fa](https://github.com/rei/rei-cedar/commit/e6b43fabbcae54bb358d062c8d3bfc8f0aa1744a))
* **input:** updated comment for pre icon width slot ([d5ab6ba](https://github.com/rei/rei-cedar/commit/d5ab6ba5e71a70828c6dcb0d97d14d8b055fcce3))
* **input:** updated pre icon width constant and cleaned up comment ([093874d](https://github.com/rei/rei-cedar/commit/093874d9517c3854b6cb24fcba3c1b6832fee94a))
* **input:** updated version to 1.0.0-alpha.4 ([9f8d6d4](https://github.com/rei/rei-cedar/commit/9f8d6d4ba9375e0f09d8e7c3e6a572347c388542))
* **input:** zach finished testing updating version ([595de3d](https://github.com/rei/rei-cedar/commit/595de3d63706e2c79f8d2353b97378fe109437a0))
* **lerna-semantic-release:** replaced standard changelog with lerna-semantic-release as dev depende ([5084037](https://github.com/rei/rei-cedar/commit/5084037af8aaaeaa156cf86e2fb537e254974e1d))
* **link:** add defensive css for normalize and cedar 1 styles ([26c3aaa](https://github.com/rei/rei-cedar/commit/26c3aaae39336f1931f712609559dc3a8dd17156))
* **link:** update dependencies ([bf6b68e](https://github.com/rei/rei-cedar/commit/bf6b68e34c9c51f678c3b41345e3c75bcb8b8ce2))
* **link:** use css modules for link ([6b244d2](https://github.com/rei/rei-cedar/commit/6b244d2a63cb25eb35866e520b460bbd6b6418b3))
* **link:** use css modules with link ([bfb98f9](https://github.com/rei/rei-cedar/commit/bfb98f9588692e1f6e87f02ee4a128da01c90fe6))
* **link-component:** simplifies link component props, adds prop to Icon for fill color inheritance ([9d404f4](https://github.com/rei/rei-cedar/commit/9d404f4f9372d2a527499e0e0730b3e2bfe0bede))
* **list:** add defensive css for normalize and cedar 1 styles ([d6c1e10](https://github.com/rei/rei-cedar/commit/d6c1e1088cb779baa03dfbed7128fb3e739cc1ca))
* **list:** update dependencies ([1d78423](https://github.com/rei/rei-cedar/commit/1d784236fcc888f9af18d61a1d48da1acf0529a3))
* **media-object:** update dependencies ([ec035df](https://github.com/rei/rei-cedar/commit/ec035dfa5a0e706a8f5f572ba826e65b3d709367))
* **mixin:** abstract out the methods of the modifier mixin to create a re-usable module for future ([c934122](https://github.com/rei/rei-cedar/commit/c9341225cdd5f439b09120adc529fe1bb033c511))
* **motion:** removing legacy motion token values, moving some values to use token variables ([3a5bedd](https://github.com/rei/rei-cedar/commit/3a5bedd06654f86d6d6961e233fe52bedfab37a5))
* **pagination:** release pagination@1.0.0 ([bc1ba85](https://github.com/rei/rei-cedar/commit/bc1ba85cec96b3af7caad9618146cefcf5b931b3))
* **prominence:** update mapping of variables using prominence to new tokenV1 names ([262bed0](https://github.com/rei/rei-cedar/commit/262bed0d93567910805cb15d02da35d1b2a5cde2))
* **proving grounds:** removes cruft ([ae8c943](https://github.com/rei/rei-cedar/commit/ae8c94315e84514a6b3493f4b9348beb824b1c71))
* **quote:** add defensive css for normalize and cedar 1 styles ([ee84756](https://github.com/rei/rei-cedar/commit/ee8475656997df46911cbd94268700244065dcd5))
* **quote:** update dependencies ([6d0149e](https://github.com/rei/rei-cedar/commit/6d0149ed0d1217546f0131fb99aee51eb0986d74))
* **quote:** update to the quote component merging block into the base class for cdr-quote. This ena ([f53e0b7](https://github.com/rei/rei-cedar/commit/f53e0b729fb8ee968f912f9af4457f74da6e8ed8))
* **radio:** update dependencies ([d2786a5](https://github.com/rei/rei-cedar/commit/d2786a5cd74e74febeea8c5817ef4b6c45a78a6c))
* **radius tokens:** components using radius tokens have been updated to use updated tokensv1 names ([7707bfb](https://github.com/rei/rei-cedar/commit/7707bfb60ca84460b51b027bb49b35ffb928e133))
* **rating:** add defensive css for normalize and cedar 1 styles ([6a3b74c](https://github.com/rei/rei-cedar/commit/6a3b74c6b08cd8961d52fd24f13d48b2737f526a))
* **rating:** new icons, color adjustments, add ability to make the component a link ([302f30c](https://github.com/rei/rei-cedar/commit/302f30cb1c79000f13872a73d34196796d639523))
* **rating:** update dependencies ([98f8250](https://github.com/rei/rei-cedar/commit/98f8250741998986166680a450ed363bb7932c3b))
* **rating:** update rating version for new size prop ([e86a18f](https://github.com/rei/rei-cedar/commit/e86a18f267612a023cb11cc16f520ff0dcdda7de))
* **release:** bump all to 0.1.0 and remove base-components ([f5c335e](https://github.com/rei/rei-cedar/commit/f5c335e8dba5ad865f0f7c184f70f42324f2c38d))
* **release:** button, breadcrumb, grid, and list are released to v1 ([d6973b7](https://github.com/rei/rei-cedar/commit/d6973b7ebe9f3c8ae3ce0d22879cbc3d056c0c51))
* **release:** cedar Alpha release ([883ff94](https://github.com/rei/rei-cedar/commit/883ff94c8b4dd03c99b72edf2e70f44258477f97))
* **reset:** remove anchor styles from reset ([853740e](https://github.com/rei/rei-cedar/commit/853740ed3b5f4a5146e9ca4e22d9e26379ada349))
* **reset:** restore body line-height to 1.5 ([8ece439](https://github.com/rei/rei-cedar/commit/8ece439662488f26a0cba85d3a18db0995f8fe4c))
* **resets:** normalize resets to use tokens ([5a705e3](https://github.com/rei/rei-cedar/commit/5a705e32ea257626438d381a63bacf359f5770a4))
* **resets:** remove unused css and relocate resets into components ([b6134dc](https://github.com/rei/rei-cedar/commit/b6134dcffa2b08ba3cd81548f0942a60f2a533d5)), closes [#516](https://github.com/rei/rei-cedar/issues/516) [#518](https://github.com/rei/rei-cedar/issues/518) [#519](https://github.com/rei/rei-cedar/issues/519) [#498](https://github.com/rei/rei-cedar/issues/498)
* **search:** update dependencies ([f8d98b6](https://github.com/rei/rei-cedar/commit/f8d98b6753ec863ec056e60bdf75f5f2dd7ec4aa))
* **select:** add defensive css for normalize and cedar 1 styles ([f660a5a](https://github.com/rei/rei-cedar/commit/f660a5a261ece2f2cd0b0f76a4f19e0138042aa0))
* **select:** add DOM event to emitted vue event ([ddb99f1](https://github.com/rei/rei-cedar/commit/ddb99f10f5ee9323529f4dc05eaaff3d6f45a786))
* **select:** update dependencies ([cd60f29](https://github.com/rei/rei-cedar/commit/cd60f299c9f20f357586ca767fdf26577050bca1))
* **space, utilities:** add !important to spacing utility classes ([adab6f1](https://github.com/rei/rei-cedar/commit/adab6f1fe3f015bbff64c986166bc1fb8dcbd606))
* **space, utilities:** add important to legacy util classes, add deprecation notice ([069a2a3](https://github.com/rei/rei-cedar/commit/069a2a3a376efbb145acfa4ace53862e4365c77a))
* **spacing:** add x and y space utility classes ([02edc24](https://github.com/rei/rei-cedar/commit/02edc2455542a42213559bf45a1621587e811cd7))
* **styles:** create a standalone, component styles only, non module css file ([ed6ac2d](https://github.com/rei/rei-cedar/commit/ed6ac2da0dc9300c81bf2121e9a36e206f69c147))
* **tabs:** add defensive css for normalize and cedar 1 styles, refactor markup to prevent leaky sty ([6ef45ad](https://github.com/rei/rei-cedar/commit/6ef45ad5fa08b0b05c5f9b4f1d53d2b9120265ac))
* **tabs:** passed testing and api doc review, updated version for publishing ([ae1395c](https://github.com/rei/rei-cedar/commit/ae1395c2518606b42d1536e326e42f0a779f4f2e))
* **template:** the cdr-text component has been updated with the following two variants:  default pa ([f23e61f](https://github.com/rei/rei-cedar/commit/f23e61ffd2a54412af039e7ccfc1d1e03c61b87a))
* **text:** add text component ([bb481c5](https://github.com/rei/rei-cedar/commit/bb481c50a71ed1f221da09e288dd61c77cd256a6))
* **text:** update dependencies ([506d029](https://github.com/rei/rei-cedar/commit/506d029ebd967402814a4c5845c9d7a8530869aa))
* **tokens:** add component token maps to cdr-assets ([afe53d0](https://github.com/rei/rei-cedar/commit/afe53d0fec56a5983a82244fd0985769e8265ca4))
* **tokens:** consume @rei/cdr-tokens package ([f094978](https://github.com/rei/rei-cedar/commit/f09497808c0f8457a8ffd9798878f94c99796972))
* **tokens:** consume 0.0.6 tokens and fix issues ([53f4baa](https://github.com/rei/rei-cedar/commit/53f4baa61cfe5f87f69077f0b30c390aa1b387f3))
* **tokens:** output token file for cdr-assets ([717836f](https://github.com/rei/rei-cedar/commit/717836f5453f55318bbbbe6649357c68ac94c2fb))
* **tokenv1 beta:** the TokensV1 dependancy has been moved to beta, icon-fill has been removed and r ([03fbdd5](https://github.com/rei/rei-cedar/commit/03fbdd59a9fa32b53a4616a0f87717c826c68f1d))
* **utilities:** include legacy spacing utilities for backwards compatibility ([4b5c4f2](https://github.com/rei/rei-cedar/commit/4b5c4f2880d523c7da9beb4c3db44befc9224124))
* **utilities:** space utilities and examples updated to use token naming ([9a42abc](https://github.com/rei/rei-cedar/commit/9a42abc0c26a2724ad82b34357e512375fff384b))
* **visivbility:** display utilities ([754d55f](https://github.com/rei/rei-cedar/commit/754d55f2f231eb65ec6ffc0945401e158c6307fa))


### Reverts

* **dependencies:** Undo removal of postcss-sassy-mixins ([9fa99a6](https://github.com/rei/rei-cedar/commit/9fa99a6b6c66dd26bfa77f7175762471132372b4))
* Revert "chore(button): update vue dependency" ([af0f5f1](https://github.com/rei/rei-cedar/commit/af0f5f169e6e3a8cdbe3b30eb6abfa0208fc9f6d))
* Revert "chore(release): publish components" ([4397624](https://github.com/rei/rei-cedar/commit/4397624ed6b48b639bbdce900a0e38a2381891db))


### BREAKING CHANGES

* **package.json:** convert from cal versionsing back to semver
* **core-styles:** Max container width updated from 1200px to 1232px. Container left/right padding
updated from 8px to 16px (xs & sm breakpoints)  and 32px (md & lg breakpoints)
* **package.json:** Cedar components will no longer be distributed individually
* **icon:** size values go to size prop rather than modifier prop
* **button:** Update size prop, deprecate responsive-size prop.
* **assets:** Token file removed from cdr-assets. They are available in @rei/cdr-tokens
* **reset:** removed default anchor styles from reset, now only available via cdr-link
* **icons:** pin-fill and pin-stroke have been reversed to correct a naming error
* **tabs:** content

ISSUES CLOSED: PLIB-3986
* **resets:** Default line height changed from 1.15 to 1 | Remove default margin on blockquote, figure, and label
elements
* **icon:** Replace star icons with new ones
* **rating:** Sizes have changed -- small: 16px, medium(default): 24px, large: 32px
* **release:** CdrLink and CdrText are moving to V1
* **grid:** alignSelfSm, alignSelfMd, alignSelfLg consolidated to just alignSelf that accepts responsive
modifiers
* **grid:** offsetRightSm, offsetRightMd, offsetRightLg consolidated to just offsetRight that accepts responsive modifiers
* **grid:** offsetLeftSm, offsetLeftMd, offsetLeftLg consolidated to just offsetLeft that accepts responsive
modifiers
* **grid:** spanSm, spanMd, spanLg removed and span accepts responsive modifiers
* **grid:** change row's nowrap prop from boolean to string. Remove nowrapSm, nowrapMd, nowrapLg in favor of
using nowrap with responsive modifiers
* **grid:** remove wrapSm, wrapMd, wrapLg in favor of using wrap with responsive modifiers
* **grid:** vertical prop is now a string instead of boolean. verticalSm, verticalMd, verticalLg removed and now
supports responsive modifiers
* **grid:** gutterSm, gutterMd, gutterLg replaced with just gutter
* **package.json:** babel 7 update in the past caused us some issues, so calling this a breaking
change.
* **grid:** colsSm, colsMd, colsLg replaced with just cols prop. justifySm, justifyMd, justifyLg replaced with
just justify prop
* **buttons:** Buttons use css modules
* **grid:** grid css is no longer in cdr-assets, col and row are no longer their own packages
* **link:** link uses css modules
* **link:** link now uses css modules
* **component:** List
* **components:** Components are now using css-modules for unique class names tied to the package version
* **checkbox radio:** box model sizing changes
* **icons:** cdr-icon is now used as a lower level component for the icon components. A complete rewrite with no
backwards compatibility.
* **assets:** icon assets are removed from cdr-assets and are now in cdr-icon
* **release:** packages no longer have plugin as default export
* **activity-card:** activity-card no longer is a plugin by default
* **build:** Raw component cdr-* peerdependencies are no longer bundled
* **build:** using vue components as a plugin is no longer recommended and is now split into a separate file
'dist/plugin.js'
* **grid:** row no longer has a margin-bottom so no styles bleed
* **grid:** Removes space at the top of the first row of each cdr-row. Resulting size should be unchanged.
* **all components:** Change all package names to cdr- prefix. Package name for cdr-image changed to cdr-img. Package name
for cdr-column changed to cdr-col
* **components:** Update all package names
* **grid:** Default grid gutter values updated from 16px to 16px (xs & sm breakpoints) and 32px
(md & lg breakpoints)
* **grid:** alignSm, alignMd, alignLg replaced with just align that accepts responsive values



# [5.0.0-0](https://github.com/rei/rei-cedar/compare/v1.7.10...v5.0.0-0) (2018-01-29)


### Bug Fixes

* **rating:** Fix rating screen reader text to be rounded ([949fc92](https://github.com/rei/rei-cedar/commit/949fc92cfe7fcc4985f88668c644e67f416b69d8)), closes [#352](https://github.com/rei/rei-cedar/issues/352)


### Features

* 1.0 Space variables and classes have been added to REI-Cedar, Brand.ai vaiables have been upda ([7e87b0f](https://github.com/rei/rei-cedar/commit/7e87b0fe4c84f795228a5842f2b5bc9859621d67))


### BREAKING CHANGES

* The Checkbox and Radio had a hard-coded value of 10px for right margin spacing,
this is not represented in the spacing system and was updated with the closest represnted  value,
size-sm(8px).

PLIB-2046



## [1.7.10](https://github.com/rei/rei-cedar/compare/v1.7.9...v1.7.10) (2017-10-13)



## [1.7.9](https://github.com/rei/rei-cedar/compare/v1.7.8...v1.7.9) (2017-10-13)



## [1.7.8](https://github.com/rei/rei-cedar/compare/v1.7.7...v1.7.8) (2017-10-12)



## [1.7.7](https://github.com/rei/rei-cedar/compare/v1.7.6...v1.7.7) (2017-10-10)



## [1.7.6](https://github.com/rei/rei-cedar/compare/v1.7.5...v1.7.6) (2017-10-09)



## [1.7.5](https://github.com/rei/rei-cedar/compare/v1.7.4...v1.7.5) (2017-10-03)



## [1.7.4](https://github.com/rei/rei-cedar/compare/v1.7.3...v1.7.4) (2017-09-29)



## [1.7.3](https://github.com/rei/rei-cedar/compare/v1.7.2...v1.7.3) (2017-09-28)



## [1.7.2](https://github.com/rei/rei-cedar/compare/v1.7.1...v1.7.2) (2017-09-27)



## [1.7.1](https://github.com/rei/rei-cedar/compare/v4.3.4-0...v1.7.1) (2017-09-27)



## [4.3.4-0](https://github.com/rei/rei-cedar/compare/v1.7.0...v4.3.4-0) (2017-09-26)



# [1.7.0](https://github.com/rei/rei-cedar/compare/v4.3.3-0...v1.7.0) (2017-09-22)



## [4.3.3-0](https://github.com/rei/rei-cedar/compare/v4.3.2-0...v4.3.3-0) (2017-09-21)



## [4.3.2-0](https://github.com/rei/rei-cedar/compare/v4.3.1-0...v4.3.2-0) (2017-09-18)



## [4.3.1-0](https://github.com/rei/rei-cedar/compare/v4.3.0-0...v4.3.1-0) (2017-09-14)



# [4.3.0-0](https://github.com/rei/rei-cedar/compare/v4.2.0-0...v4.3.0-0) (2017-09-13)



# [4.2.0-0](https://github.com/rei/rei-cedar/compare/v4.1.1-0...v4.2.0-0) (2017-09-11)



## [4.1.1-0](https://github.com/rei/rei-cedar/compare/v4.1.0-0...v4.1.1-0) (2017-09-08)



# [4.1.0-0](https://github.com/rei/rei-cedar/compare/v4.0.1-0...v4.1.0-0) (2017-09-07)



## [4.0.1-0](https://github.com/rei/rei-cedar/compare/v4.0.0-0...v4.0.1-0) (2017-09-05)



# [4.0.0-0](https://github.com/rei/rei-cedar/compare/v3.0.0-0...v4.0.0-0) (2017-09-05)



# [3.0.0-0](https://github.com/rei/rei-cedar/compare/v1.6.3...v3.0.0-0) (2017-08-08)



## [1.6.2](https://github.com/rei/rei-cedar/compare/v1.6.1...v1.6.2) (2017-03-22)



# [1.6.0](https://github.com/rei/rei-cedar/compare/v1.5.0...v1.6.0) (2017-02-28)



## [1.2.10](https://github.com/rei/rei-cedar/compare/v1.2.12...v1.2.10) (2016-08-24)



## [1.2.12](https://github.com/rei/rei-cedar/compare/v1.2.9...v1.2.12) (2016-08-10)



## [1.2.9](https://github.com/rei/rei-cedar/compare/v1.2.8...v1.2.9) (2016-06-14)



## [1.2.8](https://github.com/rei/rei-cedar/compare/v1.2.7...v1.2.8) (2016-06-13)



## [1.2.7](https://github.com/rei/rei-cedar/compare/v1.2.6...v1.2.7) (2016-03-25)



## [1.2.6](https://github.com/rei/rei-cedar/compare/v1.2.5...v1.2.6) (2016-03-23)



## [1.2.5](https://github.com/rei/rei-cedar/compare/v1.2.1...v1.2.5) (2016-03-22)



## [1.2.1](https://github.com/rei/rei-cedar/compare/v1.1.2...v1.2.1) (2016-03-18)



## [1.1.2](https://github.com/rei/rei-cedar/compare/v1.1.1...v1.1.2) (2016-03-07)



## [1.1.1](https://github.com/rei/rei-cedar/compare/v1.1.0...v1.1.1) (2016-03-03)



# [1.1.0](https://github.com/rei/rei-cedar/compare/v1.0.0...v1.1.0) (2016-02-29)



# [1.0.0](https://github.com/rei/rei-cedar/compare/44d25a3f793063fb8f305c1d9fc65dba4ca79338...v1.0.0) (2016-02-24)


### Reverts

* Revert "break up utility position" ([53a4676](https://github.com/rei/rei-cedar/commit/53a4676cdc78c0e5e80c09a795c6196ec49b7490))
* Revert "Further break up position utility" ([b737ac2](https://github.com/rei/rei-cedar/commit/b737ac2b3cda70dbb9a62ed826aadf815e454f79))



