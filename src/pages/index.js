import React, { useEffect } from 'react';
import Introduction from '../components/introduction/introduction';
import Layout from '../components/layout';
import Head from '../components/head';
import Services from '../components/services/services';
import Contact from '../components/contact/contact';

function initNetlifyIdentity() {
  const script = document.createElement('script');
  script.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
  script.async = true;

  document.body.appendChild(script);
}

function openNetlifyModal() {
  const { netlifyIdentity } = window;

  if (netlifyIdentity) {
    netlifyIdentity.open();
  }
}

// eslint-disable-next-line no-unused-vars
const NetlifyIdentity = () => {
  useEffect(() => {
    initNetlifyIdentity();
  });
  return <div />;
};

const Index = () => (
  <Layout>
    <>
      <NetlifyIdentity />
      <Head title="" />
      <button onClick={() => openNetlifyModal()} type="button"> Login test</button>
      <Introduction />
      <Services />
      <Contact />
    </>
  </Layout>
);

export default Index;
