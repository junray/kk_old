import React from 'react';
import PropTypes from 'prop-types';

const url = 'https://www.klippakloppa.com/customers.json';

export default class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(`Welcome ${this.state.firstName} ${this.state.lastName}!`);
    //this.props.redirectToCheckout(event, this.props.sku);

    const data = this.state;

    console.log(data);
    this.onUpdateData(data);
  };

  onUpdateData = data => {
    fetch(url, {
      //credentials: "include", // Useful for including session ID (and, IIRC, authorization headers)
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        return this.fetchUrl(url);
      })
      .catch(error => console.error(error));
  };

  render() {
    const { sku, redirectToCheckout } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="ui centered column grid">
          <div className="row">
            <div className="column three wide">
              <label className="block">
                First name
                <input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  className="block fluid"
                />
              </label>
            </div>
            <div className="column three wide ">
              <label className="block">
                Last name
                <input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  className="block fluid"
                />
              </label>
            </div>
          </div>

          <div className="row">
            <div className="column three wide">
              <label className="block">
                E-mail
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  className="block fluid"
                />
              </label>
            </div>
            <div className="column three wide ">
              <label className="block">
                Telephone
                <input
                  type="text"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleInputChange}
                  className="block fluid"
                />
              </label>
            </div>
          </div>

          <div className="row">
            <div className="column six wide">
              <label className="block m-hor-2x">
                Address
                <textarea
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleInputChange}
                  className="block fluid"
                />
              </label>
            </div>
          </div>
        </div>
        <button
          className="small align-center p-ver2x p-hor4x m-ver4x text-black"
          // onClick={event => redirectToCheckout(event, sku)}
        >
          Compralo
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  sku: PropTypes.object.isRequired,
  redirectToCheckout: PropTypes.func.isRequired,
};
