import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { registerComponent } from "/imports/plugins/core/layout/lib/components";

const App = () => (
  <MuiThemeProvider />
);

// Register component for it to be usable
registerComponent({
  name: "materialLayout",
  component: "materialLayout"
});

export default App;
