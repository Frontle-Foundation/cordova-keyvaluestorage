const GetPlatformID = () => {
  return window.cordova === undefined ? "browser" : window.cordova.platformId;
};

export { GetPlatformID };
