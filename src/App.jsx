import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Team from "./components/team";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Team />
        <Services />
        <Roadmap />
        <ContactUs />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
