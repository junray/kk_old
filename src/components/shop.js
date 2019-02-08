import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#818486',
  outline: 'none',
  padding: '12px 60px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: '#FFDD89',
  borderRadius: '6px',
  letterSpacing: '1.5px',
};

class Shop extends Component {
  componentDidMount() {
    this.stripe = window.Stripe('pk_test_XtA3XDsJ0GNg8WI2Cwllaj64', {
      betas: ['checkout_beta_4'],
    });
  }

  async redirectToCheckout(event) {
    event.preventDefault();
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: 'sku_EUbAtscoyBAvmW', quantity: 1 }],
      successUrl: `http://localhost:8000/success/`,
      cancelUrl: `http://localhost:8000/`,
    });

    if (error) {
      console.warn('Error:', error);
    }
  }

  render() {
    return (
      <button
        style={buttonStyles}
        onClick={event => this.redirectToCheckout(event)}
      >
        Compralo
      </button>
    );
  }
}

export default Shop;
