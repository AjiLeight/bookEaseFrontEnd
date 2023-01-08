import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/stall-home" exact>
        <Login />
      </Route>
      <Route path="/user-home" exact>
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
