import LoginCard from "@/components/LoginCard";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`bg-base-200 h-screen flex justify-center items-center ${inter.className}`}
    >


    Seeder ejecutados correctamente
    </main>
  );
}
