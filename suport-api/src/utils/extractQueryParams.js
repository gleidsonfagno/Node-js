export function extractQueryParams(query) {
  return query
    .slice(0)
    .split("&")
    .reduce((queryParams, param) => {
      const [key, value] = param.split("=");
      queryParams[key] = value;
      return queryParams;
    }, {});
}
