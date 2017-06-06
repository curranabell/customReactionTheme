import React from "react";
import { registerComponent } from "/imports/plugins/core/layout/lib/components";
import Paper from "material-ui/Paper";
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import RaisedButton from "material-ui/RaisedButton";
import { Grid, Row, Col } from "react-flexbox-grid";


    const welcomeBanner = {
      display: 'flex',
    };

    const categoryBanner = {
      display: 'flex',
      flexWrap: 'wrap',
    };

    const bannerStyles = {
      flex: 1,
      display: 'flex',
      maxHeight: 400,

    };

    const categoryStyles = {
      flex: 1,
      overflow: 'hidden',
      maxHeight: 195,
    };

    const cardTitleStyles = {
        bottom: 100,
        position: 'relative',
    };

    const homeBanner = () => (
      <Grid fluid>
        <Row center="md">
          <Col md={8}>
            <Card style={welcomeBanner} zDepth={2}>
              <CardMedia overlay={<CardTitle style={ cardTitleStyles } title="Welcome To The Natural Medicine Pharmacy" />}>
                <img style={bannerStyles} src="/images/waterfall.jpeg" />
              </CardMedia>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={categoryBanner} zDepth={2}>
              <CardMedia overlay={<CardTitle title="Category 1" />}>
                <img style={categoryStyles} src="/images/herbs.jpeg" />
              </CardMedia>
            </Card>
            <Card style={categoryBanner} zDepth={2}>
              <CardMedia overlay={<CardTitle title="Category 2" /> }>
                <img style={categoryStyles} src="/images/homeopathy.jpeg" />
              </CardMedia>
            </Card>
          </Col>
        </Row>
      </Grid>
    );

// Register react component.
// Now MyComponent can be accessed anywhere on the client with the name "my-react-component"
registerComponent({
  name: "home-banner",
  component: homeBanner
});

export default homeBanner;
