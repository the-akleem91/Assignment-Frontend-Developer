import { Link } from "react-router-dom";
import "./RecentSearches.css";

interface RecentSearchData {
  link: string;
  name: string;
}

interface RecentSearchProps {
  recentSearch: RecentSearchData[];
}

export default function RecentSearch({ recentSearch }: RecentSearchProps) {
  return (
    <div>
      <p className="search">Recent Search</p>
      <div className="recent search-container">
        {recentSearch.map((data) => (
          <Link
            to={`${data.link}`}
            style={{ textDecoration: "none" }}
            key={data.link}
          >
            <div className="search-card">
              <p className="recent-name">{data.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
