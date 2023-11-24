import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const PORT = process.env.PORT || 3001;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  root: `${process.cwd()}/src`, // default value is: process.cwd(). My workplace put './src'. root is the project's root directory, where index.html is located. Can be an absolute path, or a path relative to the current working directory.
  publicDir: './public', // default is "public". The location of the public dir relative to the index.html file.
  base: '/', // default value is '/'. My workplace put '/app/' Base public path when served in development or production.
  server: {
    port: +PORT, // Note if this port is already being used, Vite will automatically try the next available port so this may not be the actual port the server ends up listening on.
    strictPort: true, // default is false. Set to true to exit if port is already in use, instead of automatically trying the next available port.
    open: true, // default is false. Automatically opens the app in the browser on server start. You can specify a URL's pathname i.e a string instead of true, and it will open that page.
    watch: { usePolling: true }, // When running Vite on Windows Subsystem for Linux (WSL) 2, if the project folder resides in a Windows filesystem, you'll need to set this option to { usePolling: true }. This is due to a WSL2 limitation with the Windows filesystem. The Vite server watcher skips .git/ and node_modules/ directories by default.
  },
  resolve: {},
  plugins: [react()], // <--- webpackStats - `fileName` defaults to "webpack-stats.json". It's the JSON file's output name.
  envDir: path.resolve('envs'),
  clearScreen: false, // <--- default is true. false prevents Vite from clearing the terminal screen when logging certain messages
  logLevel: 'info', // <--- default is info. Options are: info, warn, error, silent
  // envPrefix: 'VITE_', // <--- default is VITE_
  // appType: 'spa', // <--- default is spa. For ssr, use custom
  cacheDir: '../node_modules/.vite-my-cache',
  build: {
    outDir: '../dist', // <--- default is dist. Specify the output directory (relative to project root).
    sourcemap: true, // <--- default is false. Options are: true, false, inline, hidden. Generate production source maps. If true, a separate sourcemap file will be created. If 'inline', the sourcemap will be appended to the resulting output file as a data URI. 'hidden' works like true except that the corresponding sourcemap comments in the bundled files are suppressed.
    minify: 'esbuild', // <--- Options are: 'esbuild' (default) | 'terser'. The default is esbuild which is 20 ~ 40x faster than terser and only 1 ~ 2% worse compression. Terser must be installed when it is set to 'terser'.
    target: 'modules', // <--- default is modules. Options are: modules, esnext,
    manifest: true, // <--- When set to true, the build will also generate a manifest.json file that contains a mapping of non-hashed asset filenames to their hashed versions, which can then be used by a server framework to render the correct asset links. When the value is a string, it will be used as the manifest file name. Defaults to false.
    ssrManifest: true, // <--- When set to true, the build will also generate an SSR manifest for determining style links and asset preload directives in production. When the value is a string, it will be used as the manifest file name. Defaults to false.
    emptyOutDir: true, // <--- defaults to true if outDir is inside root. By default, Vite will empty the outDir on build if it is inside project root. It will emit a warning if outDir is outside of root to avoid accidentally removing important files. You can explicitly set this option to suppress the warning. This is also available via command line as --emptyOutDir
    chunkSizeWarningLimit: 500, // <--- default is 500. Limit for chunk size warnings (in kbs).
    watch: null, // <--- default is null. Set to {} to enable rollup watcher.
    assetsDir: 'assets', // <--- default is assets. Specify the directory to nest generated assets under (relative to build.outDir).
    assetsInlineLimit: 4096, // <--- default is 4096. Imported or referenced assets that are smaller than this threshold will be inlined as base64 URLs to avoid extra http requests. Set to 0 to disable inlining altogether.
    cssCodeSplit: true, // <--- default is true. Enable/disable CSS code splitting. When enabled, CSS imported in async chunks will be inlined into the async chunk itself and inserted when the chunk is loaded. If disabled, all CSS in the entire project will be extracted into a single CSS file.
    cssMinify: 'esbuild', // <--- Options are: 'esbuild' (default) | 'lightningcss'.
  },
  preview: { port: +PORT, strictPort: true, open: true }, // When running `npm run preview` locally, no loadEnvVariables process occurs, so VITE_PORT would be undefined. On a CI however, there are always ENV VARIABLES set in the global scope so it *would* work.
  css: {
    modules: {
      generateScopedName: mode === 'development' ? '[name].[local].[hash:base64:3]' : '[hash:base64:7]',
      localsConvention: 'camelCaseOnly',
      // scopeBehaviour: 'local'
    },
    devSourcemap: true,
    transformer: 'postcss', // <--- Options are: 'postcss' (default) | 'lightningcss'. While Lightning CSS handles the most commonly used PostCSS plugins like autoprefixer, postcss-preset-env, and CSS modules, you may still need PostCSS for more custom plugins like TailwindCSS. If that's the case, your PostCSS config will be picked up automatically.
  },
  // This is the config for vitest:
  test: {
    watch: false, // default value is true. true enables watch mode, which means running p test won't exit.
    restoreMocks: true, // default value is false. Will call .mockRestore() on all spies before each test. This will clear mock history and reset its implementation to the original one.
    reporters: ['verbose'], // default value is 'default'. 'default' collapses suites when they pass. 'verbose' keeps the full task tree visible.
    // include defaults to ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
    include: ['packages/**/__tests__/**/*.test.*', 'apps/**/__tests__/**/*.test.*'],
    // exclude defaults to ['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**', '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*']
    exclude: [
      // the manually added ones:
      'apps/e2e/**',
      'apps/app-frontend/**',
      // the default ones:
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
    ],
    // ----------------
    // OPTIONAL OPTIONS
    // ----------------
    // globals: true, // Default value is false. By default, vitest does not provide global APIs for explicitness. If you prefer to use the APIs globally like Jest, you can pass the --globals option to CLI or add globals: true in the config.
    // clearMocks: true, // default value is false. DONT USE!!! USE restoreMocks INSTEAD! Will call .mockClear() on all spies before each test. This will clear mock history, but not reset its implementation to the default one.
    // mockReset: true, // default value is false. DONT USE!!! USE restoreMocks INSTEAD! Will call .mockReset() on all spies before each test. This will clear mock history and reset its implementation to an empty function (will return undefined).
    // testTimeout: 5000, // default value is 5000. Default timeout of a test in milliseconds.
    // hookTimeout: 10000, // default value is 10000. Default timeout of a hook in milliseconds.
    // passWithNoTests: true, // default value is false. if true, Vitest will not fail, if no tests will be found.
    // testNamePattern: 'OnlyRunThis', // default value is undefined. Use this property when wanting to test a single suite test. Only run tests that their full name includes this property's value (i.e. value is OnlyRunThis, and test is "test('OnlyRunThis',... )"). Tests which don't match pattern will get skipped.
  },
}));
