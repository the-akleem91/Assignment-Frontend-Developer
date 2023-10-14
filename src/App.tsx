import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/AppLayout/AppLayout";
import SearchSection from "./components/Search/SearchSection";
import SearchList from "./components/Search/SearchList";
import SelectedCard from "./components/Search/SelectedCard";
import { useState } from "react";

function App() {
  const [recentSearch, setRecentSearch] = useState([]);
  const [latLng, setLatLng] = useState({ lat: 42.361145, lng: -71.057083 });
  const [polygonCoordinates, setPolygonCoordinates] = useState(null);

  const router = createBrowserRouter([
    {
      element: <Home latLng={latLng} polygonCoordinates={polygonCoordinates} />,
      children: [
        {
          path: "/",
          element: <SearchSection recentSearch={recentSearch} />,
        },
        {
          path: "/search/:name",
          element: <SearchList />,
        },
        {
          path: "/search/:name/:id",
          element: (
            <SelectedCard
              setRecentSearch={setRecentSearch}
              setLatLng={setLatLng}
              setPolygonCoordinates={setPolygonCoordinates}
            />
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
