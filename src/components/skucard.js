import React from 'react';

const cardStyles = {
  padding: '1rem',
  boxShadow: '5px 5px 25px 0 rgba(46,61,73,.2)',
  borderRadius: '6px',
  maxWidth: '300px',
  margin: '0 auto',
  backgroundColor: '#FFDD89',
  color: '#818486',
};
const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#fff',
  outline: 'none',
  padding: '12px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: '#F18F7F',
  borderRadius: '6px',
  letterSpacing: '1.5px',
  border: 'none',
};

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2);
  let numberFormat = new Intl.NumberFormat(['it-IT'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  return numberFormat.format(price);
};

class SkuCard extends React.Component {
  state = {
    stripe: window.Stripe('pk_test_qOUT7QyfVVOJlWXtnbzzZ9Tn', {
      betas: ['checkout_beta_4'],
    }),
  };
  async redirectToCheckout(event, sku, quantity = 1) {
    event.preventDefault();
    const { error } = await this.state.stripe.redirectToCheckout({
      items: [{ sku: sku, quantity: 1 }],
      successUrl: `http://localhost:8000/success/`,
      cancelUrl: `http://localhost:8000/`,
    });

    if (error) {
      console.warn('Error:', error);
    }
  }

  componentDidMount() {
    this.stripe = window.Stripe('pk_test_XtA3XDsJ0GNg8WI2Cwllaj64', {
      betas: ['checkout_beta_4'],
    });
  }

  render() {
    const sku = {
      id: 'sku_EUbAtscoyBAvmW',
      object: 'sku',
      active: true,
      attributes: {
        name: 'Vinile',
      },
      created: 1549642388,
      currency: 'eur',
      image: null,
      inventory: {
        quantity: null,
        type: 'infinite',
        value: null,
      },
      livemode: false,
      metadata: {},
      package_dimensions: null,
      price: 1500,
      product: 'prod_EUbAY6dVZS83A9',
      updated: 1549642388,
    };
    return (
      <div style={cardStyles}>
        <h4>Vinile</h4>
        <p>{formatPrice(sku.price, sku.currency)}</p>
        <button
          style={buttonStyles}
          onClick={event => this.redirectToCheckout(event, sku.id)}
        >
          Compralo
        </button>
      </div>
    );
  }
}

export default SkuCard;
