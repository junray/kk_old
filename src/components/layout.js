import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Header from 'components/header';
import { StaticQuery, graphql } from 'gatsby';

import 'less/layout.less';

const Layout = ({ children, headerTitle }) => (
  <StaticQuery
    query={graphql`
      query SiteHeadQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <React.Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{data.site.siteMetadata.title}</title>
            <link rel="canonical" href="http://www.klippakloppa.com" />
          </Helmet>
          <Header siteTitle={headerTitle} />
          <div className="ui container align-center">{children}</div>
        </React.Fragment>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object,
};

export default Layout;
