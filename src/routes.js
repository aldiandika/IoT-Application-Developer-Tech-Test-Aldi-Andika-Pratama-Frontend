import { BrowserRouter, Route, Switch } from "react-router-dom";
import SalaryConverter from "./pages/salary_converter";

const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SalaryConverter} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routing;