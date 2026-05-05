import { defineConfig } from 'tsup'
import { resolve } from 'path'

const root = resolve(import.meta.dirname, './')

export default defineConfig((options) => {
  return {
    platform: 'neutral',
    entry: {
      index: resolve(root, './src/index.ts'),
    },
    outDir: 'dist',
    format: ['esm', 'cjs'],
    sourcemap: true,
    dts: true,
    clean: true,
    minify: !options.watch,
    splitting: false,
    tsconfig: resolve(root, `tsconfig.dev.json`),
    // 修正产物名 (tsup 默认会带上 .mjs / .cjs)
    outExtension({ format }) {
      return {
        js: format === 'esm' ? '.js' : '.cjs',
      }
    },
  }
})
