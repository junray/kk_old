import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/header';

import 'less/layout.less';

const Layout = ({ children, headerTitle }) => {
  return (
    <React.Fragment>
      <Header siteTitle={headerTitle} />
      <div className="ui container align-center">{children}</div>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object,
};

export default Layout;
