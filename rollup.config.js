import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import glob from 'fast-glob';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: glob.sync('src/**/*.ts', { absolute: true }),
  output: [
    {
      dir: 'dist',
      format: 'esm'
    }
  ],
  plugins: [
    peerDepsExternal(),

    // TODO
    {
      name: 'dynamic-import-replacer',
      resolveDynamicImport(specifier, importer) {
        if (importer.endsWith('icon.js')) {
          return '`@htmlplus/core/icon/names/${name}.js`';
        }
      }
    },

    resolve(),
    commonjs(),
    typescript(),
    copy({
      targets: [
        {
          src: ['package-lock.json', 'README.md'],
          dest: 'dist'
        },
        {
          src: 'package.json',
          dest: 'dist',
          transform(content) {
            const parsed = JSON.parse(content);
            delete parsed.scripts;
            return JSON.stringify(parsed, null, 2);
          }
        }
      ]
    })
  ]
};
