import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Typography from 'typography';

import Header from 'components/header';
import 'less/layout.less';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.33,
  headerFontFamily: [
    'Segoe UI',
    'Avenir Next',
    'Helvetica Neue',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Roboto', 'sans-serif'],
});

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {typography.injectStyles()}

        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container align-center">{children}</div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
