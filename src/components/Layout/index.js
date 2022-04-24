import React, { useEffect } from 'react';
import propTypes from 'prop-types'

import Header from '../Header';
import Routes from '../../routes'
import Footer from '../Footer';

export default function Layout() {
  return (
    <>
      <Header />
      < Routes/>
      <Footer />
    </>
  );
}