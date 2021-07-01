import "./App.css";
import Header from "./MyComponents/header";
import { Todos } from "./MyComponents/todos";
import Footer from "./MyComponents/footer";
import { Todo } from "./MyComponents/todo";
import Referrals from "./MyComponents/referrals";
import { Classes } from "./MyComponents/classes";
import { Classs } from "./MyComponents/class1";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="klk">
        <Header title="MY todos list " searchbar={false} />
        <div>
          <Switch>
            <Route exact path="/">
              <Todos />
              <Todo />
              <Classes />
              <Referrals />
            </Route>
            <Route exact path="/Classs">
              <Classs />
            </Route>
          </Switch>
        </div>
        {/* <Card /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
