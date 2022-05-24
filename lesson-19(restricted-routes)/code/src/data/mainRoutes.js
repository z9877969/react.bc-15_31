// import { Route } from "react-router-dom";
// import Layout from "../components/Layout/Layout";
// import PrivateRoute from "../components/PrivateRoute";
// import CounterPage from "../pages/CounterPage";

// const mainWrappedRoutes = [
//   {
//     path: "counter",
//     element: (
//       <PrivateRoute>
//         <CounterPage />
//       </PrivateRoute>
//     ),
//   },
// ];

// const mainRoutes = [
//   {
//     path: "/",
//     element: () => <Layout />,
//     wrappedRoutes: mainWrappedRoutes,
//   },
// ];

// export const createRoutes = (options = mainRoutes) => {
//   options.map((el) => {
//     return !el.wrappedRoutes ? (
//       <Route path={el.path} element={el.element} />
//     ) : (
//       <Route path={el.path} element={el.element}>
//         {createRoutes(el.wrappedRoutes)}
//       </Route>
//     );
//   });
// };
