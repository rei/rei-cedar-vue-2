import path from 'path';
import process from 'process';
import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import alias from 'rollup-plugin-alias';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import copyPlugin from 'rollup-plugin-copy';
import babel from 'rollup-plugin-babel';
import packageJson from '../package.json';


// 
// const styleInjector = `function() {
//   var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
//   function createInjector(context) {
//     return function (id, style) {
//       return addStyle(id, style);
//     };
//   }
//   var HEAD;
//   var styles = {};
// 
//   function addStyle(id, css) {
//     var group = isOldIE ? css.media || 'default' : id;
//     var style = styles[group] || (styles[group] = {
//       ids: new Set(),
//       styles: []
//     });
// 
//     if (!style.ids.has(id)) {
//       style.ids.add(id);
//       var code = css.source;
// 
//       if (css.map) {
//         // https://developer.chrome.com/devtools/docs/javascript-debugging
//         // this makes source maps inside style tags work properly in Chrome
//         code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875
// 
//         code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
//       }
// 
//       if (!style.element && document) {
//         style.element = document.createElement('style');
//         style.element.type = 'text/css';
//         if (css.media) style.element.setAttribute('media', css.media);
// 
//         if (HEAD === undefined) {
//           HEAD = document.head || document.getElementsByTagName('head')[0];
//         }
// 
//         HEAD.appendChild(style.element);
//       }
// 
//       if ('styleSheet' in style.element) {
//         style.styles.push(code);
//         style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
//       } else if (document) {
//         var index = style.ids.size - 1;
//         var textNode = document.createTextNode(code);
//         var nodes = style.element.childNodes;
//         if (nodes[index]) style.element.removeChild(nodes[index]);
//         if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
//       }
//     }
//   }
//   return createInjector;
// }`

function resolve(dir) {
  return path.join(__dirname, dir);
}

const env = process.env.NODE_ENV;
const ssrEnv = process.env.SSR_ENV;

// plugin configs
let postcssExtract = false;
let copyTargets = [''];
let SSROptimize = false;
let copyOutput = 'public';

// prod only options
if (env === 'prod') {
  postcssExtract = 'dist/cedar.css';
  copyOutput = 'dist';
}

// dev and prod options
if (env !== 'test') {
  copyTargets = ['static/cdr-fonts.css'];
  // SSR build
  if (ssrEnv === 'ssr') {
    SSROptimize = true;
  }
}

console.log('SSR', ssrEnv);
console.log('postcssExtract', postcssExtract);

const plugins = [
  alias({
    resolve: ['.vue', '.json', '.js'],
    srcdir: resolve('src'),
    cssdir: resolve('src/css'),
    assetsdir: resolve('src/assets'),
    componentsdir: resolve('src/components'),
    compositionsdir: resolve('src/compositions'),
    directivesdir: resolve('src/directives'),
    mixinsdir: resolve('src/mixins'),
  }),
  nodeResolve({
    mainFields: ['module', 'jsnext:main', 'main'],
    extensions: ['.mjs', '.js', '.jsx', '.json', '.css'],
  }),
  vue({
    // styleInjector: styleInjector,
    css: false,
    style: {
      // postcssCleanOptions: { disabled: true },
      postcssModulesOptions: {
        generateScopedName(name, filename, css) {
          // to preseve '@' in responsive class names
          return `${name}_${packageJson.version}`;
        },
      },
    },
    data: {
      // this gets prepended in all components <style>
      scss() {
        return `@import "${resolve('node_modules/@rei/cdr-tokens/dist/scss/cdr-tokens.scss')}";
        @import "${resolve('src/css/settings/_index.scss')}";`;
      },
    },
    template: {
      isProduction: env === 'prod',
      optimizeSSR: SSROptimize,
    },
  }),
  postcss({
    extract: postcssExtract,
    extensions: ['.scss', '.css'],
    sourceMap: env === 'dev' ? 'inline' : false, 
  }),
  commonjs(),
  copyPlugin({
    targets: copyTargets,
    outputFolder: copyOutput
  }),
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true,
  }),
];

export default plugins;
