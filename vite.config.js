import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// На GitHub Pages сайт отдаётся с подпути https://<user>.github.io/1olanding/,
// поэтому для прод-сборки И для `vite preview` нужен base = '/1olanding/'
// (иначе preview отдаёт dist по '/', а собранный HTML ждёт ассеты на '/1olanding/').
// Локальный dev-сервер остаётся на '/'.
export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? '/1olanding/' : '/',
  plugins: [react()],
  server: { port: 5174 },
}))
