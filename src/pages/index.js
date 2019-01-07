import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>La musica è un pallone</h2>
    <p>Il nuovo disco dei Klippa Kloppa</p>
    <Link to="/page-2/">Acquistalo</Link>
  </Layout>
);

export default IndexPage;
