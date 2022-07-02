import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import ContextBtnState from "./Container/ContextApi/Contextapi"


const index = () => {
  return (
    <div className="body">
      <ContextBtnState>
        <Home />
        <About />
        <Resume />
        <Work />
        <Contact />
      </ContextBtnState>
    </div>
  );
}

export default index;