import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Blaze from "meteor/gadicc:blaze-react-component";
import { Template } from "meteor/templating";
import { registerComponent, getComponent } from "/imports/plugins/core/layout/lib/components";

class coreLayoutMaterialTheme extends Component {
  static propTypes = {
    actionViewIsOpen: PropTypes.bool,
    data: PropTypes.object,
    structure: PropTypes.object

  }

  render() {
    const { layoutHeader, layoutFooter, template } = this.props.structure || {};
    const pageClassName = classnames({
      "page": true,
      "show-settings": this.props.actionViewIsOpen
    });

    const customFooter = React.createElement(getComponent("customFooter"), {
      // ... custom props
    });

    let element;
    if (getComponent(template)) {
      element = React.createElement(getComponent(template));
    }

    return (

    <div className={pageClassName} id="reactionAppContainer">
     { Template[layoutHeader] &&
       <Blaze template={layoutHeader} className="reaction-navigation-header" />
     }

     <Blaze template="cartDrawer" className="reaction-cart-drawer" />

     { Template[template] &&
       <main className="mainStyles">
         <Blaze template={template} />
         <div>{ customFooter }</div>
       </main>
     }

     {
       <main>

       {element}

       </main>
     }

    </div>

    );
  }
}

// Register component for it to be usable
registerComponent({
  name: "coreLayoutMaterialTheme",
  component: coreLayoutMaterialTheme
});

export default coreLayoutMaterialTheme;
