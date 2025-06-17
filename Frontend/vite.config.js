import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
  server: {
    allowedHosts: ['b5dd-2402-8100-3953-6a9c-8c3f-43a8-f33a-7dc7.ngrok-free.app'], // ⬅️ your ngrok domain here
    host: true, // allows Vite to listen on all interfaces
  },
})