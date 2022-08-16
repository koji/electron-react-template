import { build } from "electron-builder";

const productName = "ElectronReact App";

build({
  config: {
    productName: productName,
    artifactName: "${productName}-${version}-${platform}-${arch}.${ext}",
    files: ["dist/**/*"],
    directories: {
      output: "release",
      buildResources: "assets",
    },
    win: {
      target: ["zip", "nsis"],
      icon: "assets/icon.ico",
    },
    nsis: {
      artifactName: "${productName}-${version}-installer.${ext}",
      installerIcon: "assets/installer.ico",
    },
    mac: {
      identity: null,
      target: ["default"],
      icon: "assets/icon.icns",
    },
  },
});
