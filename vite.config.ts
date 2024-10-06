import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        viteTsconfigPaths(),
        svgr({
            include: '**/*.svg?react',
        }),
        {
            name: "markdown-loader",
            transform(code, id) {
                if (id.slice(-3) === ".md") {
                    // For .md files, get the raw content
                    return `export default ${JSON.stringify(code)};`;
                }
            }
        }
    ],
    server: {
        proxy: {
            '/blog': {
                target: 'http://localhost:3000',  // VitePress dev server
                configure: (proxy, _options) => {
                    proxy.on('error', (err, _req, _res) => {
                        console.log('proxy error', err);
                    });
                    proxy.on('proxyReq', (proxyReq, req, _res) => {
                        console.log('Sending Request to the Target:', req.method, req.url);
                    });
                    proxy.on('proxyRes', (proxyRes, req, _res) => {
                        console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
                    });
                },

            },
        },
    }
});
