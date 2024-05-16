
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
import PartyEasy from "./pages/Projects/PartyEasy";

function App() {
  return (
    <BrowserRouter basename="/My_Website">
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/ecommerce" component={ProjectTwo} />
        <Route exact path="/projects/sharePlace" component={ProjectOne} />
        <Route exact path="/projects/partyEasy" component={PartyEasy} />
        <Route exact path="/projects/project-3" component={ProjectThree} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
