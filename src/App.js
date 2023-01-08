import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StallHome from "./pages/StallHome";
import UserHome from "./pages/UserHome";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/stall-home" exact>
        <StallHome />
      </Route>
      <Route path="/user-home" exact>
        <UserHome />
      </Route>
    </Switch>
  );
}

export default App;
