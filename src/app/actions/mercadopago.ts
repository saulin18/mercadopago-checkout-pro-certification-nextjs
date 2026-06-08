"use server";

import { MercadoPagoConfig, Preference } from "mercadopago";

if (!process.env.MERCADOPAGO_ACCESS_TOKEN) {
  throw new Error("MERCADOPAGO_ACCESS_TOKEN is not set");
}

if (!process.env.MERCADOPAGO_EMAIL) {
  throw new Error("MERCADOPAGO_EMAIL is not set");
}

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN as string,
  options: {
    integratorId: process.env.INTEGRATOR_ID,
  },
});

export const createPreference = async () => {
  const preference = new Preference(client);
  return preference.create({
    body: {
      items: [
        {
          id: "1234",
          title: "Terminal de pago móvil",
          description: "Dispositivo de tienda móvil de comercio electrónico",
          picture_url:
            "https://http2.mlstatic.com/resources/frontend/statics/growth-sellers-landings/device-mlb-point-i_medium2x.png",
          quantity: 1,
          unit_price: 100,
          currency_id: "ARS",
        },
      ],
      payment_methods: {
        installments: 6,
        excluded_payment_methods: [{ id: "visa" }],
      },
      external_reference: process.env.MERCADOPAGO_EMAIL,
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
        failure: `${process.env.NEXT_PUBLIC_APP_URL}/error`,
        pending: `${process.env.NEXT_PUBLIC_APP_URL}/pending`,
      },
      notification_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/webhook`,
      auto_return: "approved",
    },
  });
};
