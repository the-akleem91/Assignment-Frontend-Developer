import History from "./RecentSearch";
import "./SearchSection.css";
import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface SearchSectionProps {
  recentSearch: any[];
}

export default function SearchSection({ recentSearch }: SearchSectionProps) {
  const navigate = useNavigate();
  const [input, setInput] = useState<string>("");

  function handleClick(e: FormEvent) {
    e.preventDefault();
    if (!input) return;
    navigate(`/search/${input}`);
    setInput("");
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleClick}>
        <div className="input-container">
          <input
            className="input"
            placeholder="Search city, state, country"
            value={input}
            onChange={handleInputChange}
          />
          <div>
            <button className="search-btn" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
      <History recentSearch={recentSearch} />
    </div>
  );
}
