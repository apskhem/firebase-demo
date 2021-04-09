require("esbuild").build({
    entryPoints: [ "src/index.ts" ],
    bundle: true,
    minify: true,
    outfile: "build/bundle.js",
    platform: "browser",
    external: [ "firebase" ]
}).catch(() => process.exit(1))