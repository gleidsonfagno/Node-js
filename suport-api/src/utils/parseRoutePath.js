// tratar os capos  formatando  com  regex
export function parseRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g;

  const params = path.replace(routeParametersRegex, "(?<$1>[a-zA-Z0-9_-]+)");

  const pathRegex = new RegExp(`^${params}(\\?(?<query>.*))?$`);
  //   const regex = new RegExp(`^${params}(?:\\?(?<query>.*))?$`);
  return pathRegex;
}
