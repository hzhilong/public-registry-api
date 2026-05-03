import { defineConfig, type ConfigEnv } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'node:path'

export default defineConfig((_configEnv: ConfigEnv) => {
  return {
    base: './',
    oxc: false,
    plugins: [
      // 生成 .d.ts 类型文件
      dts({
        tsconfigPath: 'tsconfig.dev.json',
        outDir: 'dist',
        entryRoot: 'src',
        // 将所有声明合并到一个文件中
        rollupTypes: true,
      }),
    ],
    build: {
      // 代码混淆和压缩
      minify: true,
      target: 'es2020',
      lib: {
        // 库的入口文件
        entry: {
          index: path.resolve(__dirname, 'src/index.ts'),
        },
        // 库的名称，会作为全局变量名使用
        name: 'public-registry-api',
        formats: ['es', 'cjs'],
        fileName: (format, entryName) => {
          if (format === 'es') {
            return `${entryName}.js`
          }
          return `${entryName}.umd.cjs`
        },
      },
      sourcemap: true,
      rolldownOptions: {
        // 不想打包进库的依赖
        external: [],
        output: {
          // 不保留目录结构
          preserveModules: false,
        },
      },
    },
  }
})
