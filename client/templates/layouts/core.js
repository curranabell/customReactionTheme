import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Blaze from "meteor/gadicc:blaze-react-component";
import { Template } from "meteor/templating";
import { registerComponent, getComponent } from "/imports/plugins/core/layout/lib/components";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


class coreLayoutMaterialTheme extends Component {
  static propTypes = {
    actionViewIsOpen: PropTypes.bool,
    data: PropTypes.object,
    structure: PropTypes.object

  }

  render() {
    const { layoutHeader, template } = this.props.structure || {};
    const pageClassName = classnames({
      "page": true,
      "show-settings": this.props.actionViewIsOpen
    });

    let element;
    if (getComponent(template)) {
      element = React.createElement(getComponent(template));
    }

    return (
    <MuiThemeProvider>
    <div className={pageClassName} id="reactionAppContainer">
     { Template[layoutHeader] &&
       <Blaze template={layoutHeader} className="reaction-navigation-header" />
     }

     <Blaze template="cartDrawer" className="reaction-cart-drawer" />

     { Template[template] &&
       <main>
         <div className="rui materialtheme">

         </div>

         <Blaze template={template} />
       </main>
     }
     {
       <main>

       {element}

       </main>
     }

    </div>
    </MuiThemeProvider>
    );
  }
}

// Register component for it to be usable
registerComponent({
  name: "coreLayoutMaterialTheme",
  component: coreLayoutMaterialTheme
});

export default coreLayoutMaterialTheme;
