import "./App.css";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import WebsiteLayout from "./layout/websiteLayout";
import routes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* First, render all public routes */}
          <Route
            element={
              <WebsiteLayout>
                <Outlet />
              </WebsiteLayout>
            }
          >
            {routes.map(
              (route) =>
                route.type === "public" && (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                )
            )}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
