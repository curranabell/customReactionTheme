import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Paper from "material-ui/Paper";
import Blaze from "meteor/gadicc:blaze-react-component";
import { Template } from "meteor/templating";
import { registerComponent, getComponent } from "/imports/plugins/core/layout/lib/components";

class customProductsLayout extends Component {

  render () {

    state = {
      open: false,
    };

    handleNestedListToggle = (item) => {
      this.setState({
        open: item.state.open,
      });
    };

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };

    const gridStyles ={
      flex: 1,
      height: 400,
      padding: 20,
      margin: 20,
      textAlign: 'center',
      backgroundColor: 'white' ,
    };

    const productFilter = React.createElement(getComponent("product-filter"), {
         // ... custom props
    });

    return (
      <Grid fluid>
        <Row center="md">
          <Col md={3}>
            <div> { productFilter } </div>
          </Col>
          <Col md={9}>
            <Paper style={gridStyles} zDepth={2}>
              { Template[productsLanding] &&
              <Blaze template={productsLanding} className="products-landing" />
              }
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

registerComponent({
  name: "custom-products-layout",
  component: customProductsLayout
});

export default customProductsLayout;
