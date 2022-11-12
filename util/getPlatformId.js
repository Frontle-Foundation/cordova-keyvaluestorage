export class GetPlatformId {
  // browser, android, ios, electron
  static getId = () => {
    let result = "";

    // platform is browser
    if (location.href.substring(0, 4) === "http") {
      // browser
      if (window.cordova === undefined) result = "browser";
      // live reload
      else result = window.cordova.platformId;
    }
    // platform is cordova android or ios or electron
    else result = window.cordova.platformId;

    return result;
  };
}
