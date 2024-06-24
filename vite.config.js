import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as dotenv from "dotenv";
dotenv.config();

// eslint-disable-next-line no-undef
const PORT = process.env.VITE_PORT || 3005;

export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
  },
});
