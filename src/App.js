import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Error404 from "./pages/Error404/Error404";
import { useEffect, useState } from "react";

import styles from "./sass/App.module.scss";

function App() {
  const location = useLocation();
  const [navVisibility, setNavVisibility] = useState(false);

  useEffect(() => {
    if (navVisibility) setNavVisibility(false);

    //eslint-disable-next-line
  }, [location]);

  return (
    <div className={styles.App}>
      <Navbar
        navVisibility={navVisibility}
        setNavVisibility={setNavVisibility}
      />
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
