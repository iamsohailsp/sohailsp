const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");
const { isBuffer } = require("util");

async function uploadToBlobContainer( fileName, blobData ) {
  return new Promise(async function (resolve, reject) {
    const account = "storageaccountzampl852f";
    const accountKey = "zmuUJCRaIqd9/CPZcFX0DxcQrGCU8johImVJt6EMFUf2DyM4UyGDqAmNvEucq3dF0JLxJHHCU5MT4SIvBAi8QQ==";
    const containerName = `icashiq`;
    let imageLink = `https://${account}.blob.core.windows.net/${containerName}/${fileName}`

    const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);

    const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net`, sharedKeyCredential);

    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobName = fileName;

    let appendBlobClient = containerClient.getBlockBlobClient(blobName);
     appendBlobClient = containerClient.getAppendBlobClient(blobName);
    let uploadResponse;
    try {
      // Check if the blob already exists, if not, create it.
      if (!(await appendBlobClient.exists())) {
          await appendBlobClient.create();
      }
      appendBlobClient
        .appendBlock(blobData, blobData.byteLength)
        .then((response) => {
          resolve({ success: true, response });
        })
        .catch((err) => {
          reject(err);
        });
      resolve(imageLink+'')
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = uploadToBlobContainer;
