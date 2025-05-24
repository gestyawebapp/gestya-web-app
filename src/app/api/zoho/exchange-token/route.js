// /app/api/zoho/exchange-token/route.js
export async function POST(req) {
  const body = await req.json();
  const { grant_token } = body;

  const client_id = process.env.ZOHO_CLIENT_ID;
  const client_secret = process.env.ZOHO_CLIENT_SECRET;
  const redirect_uri = process.env.ZOHO_REDIRECT_URI; // Puede ser http://localhost si es Self Client

  if (!grant_token) {
    return new Response(JSON.stringify({ error: "Falta el grant_token" }), {
      status: 400,
    });
  }

  const formData = new URLSearchParams({
    grant_type: "authorization_code",
    code: grant_token,
    client_id,
    client_secret,
    redirect_uri,
  });

  try {
    const zohoRes = await fetch("https://accounts.zoho.com/oauth/v2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    const data = await zohoRes.json();

    if (!zohoRes.ok) {
      return new Response(JSON.stringify({ error: data }), {
        status: zohoRes.status,
      });
    }

    // Podés guardar el refresh_token en una base de datos o archivo .env para uso posterior
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Error al contactar Zoho", detail: err.message }),
      { status: 500 }
    );
  }
}
