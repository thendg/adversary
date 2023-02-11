import Link from "next/link";
import Button from "@/components/Button";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-red-600 via-red-300 to-orange-500 background-animate">
      <Title>Adversary</Title>
      <Button className="text-3xl">
        <Link href="/play">Play</Link>
      </Button>
    </div>
  );
}
