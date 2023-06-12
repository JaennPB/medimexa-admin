import LoginCard from "./LoginCard";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import checkUser from '@/components/login/checkUser';

export default function Home() {


  checkUser(false);

  return (
    <main
      className={`bg-base-200 h-screen flex justify-center items-center ${inter.className}`}
    >
      
      <LoginCard />
    </main>
  );
}
