import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { routesOptions } from "./data/routesOptions";

const getMapRoutes = (options) => {
  return options.map(({ name, path, element: E, inserting }) =>
    !inserting ? (
      <Route key={name} path={path} index={!path} element={<E />} />
    ) : (
      <Route key={name} path={path} index={!path} element={<E />}>
        {getMapRoutes(inserting)}
      </Route>
    )
  );
};

const App = () => {
  const mapRoutes = getMapRoutes(routesOptions);

  return (
    <div className="App">
      <Routes>{mapRoutes}</Routes>
    </div>
  );
};

export default App;
