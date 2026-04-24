import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RoleTabs from "./components/RoleTabs";
import Method from "./components/Method";
import Diagnostic from "./components/Diagnostic";
import Aspiration from "./components/Aspiration";
import Footer from "./components/Footer";

// TODO: Finish with responsive sections, Footer is not working

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RoleTabs />
      <Method />
      <Diagnostic />
      <Aspiration />
      <Footer />
    </>
  );
}
