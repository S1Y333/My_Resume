
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Header from './Components/Header';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from './Components/Footer';
import ProjectOne from "./pages/Projects/ProjectOne";
import ProjectTwo from "./pages/Projects/ProjectTwo";
import ProjectThree from "./pages/Projects/ProjectThree";

function App() {
  return (
    <BrowserRouter basename="/My_Webisite">
       <Header />
       
       <Switch>
         <Route exact path="/"  component={Home} />
         <Route exact path="/about"  component={About} />
         <Route exact path="/projects"  component={Projects} />
         <Route exact path="/projects/project-1"  component={ProjectOne} />
         <Route exact path="/projects/project-2"  component={ProjectTwo} />
         <Route exact path="/projects/project-3"  component={ProjectThree} />
         <Route exact path="/contact"  component={Contact} />
       </Switch>
       
    </BrowserRouter>
  );
}

export default App;
