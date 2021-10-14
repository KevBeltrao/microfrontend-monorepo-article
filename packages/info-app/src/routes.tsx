import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Home from './pages/Home';

import Nav from './components/Nav';

const Routes: FC = () => (
  <BrowserRouter basename="/info">
    <>
      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  </BrowserRouter>
);

export default Routes;
