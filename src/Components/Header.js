import { Sidetittel } from 'nav-frontend-typografi';
import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ loading }) {
  return (
    <div className="header">
      <img src="https://www.nav.no/_public/beta.nav.no/images/logo.png?_ts=1512923c9b0" alt="NAV-logo-rød-trans-bg-200.png" />
      <Sidetittel>
        Dagpengeestimator
      </Sidetittel>
      <br />
      <br />
    </div>
  );
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
};
