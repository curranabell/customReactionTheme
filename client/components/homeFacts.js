import React from "react";
import { registerComponent } from "/imports/plugins/core/layout/lib/components";

    const factsStyles = {
      minHeight: 160,
      width: 'auto',
      padding: 20,
      margin: 20,
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)' ,
      color: '#fefefe',
    };

    const factsRow = {
      display: 'flex',
    };

    const homeFacts = () => (
      <div className="container-fluid">
        <div className="row" style={factsRow}>

          <div className="col-md-4" style={factsStyles}>
            <h1>Organic</h1>
            <h4>All Products Are Made With The Highest Quality 100% Organic Ingredients</h4>
          </div>

          <div className="col-md-4" style={factsStyles}>
            <h1>Delivered To You</h1>
            <h4>Schedule Regular Deliveries With Fast And Secure Shipping</h4>
          </div>

          <div className="col-md-4" style={factsStyles}>
            <h1>Trusted Suppliers</h1>
            <h4>Our Suppliers Have Been Working With Us For Over 30 Years</h4>
          </div>

        </div>
      </div>
    );

// Register react component.
// Now MyComponent can be accessed anywhere on the client with the name "my-react-component"
registerComponent({
  name: "home-facts",
  component: homeFacts
});

export default homeFacts;
