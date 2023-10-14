import { Link, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./SearchSection.css";
import useSearchData from "../../hooks/useSearchData";

export default function SearchList() {
  const params = useParams<{ name: string }>();
  const searchList = useSearchData(params.name);

  if (searchList === null) return <Loader />;
  if (searchList.length === 0) return <p>No data Found</p>;

  return (
    <>
      <p className="result-p">Search Result</p>
      <div className="search-list-cards">
        {searchList.map((list, ind) => (
          <Link to={`${ind}`} className="link" key={ind}>
            <div className="list-card">{list.display_name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
