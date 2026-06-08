import CheckoutButton from "@/components/CheckoutButton";
import { createPreference } from "./actions/mercadopago";

export default async function Home() {
  const preference = await createPreference([
    { id: "1", title: "Item de prueba", unit_price: 100, quantity: 1 },
  ]);

  if (!preference.id) {
    return <div>Error al crear la preferencia</div>;
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Paga con Mercado Pago
          </h1>
          <CheckoutButton preferenceId={preference.id} />
        </div>
      </main>
    </div>
  );
}
