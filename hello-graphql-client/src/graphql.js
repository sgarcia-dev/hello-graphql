const API = "http://localhost:9000";

export async function getGraphqlData(queryObj) {
  const response = await fetch(`${API}/graphql`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(queryObj)
  });

  return response.json();
}
