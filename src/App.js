import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Inventory from "./component/Inventory/Inventory";
import NotFound from "./component/NotFound/NotFound";
import OrderReview from "./component/OrderReview/OrderReview";
import PlaceOrder from "./component/PlaceOrder/PlaceOrder";
import Shop from "./component/Shop/Shop";

function App() {
  return (
    <div >
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path='/placeorder'>
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
