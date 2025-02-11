import Featured from "./components/Featured";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="max-w-[90%] min-h-screen  text-[#f5f5e6] mx-auto">
      <Header />
      <Featured />
    </main>
  );
}
