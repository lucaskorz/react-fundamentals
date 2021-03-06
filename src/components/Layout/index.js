import React, { useEffect } from 'react';
import propTypes from 'prop-types'

import { Link, BrowserRouter } from 'react-router-dom'

import Header from '../Header';
import Routes from '../../routes'
import Footer from '../Footer';

import { Nav } from './styles'

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/13123124">Post</Link>
      </Nav>
      <Routes />
      
    </BrowserRouter>
  );
}