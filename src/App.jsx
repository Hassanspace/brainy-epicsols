import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./routes";

function AppRoutes() {
  // useRoutes will render based on the routes array
  return useRoutes(routes);
}

function App() {
  return (
   <div className="m-0 p-0">
     <Router>
      <AppRoutes />
    </Router>
   </div>
  );
}

export default App;
