import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Root from './components/Root.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Portfolio from './components/Portfolio.jsx';
import Skills from './components/Skills.jsx';
import Project from './components/Project.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import "./App.css";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />} errorElement={<PageNotFound/>} >
    <Route index element={<Home />} />
    <Route exact path="portfolio" element={<Portfolio />} />
    <Route path="portfolio/:projectId" element={<Project />} />
    <Route path="skills" element={<Skills />}/>
    <Route path="contact" element={<Contact />}/>
  </Route>
));

function App() {
  return (
     <RouterProvider router={router}/>
  );
}

export default App
