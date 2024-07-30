import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Plans from "../components/pages/Plans";
import Trainers from "../components/pages/Trainers";
import Classes from "../components/pages/Classes";
import Contact from "../components/pages/Contact";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";

const IndexPage = () => (
  <>
    <Navbar />
    <section id="home">
      <Home />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="plans">
      <Plans />
    </section>
    <section id="trainers">
      <Trainers />
    </section>
    <section id="classes">
      <Classes />
    </section>
    <section id="contact">
      <Contact />
    </section>
    <Footer />
  </>
);

export default IndexPage;
