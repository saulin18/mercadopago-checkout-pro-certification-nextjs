"use server";

import { MercadoPagoConfig, Preference } from "mercadopago";

if (!process.env.MERCADOPAGO_ACCESS_TOKEN) {
  throw new Error("MERCADOPAGO_ACCESS_TOKEN is not set");
}

type Item = {
  id: string;
  title: string;
  unit_price: number;
  quantity: number;
};

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN as string,
});

export const createPreference = async (items: Item[]) => {
  const preference = new Preference(client);
  return preference.create({
    body: {
      items: items.map((item) => ({
        id: item.id,
        title: item.title,
        unit_price: item.unit_price,
        quantity: item.quantity,
      })),
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
