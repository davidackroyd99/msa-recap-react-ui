export { uploadBlob, projectName };

// See https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

async function projectName(): Promise<string> {
  let response = await fetch('/api/ProjectNameService');

  if (!response.ok)
    throw new Error('No project name returned');

  return await response.text();
}

// For large files it will be necessary to call blob.slice() and upload in parts.
async function uploadBlob(blob: Blob, name: string, exten: string, insights: boolean): Promise<string> {
  console.info('Blob size', blob.size);

  let for_insights = '&insights=';
  if (insights)
    for_insights = '&insights=-for-insights';

  let response = await fetch('/api/UploadService?name=' + name + '&exten=' + exten + for_insights, { method: 'POST', body: blob });

  return await response.text();
}

