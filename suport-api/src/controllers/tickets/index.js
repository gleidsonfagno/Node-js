export function index({ request, response, database }) {
  const { status } = request.query;
  // console.log(status);

  const filters = status ? {status} : null

  const tickets = database.select("tickets", filters);

  return response.end(JSON.stringify(tickets));
}
