import { defineConfig } from 'vite'
import path from 'path'

const isProduction = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
    // 项目根目录
    root: process.cwd(),
    // 在生产中服务时的基本公共路径
    base: isProduction ? './' : '',
    // 配置中指明将会把 serve 和 build 时的模式都覆盖掉,serve 时默认 'development'，build 时默认 'production'
    mode: 'development',
    // 在开发时会被定义为全局变量，而在构建时则是静态替换
    define: '',
    // 静态资源服务的文件夹
    publicDir: 'assets',
    resolve: {
        // 目录别名
        alias: {
            '@': path.resolve(__dirname, '/src'),
        },

    },
})