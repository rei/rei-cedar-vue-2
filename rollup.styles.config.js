import postcss from 'rollup-plugin-postcss';


const config = [
  {
    input: 'src/utilities.js',
    output: [
      {
        file: 'public/utilities.js',
        format: 'esm',
      },
    ],
    plugins: [
      postcss({
        extract: 'dist/utilities.css',
        extensions: ['.scss', '.css'],
      }),
    ],
  },
  {
    input: 'src/reset.js',
    output: [
      {
        file: 'public/reset.js',
        format: 'esm',
      },
    ],
    plugins: [
      postcss({
        extract: 'dist/reset.css',
        extensions: ['.scss', '.css'],
      }),
    ],
  },
];

export default config;
