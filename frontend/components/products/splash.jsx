import React from "react";
import { Link } from "react-router-dom";
import ProductSplashItem from "./product_splash_item";
import LoadingIcon from "../loading";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    // if the last item in your array doesn't exist, then return Loading (this.props.products[-1])
    return (
      <div className="grid-container">
        <div className="banner-container">
          <img id="barc" src={window.barcelonaURL} alt="Banner" />
          <div id="barc-text">Buy dad something nice this year.</div>
          <div id="shop-fathers">Shop Father's Day</div>
        </div>
        <div className="grid-left-whitespace"></div>
        <div className="grid-splash-content">
          <section className="first-splash-row">
            <h1>Our top picks for travel</h1>
            <ul className="first-splash-row-content">
              {this.props.products.map((product) => {
                return <ProductSplashItem key={product.id} product={product} />;
              })}
            </ul>
          </section>
        </div>
        <div className="grid-right-whitespace"></div>
      </div>
    );
  }
}

export default Splash;
