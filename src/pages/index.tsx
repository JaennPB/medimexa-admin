import LoginCard from "@/components/LoginCard";
import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <NavBar />
    </main>
  );
}
