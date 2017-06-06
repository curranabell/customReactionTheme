import { Reaction } from "/server/api";

// Register package as ReactionCommerce package
Reaction.registerPackage({
  label: "Material Theme",
  name: "material-theme",
  icon: "fa fa-vine",
  meta: {
    version: "1.0.0"
  },
  autoEnable: true,
  layout: [{
    layout: "coreLayoutMaterialTheme",
    workflow: "coreWorkflow",
    collection: "Products",
    theme: "default",
    enabled: true,
    priority: 1,
    structure: {
      template: "customProductsLayout",
      layoutHeader: "layoutHeader",
      layoutFooter: "customFooter",
      notFound: "productNotFound",
      dashboardHeader: "",
      dashboardControls: "dashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    } }
  ]
});
