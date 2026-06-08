"use client";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import React, { useMemo } from "react";

initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY as string);

function CheckoutButton({ preferenceId }: { preferenceId: string }) {
  const initialization = useMemo(() => {
    return {
      preferenceId,
    };
  }, [preferenceId]);

  return <Wallet initialization={initialization} />;
}

export default CheckoutButton;
