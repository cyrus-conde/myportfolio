import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import {resolve} from 'path';

export default defineConfig({
    publicDir: 'publicest/',
    build:{
        watch:{
            manifest: true,
            outDir: 'public/build',
            rollupOptions: {
                input: ['resources/js/app.jsx','resources/css/app.css'],
            }
            
            
            
        }
        
        
    },
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.jsx'
            ],
            refresh: true,
            
        }),
        react(),
    ],
    
});
