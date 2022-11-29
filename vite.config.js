import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    build:{
        watch:{
            rollupOptions: {
                // overwrite default .html entry
                input: 'resources/js/app.js'
            },
            plugins: [
                laravel({
                    input: [
                        'resources/sass/app.scss',
                        'resources/js/app.js',
                    ],
                    refresh: true,
                }),
                react(),
            ],
        }
    }
    
});
