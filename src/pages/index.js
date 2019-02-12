import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Shop from '../components/shop';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2 className="m-ver3x">La musica è un pallone</h2>
    <p>Il nuovo disco dei Klippa Kloppa</p>
    <p>Coming soon</p>
    <Shop />
  </Layout>
);

export default IndexPage;
