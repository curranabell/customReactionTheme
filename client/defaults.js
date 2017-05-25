import { Session } from "meteor/session";
import customHomePage from "./templates/layouts/customHomePage";

Session.set("DEFAULT_LAYOUT", "coreLayoutMaterialTheme");
Session.set("DEFAULT_WORKFLOW", "coreWorkflow");

Session.set("INDEX_OPTIONS", {
  workflow: "coreWorkflow",
  layout: "coreLayoutMaterialTheme",
  structure: {
    template: "customHomePage",
    layoutHeader: "layoutHeader",
    layoutFooter: "layoutFooter",
    notFound: "notFound",
    dashboardControls: "dashboardControls",
    adminControlsFooter: "adminControlsFooter"
  }
});
