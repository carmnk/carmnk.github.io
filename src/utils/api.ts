import { AxiosResponse } from "axios";

export const extractFilenameFromResponse = (res: AxiosResponse) => {
  const cdisposition = res?.headers?.["content-disposition"];
  if (!cdisposition) return null;
  const filenameStart = cdisposition?.indexOf("filename=") + 9;
  const filenameEndRaw = cdisposition?.indexOf(";", filenameStart);
  const fileNameEnd = filenameEndRaw === -1 ? undefined : filenameEndRaw;
  const filename = cdisposition
    ?.slice?.(filenameStart, fileNameEnd)
    ?.replaceAll('"', "");
  return filename;
};

export const extractHeaderValueFromResponse = (
  res: AxiosResponse,
  headerKey: string
) => {
  const cdisposition = res?.headers?.[headerKey];
  if (!cdisposition) return null;
  return cdisposition;
};

export const openDownloadWithLink = (link: HTMLAnchorElement) => {
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const getLinkFromDownloadResponse = (res: AxiosResponse) => {
  const filename = extractFilenameFromResponse(res);
  if (!filename) throw new Error("filename/filetype not received from header");
  const url = window.URL.createObjectURL(new Blob([res.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  return link;
};
