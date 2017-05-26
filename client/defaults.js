import React from "react";
import { Session } from "meteor/session";
import customHomePage from "./templates/layouts/customHomePage";
import { getComponent } from "/imports/plugins/core/layout/lib/components";


{React.createElement(getComponent("customHomePage"))}

Session.set("DEFAULT_LAYOUT", "coreLayoutMaterialTheme");
Session.set("DEFAULT_WORKFLOW", "coreWorkflow");

Session.set("INDEX_OPTIONS", {
    template: "customHomePage",
    layoutHeader: "layoutHeader",
    layoutFooter: "layoutFooter",
    notFound: "notFound",
    dashboardControls: "dashboardControls",
    adminControlsFooter: "adminControlsFooter"
});
