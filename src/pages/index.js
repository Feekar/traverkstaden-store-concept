import React from 'react';
import Introduction from '../components/introduction/introduction';
import Layout from '../components/layout';
import Head from '../components/head';
import Services from '../components/services/services';
import Contact from '../components/contact/contact';

const Index = () => (
  <Layout>
    <>
      <Head title="" />
      <Introduction />
      <Services />
      <Contact />
    </>
  </Layout>
);

export default Index;
