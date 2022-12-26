<p align="center">
  <a href="https://frontle.org/" target="blank"><img src="https://user-images.githubusercontent.com/49587288/209550001-97ccc567-f9d9-4f47-affe-7abccb3967e6.png" width="120" alt="Frontle Logo" /></a>
</p>

  <p align="center">The easiest multi-platform SPA framework.</p>

<p align="center">
  <a href="https://www.npmjs.com/~frontle"><img src="https://img.shields.io/npm/v/@frontle/cordova-keyvaluestorage.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~frontle"><img src="https://img.shields.io/npm/l/@frontle/cordova-keyvaluestorage.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~frontle"><img src="https://img.shields.io/npm/dm/@frontle/cordova-keyvaluestorage.svg" alt="NPM Downloads" /></a>
</p>


## Description

File-based key-value storage

## Usage

```javascript
import { CordovaKeyValueStorage } from "../../browser_modules/@frontle/cordova-keyvaluestorage/index.js";

// get instance
const cordovaKeyValueStorage = new CordovaKeyValueStorage();

// load storage
await cordovaKeyValueStorage.load();

// get storage directory entry
console.log(cordovaKeyValueStorage.getStorageDirEntry());

// save data
await cordovaKeyValueStorage.setItem('test', '123');

// get data
console.log(await cordovaKeyValueStorage.getItem('test')); // 123
```

## Install

**Frontle**

```shell
$ frontle install @frontle/cordova-keyvaluestorage --noBuild
```

**Download Vanilla JS Library**

https://github.com/Frontle-Foundation/cordova-keyvaluestorage

## API

#### new CordovaKeyValueStorage()

Creating a CordovaKeyValueStorage object. Single tone pattern used

```javascript
const cordovaKeyValueStorage = new CordovaKeyValueStorage();
```

#### .load(storageFolderName = 'cordovaKeyValueStorage')

Load storage. You must run this function before you can use any of the other functions

```javascript
await cordovaKeyValueStorage.load();
```

#### .getStorageDirEntry()

Get Storage directory entry

```javascript
console.log(cordovaKeyValueStorage.getStorageDirEntry());
```

#### .setItem(key, value, fileName = key)

Save Value

```javascript
await cordovaKeyValueStorage.setItem('test', '123');
```

#### .getItem(key, fileName = key)

Get Value

```javascript
console.log(await cordovaKeyValueStorage.getItem('test')); // 123
```

## People

The original author of @frontle/cordova-keyvaluestorage is [MushStory](https://github.com/MushStory)

## License

[MIT](LICENSE)