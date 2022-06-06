import { Navigation } from "./components/navigation";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Route, Routes } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {

  return (
      <Routes>   
            <Route path="/" element={<Navigation />} />   
            {/* <Route path={`/projects/:id`} element={<Job />}/> */}
      </Routes>
  );
};

export default App;
