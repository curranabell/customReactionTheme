import React from "react";
import { registerComponent } from "/imports/plugins/core/layout/lib/components";

    const categoriesStyles = {
      height: 150,
      padding: 20,
      margin: 20,
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)' ,
      color: '#fefefe',
    };

    const containerStyles = {
      paddingTop: 50,
      paddingBottom: 50,
    };

    const homeCategories = () => (
      <div className="container-fluid" style={containerStyles}>

        <div className="row">

          <div className="col-md-6">
            <div style={categoriesStyles}>
              <h1>CATEGORY 1</h1>
            </div>
          </div>

          <div className="col-md-6">
            <div style={categoriesStyles}>
              <h1>CATEGORY 2</h1>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-md-6">
            <div style={categoriesStyles}>
              <h1>CATEGORY 3</h1>
            </div>
          </div>

          <div className="col-md-6">
            <div style={categoriesStyles}>
              <h1>CATEGORY 4</h1>
            </div>
          </div>

        </div>

      </div>
    );

// Register react component.
// Now MyComponent can be accessed anywhere on the client with the name "my-react-component"
registerComponent({
  name: "home-categories",
  component: homeCategories
});

export default homeCategories;
