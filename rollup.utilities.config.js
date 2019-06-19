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
];

export default config;
