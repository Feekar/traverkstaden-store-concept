import React from 'react';
import Introduction from '../components/introduction/introduction';
import Layout from '../components/layout';
import Head from '../components/head';
import Services from '../components/services/services';

const Index = () => (
  <Layout>
    <>
      <Head title="" />
      <Introduction />
      <Services />
    </>
  </Layout>
);

export default Index;
