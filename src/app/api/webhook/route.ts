import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN as string,
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { type, data } = body;

  if (type === "payment" && data?.id) {
    const payment = await new Payment(client).get({ id: String(data.id) });
    console.log("Payment status:", payment.status);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
