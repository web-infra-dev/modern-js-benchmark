export type Metrics = {
  // Compile speed (dev)
  beforeDevTime?: number;
  devHotBootTime?: number;
  devColdBootTime?: number;
  devHotRecompileTime?: number;
  devColdRecompileTime?: number;
  devPluginSetupTime?: number;
  devPrepareTime?: number;

  // Compile speed (build)
  beforeBuildTime?: number;
  buildHotBootTime?: number;
  buildColdBootTime?: number;
  buildPluginSetupTime?: number;
  buildPrepareTime?: number;
  buildCjsTime?: number;
  buildEsmTime?: number;
  buildDtsTime?: number;
  routeGenerateTime?: number;

  // Bundle size
  minifiedBundleSize?: number;
  gzippedBundleSize?: number;
  distSize?: number;
  gzippedDistSize?: number;
  initialJsSize?: number;
  gzipInitialJsSize?: number;

  // Install Size
  installSize?: number;
  hotInstallTime?: number;
  coldInstallTime?: number;
  dependenciesCount?: number;
};
