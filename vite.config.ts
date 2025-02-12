import react from '@vitejs/plugin-react-swc';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  // depending on your application, base can also be "/"
  base: '',
  plugins: [react(), viteTsconfigPaths()],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 3000
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      }
    ]
  },
  build: {
    // --> ["chrome79", "edge92", "firefox91", "safari13.1"]
    target: browserslistToEsbuild(['>0.2%', 'not dead', 'not op_mini all'])
  }
});
