import { build } from "esbuild";
import { htmlPlugin } from "@craftamap/esbuild-plugin-html";

const isDevMode = process.env.NODE_ENV === "development";

build({
  entryPoints: ["electron_app/src/main.ts", "electron_app/src/preload.ts"],
  bundle: true,
  platform: "node",
  outdir: "./dist",
  external: ["electron", "electron-reload"],
  watch: isDevMode,
  minify: !isDevMode,
  sourcemap: isDevMode,
});

build({
  entryPoints: ["react_app/src/index.tsx"],
  bundle: true,
  metafile: true,
  platform: "browser",
  outdir: "./dist",
  watch: isDevMode,
  minify: !isDevMode,
  sourcemap: isDevMode,
  plugins: [
    htmlPlugin({
      files: [
        {
          entryPoints: ["react_app/src/index.tsx"],
          filename: "index.html",
          htmlTemplate: "react_app/index.html",
        },
      ],
    }),
  ],
});
