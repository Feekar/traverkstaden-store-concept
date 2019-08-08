import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import 'normalize.css';
import './layout.module.scss';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
