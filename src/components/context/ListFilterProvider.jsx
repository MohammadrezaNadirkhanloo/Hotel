import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";

const ListFilterContext = createContext();
const BASE_URL = "http://localhost:5000";

export default function ListFilterProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const valueSearch = searchParams.get("value");
  const filterNumber = JSON.parse(searchParams.get("options"))?.room;

  const { data: hotels, isLoading } = useFetch(
    `${BASE_URL}/hotels`,
    `host_location_like=${valueSearch || ""}&accommodates_gte=${
      filterNumber || 1
    }`
  );
  return (
    <ListFilterContext.Provider value={{ hotels, isLoading }}>
      {children}
    </ListFilterContext.Provider>
  );
}

export function useFilterHotel() {
  return useContext(ListFilterContext);
}
