import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2 className="m-ver3x">Liberty</h2>
    <p>Il nuovo disco dei Klippa Kloppa</p>
    <p>20 settembre 2019</p>
  </Layout>
);

export default IndexPage;
