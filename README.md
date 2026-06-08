# Checkout Pro certification

Simple project to obtain the Mercado Pago Checkout Pro certification.

For more information, visit the [Checkout Pro certification page](https://www.mercadopago.com.ar/partners/developers/certifications/checkout-pro).

This is a **Next.js 16** project. Dependencies are managed with [pnpm](https://pnpm.io/).

## Instructions to run the project

```bash
cd mpcert
pnpm i
pnpm run dev
```

Use `pnpm run build` to build the app for production.

## Environment variables

Create a `.env` file with:

```env
MERCADOPAGO_ACCESS_TOKEN=
NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY=
NEXT_PUBLIC_APP_URL=
```

## Documentation

Check the Mercado Pago documentation to get started with Checkout Pro if you are not familiar with the workflow yet: [Checkout Pro overview](https://www.mercadopago.com.ar/developers/es/docs/checkout-pro/overview).

I highly recommend [this repo](https://github.com/goncy/next-mercadopago) by [Goncy](https://github.com/goncy).
