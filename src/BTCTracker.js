import React, { Component } from 'react';
import $ from 'jquery';
import './BTCTracker.css';

export default class BTCTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      USDrate: 0.0,
      GBPrate: 0.0,
      EURrate: 0.0,
      lastFetch: '',
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    var context = this;

    window.setTimeout(function () {
      $.ajax({
        url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
        dataType: 'json',
        method: 'GET',
        success: function (response) {
          context.setState({
            USDrate: response.bpi.USD.rate,
            GBPrate: response.bpi.GBP.rate,
            EURrate: response.bpi.EUR.rate,
            lastFetch: response.time.updated,
          });
        },
      });
    }, 3000);
  }

  render() {
    return (
      <div className="BTC-Card">
        <h1 className="BTC-Header">BTC USD Rate: {this.state.USDrate}</h1>
        <h1 className="BTC-Header">BTC GBP Rate: {this.state.GBPrate}</h1>
        <h1 className="BTC-Header">BTC EUR Rate: {this.state.EURrate}</h1>
        <h3 className="BTC-price">As of: {this.state.lastFetch}</h3>
      </div>
    );
  }
}
