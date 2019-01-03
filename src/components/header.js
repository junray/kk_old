import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import 'less/header.less';

const Header = ({ siteTitle }) => (
  <header className="header align-center m-bottom3x">
    <div className="container">
      <h1 className="nomargin">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
