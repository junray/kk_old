import React, { Component, Fragment } from 'react';
//import Form from '../components/form';
//import Iframe from 'react-iframe';

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2);
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  return numberFormat.format(price);
};

class Shop extends Component {
  /* state = {
    showIframe: false,
  }; */

  componentDidMount() {
    const handler = () => {
      StripeCheckout.configure({
        key: 'pk_test_XtA3XDsJ0GNg8WI2Cwllaj64',
        image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
        locale: 'auto',
        token: function(token) {
          // You can access the token ID with `token.id`.
          // Get the token ID to your server-side code for use.
          console.log(token);
        },
      });
    };

    this.stripe = window.Stripe('pk_test_XtA3XDsJ0GNg8WI2Cwllaj64', {
      betas: ['checkout_beta_4'],
    });

    //close
    window.addEventListener('popstate', function() {
      this.handler.close();
    });
  }

  /* redirectToCheckout = async (event, sku) => {
    event.preventDefault();

  const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: sku, quantity: 1 }],
      successUrl: `http://localhost:8000/success/`,
      cancelUrl: `http://localhost:8000/`,
    });

    if (error) {
      console.warn('Error:', error);
    } 
  };*/

  openCheckout = event => {
    event.preventDefault();
    this.handler.open({
      name: 'kk',
      description: '2 widgets',
      currency: 'eur',
      amount: 2000,
    });
  };

  handleClick = (event, sku) => {
    this.redirectToCheckout(event, sku);
    this.setState({
      showIframe: true,
    });
  };

  render() {
    //const { showIframe } = this.state;
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
      <Fragment>
        <h3 className="large m-ver2x">{sku.attributes.name}</h3>
        <p>{formatPrice(sku.price, sku.currency)}</p>
        <button
          id="payButton"
          className="small align-center p-ver2x p-hor4x m-ver4x text-black"
          onClick={event => this.openCheckout(event)}
        >
          Compralo
        </button>
        {/* <Form sku={sku} redirectToCheckout={this.handleClick} /> */}
        {/* showIframe && (
          <Iframe
            url="http://www.youtube.com/embed/xDMP3i36naA"
            width="450px"
            height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen
          />
        ) */}
      </Fragment>
    );
  }
}

export default Shop;
