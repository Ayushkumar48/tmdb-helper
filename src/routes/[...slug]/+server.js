import { TMDB_BASE_URL, TMDB_READ_ACCESS_KEY } from "$env/static/private";

export async function GET({ url }) {
  const pathname = url.pathname;

  const apiUrl = `${TMDB_BASE_URL}${pathname}`;
  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${TMDB_READ_ACCESS_KEY}`,
    },
  });

  if (!response.ok) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
