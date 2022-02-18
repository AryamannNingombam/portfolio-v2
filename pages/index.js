import HeroSection from "components/home/hero";
import Navbar from "components/layout/navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      {[...Array(10)].map((_, i) => (
        <HeroSection heading={"WORK"} key={i} />
      ))}
    </>
  );
}
