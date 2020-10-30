import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTop from "./components/common/ScrollToTop";
import CommonPage from "./components/pages/CommonPage";

function App() {
  return (
    <div className="App">
       <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <CommonPage />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
