import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [vue()],
    server: {
        port: 8080,
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve (__dirname, 'src'),
            },
            {
                find: '@base',
                replacement: path.join (__dirname, `spitfire-vue-component-lib/components/base_browser`),
            },
            {
                find: '@components',
                replacement: path.join (__dirname, `spitfire-vue-component-lib/components/`),
            },
        ],
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
});
