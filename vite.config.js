import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vincentp974.github.io/', // Remplacez par le nom de votre dépôt GitHub
  build: {
    outDir: 'dist', // Assurez-vous que la sortie correspond à votre déploiement
  },
})
