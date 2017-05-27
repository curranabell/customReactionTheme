import React, { Component } from "react";
import Paper from "material-ui/Paper";
import {List, ListItem} from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Divider from "material-ui/Divider";
import Checkbox from "material-ui/Checkbox";
import Toggle from "material-ui/Toggle";
import Slider from "material-ui/Slider";
import Sort from "material-ui/svg-icons/content/sort";
import AttachMoney from "material-ui/svg-icons/editor/attach-money";
import { registerComponent } from "/imports/plugins/core/layout/lib/components";

class productFilter extends Component {

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

    return (

            <Paper zDepth={2}>
              <List>
                 <h2>Filter Products</h2>

                 <ListItem
                    primaryText="Category"
                    leftIcon={<Sort />}
                    initiallyOpen={false}
                    primaryTogglesNestedList={true}
                    nestedItems={[

                      <ListItem
                        key={1}
                        leftCheckbox={<Checkbox />}
                        primaryText="Category 1"
                      />,

                      <ListItem
                        key={2}
                        leftCheckbox={<Checkbox />}
                        primaryText="Category 2"
                      />,

                      <ListItem
                        key={3}
                        leftCheckbox={<Checkbox />}
                        primaryText="Category 3"
                      />,

                    ]}
                  />

                  <Divider />

                  <ListItem
                     primaryText="Brand"
                     leftIcon={<Sort />}
                     initiallyOpen={false}
                     primaryTogglesNestedList={true}
                     nestedItems={[

                       <ListItem
                         key={1}
                         leftCheckbox={<Checkbox />}
                         primaryText="Brand 1"
                       />,

                       <ListItem
                         key={2}
                         leftCheckbox={<Checkbox />}
                         primaryText="Brand 2"
                       />,

                       <ListItem
                         key={3}
                         leftCheckbox={<Checkbox />}
                         primaryText="Brand 3"
                       />,

                     ]}
                   />

                   <Divider />

                   <Subheader>Price Range</Subheader>
                    <Slider defaultValue={0.5} />
               </List>

            </Paper>

    );
  }
}

registerComponent({
  name: "product-filter",
  component: productFilter
});

export default productFilter;
