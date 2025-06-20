import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
  server: {
       allowedHosts: [
      'ridge-frost-subscribers-undergraduate.trycloudflare.com'  // ⬅️ Add your Cloudflare tunnel host here
    ], // ⬅️ your ngrok domain here
    host: true, // allows Vite to listen on all interfaces
  },
})