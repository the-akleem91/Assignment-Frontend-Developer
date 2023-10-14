import { Link, useHref, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { handleClipboardCopy } from "../../utils/clipboardutils";

interface ResponseData {
  data: any[];
}

interface RecentSearchItem {
  link: string;
  name: string;
}

interface SelectedCardProps {
  setRecentSearch: React.Dispatch<React.SetStateAction<RecentSearchItem[]>>;
  setLatLng: React.Dispatch<React.SetStateAction<{ lat: number; lng: number }>>;
  setPolygonCoordinates: React.Dispatch<React.SetStateAction<any>>;
}

const API_URL =
  "http://nominatim.openstreetmap.org/search?format=json&extratags=1&boundary=administrative&polygon_geojson=1&q=";

const populationYear = 2021;
let currentURL: string | undefined;

export default function SelectedCard({
  setRecentSearch,
  setLatLng,
  setPolygonCoordinates,
}: SelectedCardProps) {
  // Defining States
  const href = useHref();
  const [data, setData] = useState<any | null>(null);
  const [population, setPopulation] = useState<number | null>(null);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        currentURL = window.location.href;
        const response = await axios.get<ResponseData>(
          `${API_URL}${params.name}`
        );
        const resData = response.data;

        // settings the states
        setData(resData[params.id]);
        setPopulation(resData[params.id].extratags.population);
        setPolygonCoordinates(resData[params.id]);
        const coord = {
          lat: resData[params.id].lat,
          lng: resData[params.id].lon,
        };
        setLatLng(coord);

        // Get the Recent Search array
        setRecentSearch((val) => {
          const displayName = resData[params.id].display_name;
          const linkExistsIndex = val.findIndex(
            (item) => item.link === currentURL
          );

          if (linkExistsIndex === -1) {
            return [...val, { link: currentURL, name: displayName }];
          } else {
            if (val[linkExistsIndex].name !== displayName) {
              val[linkExistsIndex].name = displayName;
            }
            return [...val];
          }
        });
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, [
    setLatLng,
    setPolygonCoordinates,
    setRecentSearch,
    params.id,
    params.name,
  ]);

  // For copy to Clip Board
  async function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    if (currentURL) {
      await handleClipboardCopy(currentURL);
    }
  }

  return (
    <div>
      <p className="result-p">Result</p>

      {!data ? (
        <Loader />
      ) : (
        <div className="search-container">
          <div className="search-card">
            <p className="name">{data.display_name}</p>
            <div className="population">
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#0d47a1",
                  fontWeight: "500",
                  marginTop: "0.6rem",
                  opacity: "80%",
                }}
              >
                Population
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  opacity: "60%",
                }}
              >
                {population
                  ? `${(population / 1000000).toFixed(2)}M `
                  : "No data available"}
                {population ? (
                  <span>
                    (year : {!populationYear ? "No data" : populationYear})
                  </span>
                ) : null}
              </p>
            </div>
            <button className="copy-btn" onClick={handleClick}>
              Share
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
