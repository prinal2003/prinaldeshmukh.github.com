import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
    plugins: [glsl()],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            fs: 'empty-module',
        },
    },
    server: {
        host: 'localhost',
        port: 3000,
    },
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'main.built.js',
            }
        }
    }
});
