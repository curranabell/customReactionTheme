import React, {Component} from "react";
import {Card, CardHeader, CardBody, CardGroup} from "/imports/plugins/core/ui/client/components";
import {List, ListItem} from "/imports/plugins/core/ui/client/components";
import {Switch} from "/imports/plugins/core/ui/client/components";
import {Slider} from "/imports/plugins/core/ui/client/components";
import {registerComponent} from "/imports/plugins/core/layout/lib/components";
import {ProductSearch, Tags, OrderSearch, AccountSearch, Orders} from "/lib/collections";
import {IconButton} from "/imports/plugins/core/ui/client/components";
import TrackerReact from 'meteor/ultimatejs:tracker-react';


class productFilter extends TrackerReact(React.Component) {


   handlePriceChange = (values, handle, unencoded, tap, positions) => {
      console.log("slider changed", values);
      this.state.priceFilter=values;
      this.productResults();
       console.log("Product Results:"+ JSON.stringify(this.state.productResults));
   };

   handleSlide = (values, handle, unencoded, tap, positions) => {
     console.log("slider is being changed", values);
   };


  constructor(props) {
    super(props);
    const searchCollection = Session.get("searchCollection") || "products";
    const searchQuery = Session.get("searchQuery") || "basic";
    const facets = Session.get("facets") || [];
    console.log("SearchQuery:"+searchQuery + " SearchCollection"+ searchCollection);
    const sub = Meteor.subscribe("SearchResults", searchCollection, searchQuery, facets);
    this.props.sortBy = Session.get("sortBy");
    this.props.productChoice = Session.get("productChoice");
    this.props.priceFilter = Session.get("priceFilter");


    this.state = {
      checked: false,
      subscription: sub,
      searchCollection: searchCollection,
      searchQuery: searchQuery,
      facets: facets,
      productResults: []
    };
  }

  componentWillUnmount() {
    this.state.subscription.stop();
  }

  state = {
    on: false
  }

  handleSwitchChange = (event, isChecked) => {
    this.setState({
      on: isChecked
    });
  }


  productResults() {
    this.state.productResults = ProductSearch.find().fetch();
  }

  render() {
    this.state.productResults = ProductSearch.find().fetch();

    const sliderStyles = {
      padding: 24,
    };

  return (


      <CardGroup>
        <Card showSwitch={true} saveOpenStateToPreferences={false}>
          <CardHeader title="Category" actAsExpander={true}/>
          <CardBody expandable={true}>
            <List>
              <ListItem actionType="switch" label="Category 1" onSwitchChange={this.handleSwitchChange}
                        switchOn={this.state.on}/>
              <ListItem actionType="switch" label="Category 2" onSwitchChange={this.handleSwitchChange}
                        switchOn={this.state.on}/>
              <ListItem actionType="switch" label="Category 3" onSwitchChange={this.handleSwitchChange}
                        switchOn={this.state.on}/>
              <ListItem actionType="switch" label="Category 4" onSwitchChange={this.handleSwitchChange}
                        switchOn={this.state.on}/>
            </List>
          </CardBody>
        </Card>

        <Card showSwitch={true} saveOpenStateToPreferences={true}>
          <CardHeader title="Company" actAsExpander={true}/>
          <CardBody expandable={true}>
            <List>
              <ListItem actionType="switch" label="Company 1" onSwitchChange={this.handleSwitchChange}
                        switchOn={this.state.on}/>
              <ListItem actionType="switch" label="Company 2" onSwitchChange={this.handleSwitchChange}
                        switchOn={this.state.on}/>
              <ListItem actionType="switch" label="Company 3" onSwitchChange={this.handleSwitchChange}
                        switchOn={this.state.on}/>
              <ListItem actionType="switch" label="Company 4" onSwitchChange={this.handleSwitchChange}
                        switchOn={this.state.on}/>
            </List>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Price Range"/>
          <CardBody expandable={false}>
            <div style={sliderStyles}>
              <Slider
                connect={true}
                margin={20}
                onChange={this.handlePriceChange}
                onSlide={ this.handleSlide}
                orientation="horizontal"
                range={{
                  max: 500,
                  min: 0
                }}
                start={[
                  0,
                  500
                ]}
                step={20}
                tooltips
              />
            </div>
          </CardBody>
        </Card>
      </CardGroup>

    );
  }
}

registerComponent({
  name: "productFilter",
  component: productFilter
});

export default productFilter;
