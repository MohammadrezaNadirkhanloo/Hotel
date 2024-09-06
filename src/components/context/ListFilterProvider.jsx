import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";

const ListFilterContext = createContext();

export default function ListFilterProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const valueSearch = searchParams.get("value");
  const filterNumber = JSON.parse(searchParams.get("options"))?.room;

  const { data: hotels, isLoading } = useFetch(
    "http://localhost:5000/hotels",
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

// eslint-disable-next-line react-refresh/only-export-components
export function useFilterHotel() {
  return useContext(ListFilterContext);
}
