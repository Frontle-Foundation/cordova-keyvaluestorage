import { GetPlatformId } from "./util/getPlatformId.js";
import { CordovaFileUtil } from "./util/cordovaFileUtil.js";

export class CordovaKeyValueStorage {
  static _instance = null;
  constructor() {
    if (CordovaKeyValueStorage._instance)
      return CordovaKeyValueStorage._instance;
    CordovaKeyValueStorage._instance = this;
  }

  #dir = null;
  #cordovaFileUtil = new CordovaFileUtil();

  getStorageDirEntry() {
    return this.#dir;
  }

  async load(storageFolderName = "cordovaKeyValueStorage") {
    try {
      const platformId = GetPlatformId.getId();
      if (platformId === "browser" || platformId === "electron") return;
      this.#dir = await this.#cordovaFileUtil.getDirEntry(
        cordova.file.dataDirectory,
        storageFolderName
      );
    } catch (e) {
      throw e;
    }
  }

  async #writeJson(fileEntry, jsonData) {
    return new Promise(async (resolve, reject) => {
      try {
        let readData = "";

        // read file
        readData = await this.#cordovaFileUtil.read(fileEntry);
        try {
          readData = JSON.parse(readData);
        } catch (e) {
          readData = {};
        }

        // modify data
        let keys = Object.keys(jsonData);
        for (let i = 0; i < keys.length; i++) {
          let key = keys[i];
          readData[key] = jsonData[key];
        }
        readData = JSON.stringify(readData);

        // write file
        await this.#cordovaFileUtil.write(fileEntry, readData);

        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }

  async getItem(key, fileName = key) {
    try {
      // check type
      if (typeof key !== "string") throw "key is not string";
      if (typeof fileName !== "string") throw "file name is not string";

      // if browser
      const platformId = GetPlatformId.getId();
      if (platformId === "browser" || platformId === "electron") {
        let value = localStorage.getItem(key);
        if (value === null) value = undefined;
        return value;
      }

      // get file entry
      const fileEntry = await this.#cordovaFileUtil.getFileEntry(
        fileName,
        this.#dir
      );

      // read file
      const fileData = await this.#cordovaFileUtil.read(fileEntry);

      // get value
      let result = undefined;
      try {
        result = JSON.parse(fileData);
      } catch (e) {
        result = {};
      }
      result = result[key];
      if (result !== undefined) result = String(result);
      return result;
    } catch (e) {
      throw e;
    }
  }

  async setItem(key, value, fileName = key) {
    try {
      // check type
      if (typeof key !== "string") throw "key is not string";
      if (typeof value !== "string") throw "value is not string";
      if (typeof fileName !== "string") throw "file name is not string";

      // if browser
      const platformId = GetPlatformId.getId();
      if (platformId === "browser" || platformId === "electron") {
        localStorage.setItem(key, value);
        return;
      }

      // get file entry
      const fileEntry = await this.#cordovaFileUtil.getFileEntry(
        fileName,
        this.#dir
      );

      // write file
      await this.#writeJson(fileEntry, { [key]: value });
    } catch (e) {
      throw e;
    }
  }
}
