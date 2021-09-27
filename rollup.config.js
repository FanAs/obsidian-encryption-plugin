import typescript from '@rollup/plugin-typescript';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
const {spawn, spawnSync} = require('child_process');

const execute = (commands, sync) => ({
  name: 'execute',
  generateBundle: () => {
    const copy = commands.slice(0);
    const next = function () {
      let command;
      if (!(command = copy.shift())) {
        return
      }

      if ((sync !== undefined) && (sync == true)) {
        let ret = spawnSync(command, {
          shell: true,
          stdio: 'inherit',
          env: process.env
        })
        if (ret.status === 0) {
          next()
        }
      } else {
        spawn(command, {
          shell: true,
          stdio: 'inherit',
          env: process.env
        }).on('close', function (code) {
          if (code === 0) {
            next()
          }
        })
      }

    };
    next()
  }
});

export default {
  input: 'main.ts',
  output: {
    dir: '.',
    sourcemap: 'inline',
    format: 'cjs',
    exports: 'default'
  },
  external: ['obsidian'],
  plugins: [
    nodeResolve({browser: true}),
    typescript(),
    commonjs(),
    execute(['./copy.bash'])
  ]
};