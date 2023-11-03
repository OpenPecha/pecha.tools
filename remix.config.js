/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverBuildPath: "server/build/index.js",
  serverModuleFormat: "cjs",
  tailwind: true,
  postcss: true,
};
