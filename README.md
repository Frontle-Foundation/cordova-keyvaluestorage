# @frontle/cordova-keyvaluestorage

> File-based key-value storage

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
frontle install @frontle/cordova-keyvaluestorage --noBuild
```

**Download files**

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