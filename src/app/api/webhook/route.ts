import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN as string,
  options: {
    integratorId: process.env.INTEGRATOR_ID,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    if (type === "payment" && data?.id) {
      try {
        const payment = await new Payment(client).get({ id: String(data.id) });
        console.log("Payment status:", payment.status);
      } catch (error) {
        console.error("Could not fetch payment:", error);
      }
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch(error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
