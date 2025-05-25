import { NextResponse } from "next/server";

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch (err) {
    return NextResponse.json(
      { error: "No se pudo parsear el body JSON", detalle: err.message },
      { status: 400 }
    );
  }

  const {
    ZOHO_CLIENT_ID,
    ZOHO_CLIENT_SECRET,
    ZOHO_REFRESH_TOKEN,
    ZOHO_API_DOMAIN,
    ZOHO_OAUTH_DOMAIN,
  } = process.env;

  // Esta función permite obtener nuevo access_token a partir del refresh token
  const refreshTokenUrl = new URL(
    "/oauth/v2/token",
    ZOHO_OAUTH_DOMAIN
  ).toString();

  const tokenRes = await fetch(refreshTokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      refresh_token: ZOHO_REFRESH_TOKEN,
      client_id: ZOHO_CLIENT_ID,
      client_secret: ZOHO_CLIENT_SECRET,
      grant_type: "refresh_token",
    }),
  });

  let tokenData;
  try {
    tokenData = await tokenRes.json();
  } catch (err) {
    return NextResponse.json(
      {
        error: "No se pudo parsear la respuesta de refresh token",
        detalle: err.message,
      },
      { status: 500 }
    );
  }

  if (!tokenData.access_token) {
    return NextResponse.json(
      { error: "No se pudo obtener access_token", detalle: tokenData },
      { status: 500 }
    );
  }

  const accessToken = tokenData.access_token;

  // Esta función permite crear la nueva lead con el access_token
  const leadUrl = new URL("/crm/v4/Leads", ZOHO_API_DOMAIN).toString();

  const leadRes = await fetch(leadUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [body],
    }),
  });

  const leadText = await leadRes.text();

  try {
    const leadData = JSON.parse(leadText);
    if (!leadRes.ok) {
      return NextResponse.json(
        { error: "Error al crear lead", detalle: leadData },
        { status: leadRes.status }
      );
    }
    return NextResponse.json({ success: true, response: leadData });
  } catch (err) {
    return NextResponse.json(
      { error: "Respuesta no JSON desde Zoho", detalle: leadText },
      { status: leadRes.status }
    );
  }
}
