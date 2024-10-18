import { Suspense } from "react";

export default function Home() {
  async function GetApi() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); //simulate fetch
      //throw new Error("Error api"); //simulate error
      return <p>Data from api</p>;
    } catch (error) {
      return (
        <p className="text-red-500">
          Error to get data, please try again later
        </p>
      );
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<p>Loading...</p>}>
        <GetApi />
      </Suspense>
    </main>
  );
}
