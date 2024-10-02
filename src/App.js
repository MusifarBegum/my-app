import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appStore from "./store/appStore";
import Header from "./Components/Header";
import Body from "./Components/Body";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />, // Body will render child routes
      children: [
        {
          path: "/", // Main route
          element: <MainContainer />,
        },
        {
          path: "/watch", // Watch route
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
      <Header /> {/* Header rendered outside RouterProvider */}
      <RouterProvider router={appRouter} /> {/* RouterProvider wraps the routes */}
    </Provider>
  );
}

export default App;
