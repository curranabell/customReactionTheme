import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardGroup } from "/imports/plugins/core/ui/client/components";
import { List, ListItem } from "/imports/plugins/core/ui/client/components";
import { Switch } from "/imports/plugins/core/ui/client/components";
import { Slider } from "/imports/plugins/core/ui/client/components";
import { registerComponent } from "/imports/plugins/core/layout/lib/components";

class productFilter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };
  }

  state ={
    on: false
  }

  handleSwitchChange = (event, isChecked) => {
    this.setState({
      on: isChecked
    });
  }

  render () {

    const sliderStyles = {
      padding: 24,
    };

    return (
    <CardGroup>
      <Card showSwitch={true} saveOpenStateToPreferences={false}>
        <CardHeader title="Category" actAsExpander={true} />
        <CardBody expandable={true}>
          <List>
            <ListItem actionType="switch" label="Category 1" onSwitchChange={this.handleSwitchChange} switchOn={this.state.on}/>
            <ListItem actionType="switch" label="Category 2" onSwitchChange={this.handleSwitchChange} switchOn={this.state.on} />
            <ListItem actionType="switch" label="Category 3" onSwitchChange={this.handleSwitchChange} switchOn={this.state.on} />
            <ListItem actionType="switch" label="Category 4" onSwitchChange={this.handleSwitchChange} switchOn={this.state.on} />
          </List>
        </CardBody>
      </Card>

      <Card showSwitch={true} saveOpenStateToPreferences={true}>
        <CardHeader title="Company" actAsExpander={true} />
        <CardBody expandable={true}>
          <List>
            <ListItem actionType="switch" label="Company 1" onSwitchChange={this.handleSwitchChange} switchOn={this.state.on} />
            <ListItem actionType="switch" label="Company 2" onSwitchChange={this.handleSwitchChange} switchOn={this.state.on} />
            <ListItem actionType="switch" label="Company 3" onSwitchChange={this.handleSwitchChange} switchOn={this.state.on} />
            <ListItem actionType="switch" label="Company 4" onSwitchChange={this.handleSwitchChange} switchOn={this.state.on} />
          </List>
        </CardBody>
      </Card>

      <Card>
        <CardHeader title="Price Range" />
        <CardBody expandable={false}>
          <div style={sliderStyles}>
            <Slider
              connect={true}
              margin={20}
              onChange={function e(){}}
              onSlide={function e(){}}
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
