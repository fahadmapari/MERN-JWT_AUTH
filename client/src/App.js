import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// routes
import PrivateRoute from "./components/routing/PrivateRoute";

// screens
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/forgotpassword" component={ForgotPasswordScreen} />
          <Route
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
