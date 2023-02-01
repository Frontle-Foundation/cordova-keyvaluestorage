const getDirEntry = async (path, folderName, create = true) => {
  return new Promise((resolve, reject) => {
    window.resolveLocalFileSystemURL(
      path,
      (dirEntry) => {
        dirEntry.getDirectory(
          folderName,
          {
            create: create,
            exclusive: false,
          },
          function (directory) {
            resolve(directory);
          },
          function (error) {
            reject(error);
          }
        );
      },
      (error) => {
        reject(error);
      }
    );
  });
};

const getFileEntry = async (fileName, dirEntry, create = true) => {
  return new Promise((resolve, reject) => {
    dirEntry.getFile(
      fileName,
      { create: create, exclusive: false },
      (fileEntry) => {
        resolve(fileEntry);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

const read = async (fileEntry) => {
  return new Promise((resolve, reject) => {
    try {
      fileEntry.file(
        (file) => {
          let reader = new FileReader();
          reader.onloadend = (r) => {
            resolve(String(r.target.result));
          };
          reader.readAsText(file);
        },
        (e) => {
          throw e;
        }
      );
    } catch (e) {
      reject(e);
    }
  });
};

const write = async (fileEntry, writeData) => {
  return new Promise((resolve, reject) => {
    try {
      fileEntry.createWriter((fileWriter) => {
        fileWriter.onwriteend = () => {
          resolve();
        };
        fileWriter.onerror = (e) => {
          reject(e);
        };
        fileWriter.write(new Blob([writeData]), { type: "text/plain" });
      });
    } catch (e) {
      reject(e);
    }
  });
};

const remove = async (fileName, dirEntry) => {
  return new Promise((resolve, reject) => {
    try {
      dirEntry.getFile(
        fileName,
        { create: false },
        (fileEntry) => {
          fileEntry.remove(
            () => {
              resolve();
            },
            (error) => {
              reject(error);
            }
          );
        },
        (e) => {
          throw e;
        }
      );
    } catch (e) {
      reject(e);
    }
  });
};

const removeDir = async (dirEntry) => {
  return new Promise((resolve, reject) => {
    try {
      dirEntry.removeRecursively(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    } catch (e) {
      reject(e);
    }
  });
};

export { getDirEntry, getFileEntry, read, write, remove, removeDir };
