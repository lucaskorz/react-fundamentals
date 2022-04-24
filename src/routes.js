import React from 'react'

import { Route, BrowserRouter } from 'react-router-dom'

import Posts from './pages/Posts';
import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/post" component={Posts} />
    </BrowserRouter>
  )
}

