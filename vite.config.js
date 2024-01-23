import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin(["VITE_REACT_APP_ACCESS_TOKEN", "VITE_REACT_APP_SPACE_ID", "VITE_ARITABLE_TOKEN"]),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
