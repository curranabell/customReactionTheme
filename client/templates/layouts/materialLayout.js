import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import { registerComponent } from "/imports/plugins/core/layout/lib/components";

const App = () => (
  <MuiThemeProvider />
);

// Register component for it to be usable
registerComponent({
  name: "materialLayout",
  component: "materialLayout"
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
