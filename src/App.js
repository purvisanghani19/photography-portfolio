import "./App.css";
import Home from "./ui/pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
//animation---------------------------------
import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from "react";

function App() {

  useEffect(()=>{
    Aos.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
 
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  duration: 400, // values from 0 to 3000, with step 50ms
  easing:'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

  },[])

  return (
    <>
      <Home />
    </>
  );
}

export default App;
