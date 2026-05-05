import { defineConfig } from 'tsup'
import { resolve } from 'path'
import { builtinModules } from 'node:module'

const root = resolve(import.meta.dirname, './')

export default defineConfig((options) => {
  return {
    entry: {
      index: resolve(root, './src/index.ts'),
    },
    outDir: 'dist',
    format: ['esm', 'cjs'],
    sourcemap: true,
    // 类型生成
    dts: true,
    clean: true,
    minify: !options.watch,
    // 禁用代码分割，确保每个入口是独立文件
    splitting: false,
    external: [...builtinModules, /^node:/],
    tsconfig: resolve(root, `tsconfig.dev.json`),
    // 修正产物名 (tsup 默认会带上 .mjs / .cjs)
    outExtension({ format }) {
      return {
        js: format === 'esm' ? '.js' : '.cjs',
      }
    },
  }
})
