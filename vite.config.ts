import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    console.log(env);

    return {
        plugins: [react()],
        server: {
            proxy: {
                '/api': {
                    target: env.VITE_PROXY_TARGET,
                    changeOrigin: true,
                    secure: false,
                }
            }
        }
    }
})