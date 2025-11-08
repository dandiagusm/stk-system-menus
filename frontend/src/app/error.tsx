"use client";

export default function GlobalError({ error, reset }: any) {
  return (
    <html>
      <body className="h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Something went wrong 😢
        </h1>
        <pre className="text-gray-600">{error.message}</pre>
        <button
          onClick={() => reset()}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
