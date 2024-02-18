import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin(["VITE_REACT_APP_ACCESS_TOKEN", "VITE_REACT_APP_SPACE_ID", "REACT_SLACK_URL",
  "VITE_ARITABLE_TOKEN", "REACT_APP_DISCOVERY_DOCS", "REACT_APP_SCOPES", "REACT_APP_GOOGLE_API_KEY", "REACT_APP_CLIENT_ID", "REACT_CALENDLY_URL"]),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
