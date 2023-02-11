import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-red-600 via-red-300 to-orange-500 background-animate">
      <h1 className="text-9xl font-bungee font-bold">Adversary</h1>
      <Button className="text-3xl">
        <Link href="/play">Play</Link>
      </Button>
    </div>
  );
}
