import Nav from "./components/Nav";
import Hero from "./components/Hero";
import RoleTabs from "./components/RoleTabs";
import Method from "./components/Method";
import Diagnostic from "./components/Diagnostic";
import Aspiration from "./components/Aspiration";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <RoleTabs />
      <Method />
      <Diagnostic />
      <Aspiration />
      <Footer />
    </>
  );
}
