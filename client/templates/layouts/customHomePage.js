import React from "react";
import { Template } from "meteor/templating";
import "./customHomePage.html";
import "../../pages/homePage";

Template.customHomePage.helpers({
  homePage() {
    return homePage;
  }
});
