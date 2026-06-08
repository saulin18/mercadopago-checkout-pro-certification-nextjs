import Link from "next/link";
import React from "react";

export default async function StatusPage({
  params,
}: {
  params: Promise<{ status: string }>;
}) {
  const { status } = await params;

  switch (status) {
    case "success":
      return <SuccessStatus />;
    case "error":
      return <ErrorStatus />;
    case "pending":
      return <PendingStatus />;
    default:
      return (
        <div>
          Invalid status: {status}
          <Link href="/" className="text-blue-500 hover:text-blue-700">
            Go to home
          </Link>
        </div>
      );
  }
}

export function SuccessStatus() {
  return (
    <>
      <main
        className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between 
      py-32 px-16 bg-white dark:bg-black sm:items-start"
      >
        <h1 className="text-4xl font-bold">Success</h1>
        <p className="text-lg text-gray-500">
          Your payment has been successful.
        </p>
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Go to home
        </Link>
      </main>
    </>
  );
}

export function ErrorStatus() {
  return (
    <>
      <main
        className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between 
      py-32 px-16 bg-white dark:bg-black sm:items-start"
      >
        <h1 className="text-4xl font-bold">Error</h1>
        <p className="text-lg text-gray-500">Your payment has failed.</p>
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Go to home
        </Link>
      </main>
    </>
  );
}

export function PendingStatus() {
  return (
    <>
      <main
        className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between 
      py-32 px-16 bg-white dark:bg-black sm:items-start"
      >
        <h1 className="text-4xl font-bold">Pending</h1>
        <p className="text-lg text-gray-500">Your payment is pending.</p>
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Go to home
        </Link>
      </main>
    </>
  );
}
