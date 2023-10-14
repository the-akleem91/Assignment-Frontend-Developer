import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://nominatim.openstreetmap.org/search?format=json&q=";
interface SearchResult {
  display_name: string;
}

function useSearchData(name: string) {
  const [searchList, setSearchList] = useState<SearchResult[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<SearchResult[]>(`${API_URL}${name}`);
        setSearchList(response.data);
      } catch (error) {
        console.error("Error:", error);
        setSearchList([]);
      }
    }
    fetchData();
  }, [name]);

  return searchList;
}

export default useSearchData;
