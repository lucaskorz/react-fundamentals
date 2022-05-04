import React from 'react'
import { useTransition, animated } from 'react-spring';
import { Route, Switch, useLocation } from 'react-router-dom'

import Posts from './pages/Posts';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Post from './pages/Post';

export default function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from : { opacity: 0, transform: 'translateY(50px)' , position: 'absolute' }, // antes de entrar na tela
    enter: { opacity: 1, transform: 'translateY(0px)',   position: 'absolute' }, // quando estiver entrando em tela
    leave: { opacity: 0, transform: 'translateY(50px)',  position: 'absolute' }, // quando sair da tela
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </animated.div>
    
  ));
}

