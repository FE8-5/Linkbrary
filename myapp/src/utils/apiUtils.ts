export const replaceUrlParams = (url: string, params: { [key: string]: string | number }) => {
  let modifiedUrl = url;
  Object.keys(params).forEach(key => {
    modifiedUrl = modifiedUrl.replace(`{${key}}`, params[key].toString());
  });
  return modifiedUrl;
};
