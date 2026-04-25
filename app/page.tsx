import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RoleTabs from "./components/RoleTabs";
import Method from "./components/Method";
import Diagnostic from "./components/Diagnostic";
import Aspiration from "./components/Aspiration";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RoleTabs />
      <Method />
      <Diagnostic />
      <Aspiration />
      <ContactForm />
      <Footer />
    </>
  );
}
