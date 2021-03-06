import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3001,
    },
    plugins: [
        vue({
            template: { transformAssetUrls },
        }),
        quasar(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
