import Topbar from "./topbar/Topbar";
import Intro from "./intro/Intro";
import Works from "./Works/Works";
import Contact from "./contact/Contact";
import Portfolio from "./portfolio/Portfolio";
import Testimonial from "./testimonials/Testimonial";
import "./app.scss";
import { useState } from "react";
import Menu from "./menu/Menu";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
