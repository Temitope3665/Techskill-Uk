import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin(["VITE_REACT_APP_ACCESS_TOKEN", "VITE_REACT_APP_SPACE_ID", "REACT_SLACK_URL", "REACT_STRIPES_PREMIUM_PACKAGE",
  "VITE_AIRTABLE_TOKEN", "REACT_STRIPES_CAREER_SUPPORT_SERVICES", "REACT_CALENDLY_URL", "REACT_STRIPES_PREMIUM_PACKAGE_TRAINING_ONLY", "REACT_STRIPES_GLOBAL_TALENT_CONSULTATION",
  "VITE_REGISTER_USER_API"]),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
