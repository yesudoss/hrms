import React, { useRef, useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";

const AzureUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadCancelled, setUploadCancelled] = useState(false);
  const abortControllerRef = useRef(null);

  const uploadFile = async (file) => {
    const blobServiceClient = new BlobServiceClient(
      `https://<your-storage-account-name>.blob.core.windows.net/?<your-SAS-token>`
    );

    const containerClient = blobServiceClient.getContainerClient("your-container-name");
    const blockBlobClient = containerClient.getBlockBlobClient(file.name);

    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    try {
      setUploading(true);
      setUploadCancelled(false);

      await blockBlobClient.uploadBrowserData(file, {
        abortSignal: abortController.signal,
        onProgress: (ev) => {
          console.log(`Uploaded ${ev.loadedBytes} bytes`);
        },
      });

      console.log("Upload complete");
    } catch (error) {
      if (abortController.signal.aborted) {
        console.log("Upload cancelled");
        setUploadCancelled(true);
      } else {
        console.error("Upload failed", error);
      }
    } finally {
      setUploading(false);
    }
  };

  const handleCancel = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) uploadFile(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {uploading && <button onClick={handleCancel}>Cancel Upload</button>}
      {uploadCancelled && <p>Upload was cancelled.</p>}
    </div>
  );
};

export default AzureUpload;
